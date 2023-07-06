import React from 'react';
import styles from './index.module.scss';

interface IResultSectionProps {}

const ResultSection: React.FC<IResultSectionProps> = () => {
  return <section className={styles.container}>Results</section>;
};

export default ResultSection;
