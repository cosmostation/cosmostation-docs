import 'react-json-view-lite/dist/index.css';

import { AxiosResponse, AxiosResponseHeaders } from 'axios';

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
      <div>
        <div>Request</div>
        <div>Request URL: {decodeURIComponent(url)}</div>
        {!!authorization && <div>Authorization: {authorization}</div>}
        <div>Accept: {accept}</div>
      </div>
      <div>------</div>
      <div>
        <div>Response</div>
        {isError && <div>Error Occured</div>}
        <div>Status Code: {statusCode}</div>
        <div>Content Type: {contentType}</div>
        <div>Content Length: {contentLength}</div>
        {responseTime && <div>Response Time: {responseTime}ms</div>}
      </div>
      <div>------</div>
      <div>
        <div>Body Response</div>
        <JsonViewer data={resultData} shouldInitiallyExpand={(level) => level < 1} />
      </div>
    </section>
  );
};

export default ResultSection;
