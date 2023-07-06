import React, { ChangeEventHandler } from 'react';

import Input from '@/components/common/input';
import styles from './index.module.scss';

interface IHeaderSectionProps {
  bearerToken: string;
  bearerTokenInputChangeHandler: ChangeEventHandler<HTMLInputElement>;
  useBearerAuthorization?: boolean;
}

const HeaderSection: React.FC<IHeaderSectionProps> = ({
  bearerToken,
  useBearerAuthorization,
  bearerTokenInputChangeHandler,
}) => {
  return (
    <section className={styles.container}>
      <>
        Header
        {useBearerAuthorization && (
          <Input
            label="Bearer Token"
            optional={false}
            onChange={bearerTokenInputChangeHandler}
            value={bearerToken}
          />
        )}
      </>
    </section>
  );
};

export default HeaderSection;
