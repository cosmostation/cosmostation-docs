import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

import CardListTitle from '@/components/common/cardList/cardListTitle';
import CardListValue from '@/components/common/cardList/cardListValue';
import Input from '@/components/common/input';
import Button from '@/components/common/button';
import ResultSection from '../result-section';

import styles from './index.module.scss';

const idRegex = /^\d+$/;

const Cosmwwasm: React.FC = () => {
  const [id, setID] = useState<string>('');

  const [isLoading, setIsLoading] = useState(false);

  const [result, setResult] = useState<AxiosResponse>();

  const idChangeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setID(inputValue);
  }, []);

  const isValidated = useMemo(() => {
    return idRegex.test(id);
  }, [id]);

  const verifyOnClick = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`https://api.verify.mintscan.io/cosmwasm/verify/${id}`);
      setResult(response);
    } catch (e) {
      setResult(e.response);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  const clearOnClick = useCallback(() => {
    setID('');
    setResult(undefined);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.sectionContent}>
          <CardListTitle>Parameters</CardListTitle>
          <CardListValue title="Result ID" optional>
            <Input onChange={idChangeHandler} value={id} placeholder="1" />
          </CardListValue>
        </div>
        <div className={styles.buttonContainer}>
          <Button onClick={verifyOnClick} disabled={!isValidated}>
            Check
          </Button>
          <Button onClick={clearOnClick}>Clear</Button>
        </div>
      </div>
      {isLoading && <div className={styles.loading}>Loading...</div>}
      {!isLoading && <ResultSection result={result} />}
    </div>
  );
};

export default Cosmwwasm;
