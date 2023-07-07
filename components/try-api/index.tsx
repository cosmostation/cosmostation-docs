import { Query, RequestInput } from './interfaces/request-input';
import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { clone, complement, filter, isEmpty, isNil, map, path, pathOr, pipe } from 'ramda';

import BodySection from './body-section';
import Button from '../common/button';
import HeaderSection from './header-section';
import Input from '../common/input';
import ParameterSection from './parameter-section';
import QuerySection from './query-section';
import ResultSection from './result-section';
import qs from 'qs';
import styles from './index.module.scss';

interface ITryAPIProps {
  method: Method;
  host: string;
  url: string;
  query?: Query[];
  useBearerAuthorization?: boolean;
}

export const TryAPI: React.FC<ITryAPIProps> = ({
  method,
  host,
  url,
  query,
  useBearerAuthorization,
}) => {
  const [bearerToken, setBearerToken] = useState(
    'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg2ODE0NDM3fQ.craahQR9WtJOOxspvNtiQmnNxD7l05tCBStgSW6cLstJcCFBU54_Kpp_n7aPfgIop2hjOobuZn85LVq4VxuLGA',
  );
  const [inputParams, setInputParams] = useState<RequestInput[]>([]);
  const [inputQuery, setInputQuery] = useState<RequestInput[]>([]);

  const [result, setResult] = useState<AxiosResponse>();

  const parameters = useMemo(() => {
    const regex = /(?<=:)(\w+)/g;
    const matches = url.match(regex);

    return matches;
  }, [url]);

  const queryString = useMemo(() => {
    const queryObject = {};

    inputQuery.forEach((q) => {
      queryObject[q.key] = q.value;
    });

    const existQueries = filter(complement(isEmpty))(queryObject);

    const queryStr = qs.stringify(existQueries, { addQueryPrefix: true });
    return queryStr;
  }, [inputQuery]);

  const callUrl = useMemo(() => {
    const regex = /:(\w+)/g;

    const replacedUrl = url.replace(regex, (match, capture) => {
      const replacedValue = inputParams.find((param) => param.key === capture);

      if (isNil(replacedValue)) {
        return match;
      }

      if (!replacedValue.value) {
        return `:${replacedValue.key}`;
      }

      return replacedValue.value;
    });

    return `${host}${replacedUrl}${queryString}`;
  }, [url, inputParams, queryString]);

  const bearerTokenInputChangeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setBearerToken(inputValue);
  }, []);

  const clickHandler = useCallback(async () => {
    try {
      const axiosOption = {
        method,
        url: callUrl,
        headers: {},
      } as AxiosRequestConfig;

      if (useBearerAuthorization) {
        axiosOption.headers = {
          ...axiosOption.headers,
          Authorization: `Bearer ${bearerToken}`,
        };
      }

      const result = await axios(axiosOption);
      setResult(result);
    } catch (err) {
      setResult(err.response);
    }
  }, [method, callUrl, useBearerAuthorization, bearerToken]);

  const initInputParams = useCallback(() => {
    // 초기 params 입력값 초기화
    const initParams = parameters.map<RequestInput>((param) => {
      return {
        key: param,
        value: '',
        optional: false,
      };
    });

    setInputParams(initParams);
  }, [parameters]);

  const initInputQuery = useCallback(() => {
    // 초기 query 입력값 초기화
    const initQuery = query?.map<RequestInput>((queryProp) => {
      return {
        key: queryProp.key,
        value: '',
        optional: queryProp.optional || true,
      };
    });

    setInputQuery(initQuery);
  }, [query]);

  useEffect(initInputParams, [parameters]);
  useEffect(initInputQuery, [query]);

  const clearInput = useCallback(pipe(initInputParams, initInputQuery), [
    initInputParams,
    initInputQuery,
  ]);

  return (
    <div className={styles.container}>
      <div>
        <div>Method: {method.toUpperCase()}</div>
        <div>Url: {url}</div>
        <div>CallUrl: {callUrl}</div>
      </div>
      <div>------------------</div>
      <HeaderSection
        bearerToken={bearerToken}
        useBearerAuthorization={useBearerAuthorization}
        bearerTokenInputChangeHandler={bearerTokenInputChangeHandler}
      />
      <div>------------------</div>
      <ParameterSection
        parameters={parameters}
        inputParams={inputParams}
        setInputParams={setInputParams}
      />
      <div>------------------</div>
      <QuerySection query={query} inputQuery={inputQuery} setInputQuery={setInputQuery} />
      <BodySection />
      <div className={styles.buttonContainer}>
        <Button onClick={clickHandler}>Execute</Button>
        <Button onClick={clearInput}>Clear</Button>
      </div>
      <div>------------------</div>
      <ResultSection result={result} />
    </div>
  );
};
