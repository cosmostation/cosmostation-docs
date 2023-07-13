import React, { ChangeEvent, useCallback } from 'react';

import Input from '@/components/common/input';
import { RequestInput } from '../interfaces/request-input';
import { clone } from 'ramda';
import styles from './index.module.scss';

interface IParameterSectionProps {
  parameters: RegExpMatchArray;
  inputParams: RequestInput[];
  setInputParams: (inputParams: RequestInput[]) => void;
  displayKey?: string;
}

const ParameterSection: React.FC<IParameterSectionProps> = ({
  parameters,
  inputParams,
  setInputParams,
  displayKey,
}) => {
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
      {parameters.map((param, idx) => {
        if (param !== displayKey) {
          return;
        }

        const currentInput = inputParams[idx];

        return (
          <div key={param}>
            <Input
              label={param}
              value={currentInput?.value || ''}
              onChange={parameterInputHandler(idx)}
              optional={false}
              placeholder={displayKey}
            />
          </div>
        );
      })}
    </section>
  );
};

export default ParameterSection;
