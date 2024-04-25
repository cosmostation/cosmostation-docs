import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

import CardListTitle from '@/components/common/cardList/cardListTitle';
import CardListValue from '@/components/common/cardList/cardListValue';
import Select from '@/components/common/select';
import Input from '@/components/common/input';
import Button from '@/components/common/button';
import ResultSection from '../result-section';

import { cosmwasmVersions, COSMWASM__PROJECT_TYPE, COSMWASM__PLATFORM } from '../variables';

import styles from './index.module.scss';

const githubUrlRegex = /^https:\/\/github.com\/([\w\.@\:/\-]+)(\.git)(\/)?$/;

const Cosmwwasm: React.FC = () => {
  const optimizerPlatform = COSMWASM__PLATFORM.X86_64;

  const [optimizerVersion, setOptimizerVersion] = useState<string>(cosmwasmVersions[0]);
  const [optimizerType, setOptimizerType] = useState<string>(COSMWASM__PROJECT_TYPE.WORKSPACE);
  const [githubRepoUrl, setGithubRepoUrl] = useState<string>('');
  const [branchName, setBranchName] = useState<string>('');

  const [isLoading, setIsLoading] = useState(false);

  const [result, setResult] = useState<AxiosResponse>();

  const optimizerVersionSelectChangeHandler = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const inputValue = event.target.value;
      setOptimizerVersion(inputValue);
    },
    [],
  );

  const optimizerTypeSelectChangeHandler = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    const inputValue = event.target.value;
    setOptimizerType(inputValue);
  }, []);

  const githubRepoUrlChangeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setGithubRepoUrl(inputValue);
  }, []);

  const branchNameChangeHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setBranchName(inputValue);
  }, []);

  const isValidated = useMemo(() => {
    return (
      cosmwasmVersions.includes(optimizerVersion) &&
      Object.values(COSMWASM__PROJECT_TYPE).includes(optimizerType as COSMWASM__PROJECT_TYPE) &&
      githubUrlRegex.test(githubRepoUrl) &&
      branchName
    );
  }, [optimizerVersion, optimizerType, githubRepoUrl, branchName]);

  const params = useMemo(() => {
    return {
      optimizerVersion,
      projectType: optimizerType,
      git: githubRepoUrl,
      branch: branchName,
      platform: optimizerPlatform,
    };
  }, [optimizerVersion, optimizerType, githubRepoUrl, branchName]);

  const verifyOnClick = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.post('https://api.verify.mintscan.io/cosmwasm/verify', params);
      setResult(response);
    } catch (e) {
      setResult(e.response);
    } finally {
      setIsLoading(false);
    }
  }, [params]);

  const clearOnClick = useCallback(() => {
    setOptimizerVersion(cosmwasmVersions[0]);
    setOptimizerType(COSMWASM__PROJECT_TYPE.WORKSPACE);
    setGithubRepoUrl('');
    setBranchName('');
    setResult(undefined);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.sectionContent}>
          <CardListTitle>Parameters</CardListTitle>
          <CardListValue title="Optimizer Type" optional>
            <Select onChange={optimizerTypeSelectChangeHandler} value={optimizerType}>
              <option value={COSMWASM__PROJECT_TYPE.WORKSPACE}>cosmwasm/workspace-optimizer</option>
              <option value={COSMWASM__PROJECT_TYPE.CONTRACT}>cosmwasm/rust-optimizer</option>
            </Select>
          </CardListValue>
          <CardListValue title="Optimizer Version" optional>
            <Select onChange={optimizerVersionSelectChangeHandler} value={optimizerVersion}>
              {cosmwasmVersions.map((version) => {
                return (
                  <option key={version} value={version}>
                    {version}
                  </option>
                );
              })}
            </Select>
          </CardListValue>
          <CardListValue title="Repository Url" optional>
            <Input
              onChange={githubRepoUrlChangeHandler}
              value={githubRepoUrl}
              placeholder="https://github.com/CosmWasm/cw-plus.git"
            />
          </CardListValue>
          <CardListValue title="Branch Name" optional>
            <Input onChange={branchNameChangeHandler} value={branchName} placeholder="v2.0.0" />
          </CardListValue>
        </div>
        <div className={styles.buttonContainer}>
          <Button onClick={verifyOnClick} disabled={!isValidated}>
            Verify
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
