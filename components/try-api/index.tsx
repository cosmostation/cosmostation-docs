import { Query, RequestInput } from './interfaces/request-input';
import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { clone, complement, filter, isEmpty, isNil, map, path, pathOr } from 'ramda';

import BodySection from './body-section';
import Button from '../common/button';
import HeaderSection from './header-section';
import Input from '../common/input';
import ParameterSection from './parameter-section';
import QuerySection from './query-section';
import ResultSection from './result-section';
import axios from 'axios';
import qs from 'qs';
import styles from './index.module.scss';

interface ITryAPIProps {
  url: string;
  query?: Query[];
  useBearerAuthorization?: boolean;
}

export const TryAPI: React.FC<ITryAPIProps> = ({ url, query, useBearerAuthorization }) => {
  const [bearerToken, setBearerToken] = useState('');
  const [inputParams, setInputParams] = useState<RequestInput[]>([]);
  const [inputQuery, setInputQuery] = useState<RequestInput[]>([]);

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

    return replacedUrl;
  }, [url, inputParams]);

  const queryString = useMemo(() => {
    const queryObject = {};

    inputQuery.forEach((q) => {
      queryObject[q.key] = q.value;
    });

    const existQueries = filter(complement(isEmpty))(queryObject);

    const queryStr = qs.stringify(existQueries, { addQueryPrefix: true });
    return queryStr;
  }, [inputQuery]);

  const bearerTokenInputChangeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setBearerToken(inputValue);
  }, []);

  const clickHandler = useCallback(async () => {
    const result = await axios.get(callUrl);
    console.log(result);
  }, [callUrl]);

  return (
    <div className={styles.container}>
      <div>
        <div>url: {url}</div>
        <div>
          callUrl: {callUrl}
          {decodeURIComponent(queryString)}
        </div>
      </div>
      <HeaderSection
        bearerToken={bearerToken}
        useBearerAuthorization={useBearerAuthorization}
        bearerTokenInputChangeHandler={bearerTokenInputChangeHandler}
      />
      <ParameterSection url={url} inputParams={inputParams} setInputParams={setInputParams} />
      <QuerySection query={query} inputQuery={inputQuery} setInputQuery={setInputQuery} />
      <BodySection />
      <ResultSection />
      <div>
        <Button onClick={clickHandler}>Try</Button>
      </div>
    </div>
  );
};
