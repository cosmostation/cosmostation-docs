import { Query, RequestInput } from '../interfaces/request-input';
import React, { ChangeEvent, useCallback, useEffect } from 'react';

import CardListValue from '@/components/common/cardList/cardListValue';
import Input from '@/components/common/input';
import { clone } from 'ramda';

interface IQuerySectionProps {
  query?: Query[];
  inputQuery: RequestInput[];
  setInputQuery: (inputQuery: RequestInput[]) => void;
}

const QuerySection: React.FC<IQuerySectionProps> = ({ query, inputQuery, setInputQuery }) => {
  useEffect(() => {
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

  const queryInputHandler = useCallback(
    (idx: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;
      const buildInputQuery = clone(inputQuery);
      const targetInputQuery = buildInputQuery[idx];

      const encodedValue = inputValue;

      buildInputQuery[idx] = {
        key: targetInputQuery.key,
        value: encodedValue,
        optional: targetInputQuery.optional,
      };

      setInputQuery(buildInputQuery);
    },
    [inputQuery],
  );

  if (!query) {
    return null;
  }

  return (
    <div>
      {query?.map((q, idx) => {
        const currentInput = inputQuery[idx];

        return (
          <CardListValue key={`${q.key}-${idx}`} title={q.key} optional={!q.optional}>
            <Input
              label={q.key}
              value={currentInput?.value || ''}
              onChange={queryInputHandler(idx)}
              optional={q.optional || false}
              type={q.type}
              placeholder={q.placeholder}
            />
          </CardListValue>
        );
      })}
    </div>
  );
};

export default QuerySection;
