import { Query, RequestInput } from './interfaces/request-input';
import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { complement, filter, isEmpty, isNil, pipe } from 'ramda';
import { includes, throttle } from 'lodash';

import BodySection from './body-section';
import Button from '../common/button';
import CardListTitle from '../common/cardList/cardListTitle';
import CardListValue from '../common/cardList/cardListValue';
import CautionInfoIconSVG from '@/assets/CautionInfoIcon.svg';
import HeaderSection from './header-section';
import ParameterSection from './parameter-section';
import QuerySection from './query-section';
import ResultSection from './result-section';
import dayjs from 'dayjs';
import qs from 'qs';
import styles from './index.module.scss';

interface ITryAPIProps {
  method: Method;
  host: string;
  url: string;
  query?: Query[];
  body?: object;
  useBearerAuthorization?: boolean;
  disabled?: boolean;
}

export const TryAPI: React.FC<ITryAPIProps> = ({
  method,
  host,
  url,
  query,
  body,
  useBearerAuthorization,
  disabled,
}) => {
  const [bearerToken, setBearerToken] = useState('');
  const [inputParams, setInputParams] = useState<RequestInput[]>([]);
  const [inputQuery, setInputQuery] = useState<RequestInput[]>([]);
  const [inputBody, setInputBody] = useState<object>(body);

  const [result, setResult] = useState<AxiosResponse>();

  const [isLoading, setIsLoading] = useState(false);
  const [responseTime, setResponseTime] = useState(0);

  const parameters = useMemo(() => {
    const regex = /(?<=:)(\w+)/g;
    const matches = url.match(regex);

    return matches;
  }, [url]);

  const initInputParams = useCallback(() => {
    // 초기 params 입력값 초기화
    const initParams = parameters?.map<RequestInput>((param) => {
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
    const initQuery =
      query?.map<RequestInput>((queryProp) => {
        return {
          key: queryProp.key,
          value: '',
          optional: queryProp.optional || true,
        };
      }) || [];

    setInputQuery(initQuery);
  }, [query]);

  const initInputBody = useCallback(() => {
    setInputBody(body);
  }, [body]);

  useEffect(initInputParams, [parameters]);
  useEffect(initInputQuery, [query]);

  const queryString = useMemo(() => {
    const queryObject = {};

    inputQuery.forEach((q) => {
      queryObject[q.key] = decodeURIComponent(q.value);
    });

    const existQueries = filter(complement(isEmpty))(queryObject);

    const queryStr = qs.stringify(existQueries, { addQueryPrefix: true });
    return queryStr;
  }, [inputQuery]);

  const callUrl = useMemo(() => {
    const regex = /:(\w+)/g;

    const replacedUrl = url.replace(regex, (match, capture) => {
      const replacedValue = inputParams?.find((param) => param.key === capture);

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

  const isValidRequest = useMemo(() => {
    if (disabled) {
      return false;
    }

    const invalidParams = inputParams?.filter(
      (param) => !param.optional && (!param.value || isEmpty(param.value)),
    );
    const invalidQuery = inputQuery.filter(
      (param) => !param.optional && (!param.value || isEmpty(param.value)),
    );

    // 토큰 필수일때 token 입력이 없으면 invalid
    if (useBearerAuthorization && isEmpty(bearerToken)) {
      return false;
    }

    // 허용되지 않는 입력일 경우 invalid
    if (!isEmpty(invalidParams) || !isEmpty(invalidQuery)) {
      return false;
    }

    if (!isEmpty(body) && isEmpty(inputBody)) {
      return false;
    }

    return true;
  }, [disabled, useBearerAuthorization, bearerToken, inputParams, inputQuery]);

  const clickHandler = useCallback(
    throttle(async () => {
      try {
        // 필수 파라미터 입력 여부 체크.
        if (!isValidRequest) {
          return false;
        }

        const axiosOption = {
          method,
          url: callUrl,
          headers: {},
        } as AxiosRequestConfig;

        if (method === 'POST') {
          axiosOption.data = inputBody;
        }

        if (useBearerAuthorization) {
          axiosOption.headers = {
            ...axiosOption.headers,
            Authorization: `Bearer ${bearerToken}`,
          };
        }

        setIsLoading(true);
        setResponseTime(0);
        const startTime = dayjs();
        const result = await axios(axiosOption);
        const finishTime = dayjs();
        const responseTime = finishTime.diff(startTime, 'milliseconds');

        setResponseTime(responseTime);
        setResult(result);
      } catch (err) {
        setResult(err.response);
      } finally {
        setIsLoading(false);
      }
    }, 1000),
    [method, callUrl, inputBody, useBearerAuthorization, bearerToken, isValidRequest],
  );

  const clearInput = useCallback(pipe(initInputParams, initInputQuery, initInputBody), [
    initInputParams,
    initInputQuery,
    initInputBody,
  ]);

  return (
    <div className={styles.container}>
      <h3>Try API</h3>
      {disabled && (
        <h5 className={styles.disabledDescription}>
          <img className={styles.cautionIcon} src={CautionInfoIconSVG.src} />
          You are unable to try executing API from this page.
        </h5>
      )}
      <div className={styles.contentContainer}>
        <div className={styles.sectionContent}>
          <CardListTitle>
            Method : <span className={styles.method}>{method.toUpperCase()}</span>
          </CardListTitle>
          <CardListValue title="URL">{url}</CardListValue>
          <CardListValue title="CallURL">{decodeURIComponent(callUrl)}</CardListValue>
        </div>
        <div className={styles.sectionContent}>
          <CardListTitle border>Header</CardListTitle>
          <CardListValue title="Bear Token" optional>
            <HeaderSection
              bearerToken={bearerToken}
              useBearerAuthorization={useBearerAuthorization}
              bearerTokenInputChangeHandler={bearerTokenInputChangeHandler}
            />
          </CardListValue>
        </div>
        {!!parameters && !isEmpty(parameters) && (
          <div className={styles.sectionContent}>
            <CardListTitle>Parameters</CardListTitle>
            {parameters.map((v) => (
              <CardListValue key={v} title={v} optional>
                <ParameterSection
                  displayKey={v}
                  parameters={parameters}
                  inputParams={inputParams}
                  setInputParams={setInputParams}
                />
              </CardListValue>
            ))}
          </div>
        )}

        {!!query && !isEmpty(query) && (
          <div className={styles.sectionContent}>
            <CardListTitle>Queries</CardListTitle>
            <QuerySection query={query} inputQuery={inputQuery} setInputQuery={setInputQuery} />
          </div>
        )}
        {!!body && (
          <div className={styles.sectionContent}>
            <CardListTitle>Body</CardListTitle>
            <BodySection payload={inputBody} onChangePayload={setInputBody} />
          </div>
        )}
        <div className={styles.buttonContainer}>
          <Button onClick={clickHandler} disabled={!isValidRequest}>
            Execute
          </Button>
          <Button onClick={clearInput} emptyColor={true}>
            Clear
          </Button>
        </div>
        {isLoading && <div className={styles.loading}>Loading...</div>}
        {!isLoading && <ResultSection result={result} responseTime={responseTime} />}
      </div>
    </div>
  );
};
