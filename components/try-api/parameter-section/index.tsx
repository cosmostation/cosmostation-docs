import React, { ChangeEvent, useCallback, useEffect, useMemo } from 'react';

import Input from '@/components/common/input';
import { RequestInput } from '../interfaces/request-input';
import { clone } from 'ramda';
import styles from './index.module.scss';

interface IParameterSectionProps {
  url: string;
  inputParams: RequestInput[];
  setInputParams: (inputParams: RequestInput[]) => void;
}

const ParameterSection: React.FC<IParameterSectionProps> = ({
  url,
  inputParams,
  setInputParams,
}) => {
  const parameters = useMemo(() => {
    const regex = /(?<=:)(\w+)/g;
    const matches = url.match(regex);

    return matches;
  }, [url]);

  useEffect(() => {
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

  const parameterInputHandler = useCallback(
    (idx: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;

      const buildInputParams = clone(inputParams);
      const targetInputParam = buildInputParams[idx];

      buildInputParams[idx] = {
        key: targetInputParam.key,
        value: inputValue,
        optional: targetInputParam.optional,
      };

      setInputParams(buildInputParams);
    },
    [inputParams],
  );

  return (
    <section className={styles.container}>
      <div>Parameters</div>
      {parameters.map((param, idx) => {
        const currentInput = inputParams[idx];

        return (
          <div key={param}>
            <Input
              label={param}
              value={currentInput?.value || ''}
              onChange={parameterInputHandler(idx)}
              optional={false}
            />
          </div>
        );
      })}
    </section>
  );
};

export default ParameterSection;
