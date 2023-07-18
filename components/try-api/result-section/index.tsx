import 'react-json-view-lite/dist/index.css';

import { AxiosResponse, AxiosResponseHeaders } from 'axios';

import CardListTitle from '@/components/common/cardList/cardListTitle';
import CardListValue from '@/components/common/cardList/cardListValue';
import JsonViewer from '@/components/common/json-viewer';
import React from 'react';
import styles from './index.module.scss';

interface IResultSectionProps {
  result?: AxiosResponse;
  responseTime?: number;
}

const ResultSection: React.FC<IResultSectionProps> = ({ result, responseTime }) => {
  if (!result) {
    return null;
  }

  const statusCode = result.status;
  const responseHeaders = result.headers as AxiosResponseHeaders;
  const requestHeaders = result.config.headers;
  const url = result.config.url;
  const resultData = result.data;

  const authorization = requestHeaders.Authorization;
  const accept = requestHeaders.Accept;

  const contentType = responseHeaders['content-type'];
  const contentLength = responseHeaders['content-length'];

  const isError = statusCode >= 400;

  return (
    <section className={styles.container}>
      <CardListTitle>Request</CardListTitle>
      <div className={styles.sectionContent}>
        <CardListValue title="Request URL">{decodeURIComponent(url)}</CardListValue>
        {!!authorization && <CardListValue title="Authorization">{authorization}</CardListValue>}
        <CardListValue title="Accept">{accept}</CardListValue>
      </div>
      <CardListTitle border>Response</CardListTitle>
      <div className={styles.sectionContent}>
        <CardListValue title="Status Code">
          {statusCode}
          {isError && <span className={styles.error}>(Error Occured)</span>}
        </CardListValue>
        <CardListValue title="Content Type">{contentType}</CardListValue>
        <CardListValue title="Content Length">{contentLength}</CardListValue>
        {!isError && responseTime && (
          <CardListValue title="Response Time">{responseTime}ms</CardListValue>
        )}
      </div>
      <CardListTitle border>Body Response</CardListTitle>
      <JsonViewer data={resultData} shouldInitiallyExpand={(level) => level < 3} />
    </section>
  );
};

export default ResultSection;
