import styles from './index.module.scss';

import Button from '@/components/common/button';

import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { githubDark, githubLight } from '@uiw/codemirror-theme-github';

import { useTheme } from 'nextra-theme-docs';
import { useCallback, useState } from 'react';
import { Callout } from 'nextra-theme-docs';
import { useCosmosAccount } from '@cosmostation/use-wallets';

export default function Test() {
  const { theme } = useTheme();

  const [messages, setMessage] = useState([
    {
      type_url: '/cosmos.bank.v1beta1.MsgSend',
      value: {
        from_address: 'from_address', // [input]: string
        to_address: 'to_address', // [input]: string
        amount: [
          {
            denom: 'denom', // [input]: string
            amount: 'amount', // [input]: string
          },
        ],
      },
    },
  ]);

  const [parsingError, setParsingError] = useState('');

  const [error, setError] = useState('');
  const [result, setResult] = useState('');

  const { data } = useCosmosAccount('cosmoshub-4');

  const onChange = useCallback(
    (value: string) => {
      try {
        const json = JSON.parse(value);
        setMessage(json);
        setParsingError('');
      } catch (e) {
        setParsingError(e?.message || 'parse error');
      }
    },
    [setMessage],
  );

  return (
    <div className={styles.container}>
      <Callout type="error">
        The actual transaction is executed. If you don't want to, don't sign.
      </Callout>

      <div style={{ marginTop: '1rem' }}>
        <CodeMirror
          extensions={[json()]}
          height="20rem"
          theme={theme === 'dark' ? githubDark : githubLight}
          onChange={onChange}
          value={JSON.stringify(messages, null, 2)}
        />
        {parsingError && <Callout type="error">{parsingError}</Callout>}
      </div>

      <Button
        style={{ marginTop: '1rem' }}
        onClick={async () => {
          try {
            setError('');
            if (data?.methods) {
              const result = await data?.methods.signAndSendTransaction({
                messages,
                memo: 'Test (Sign And Send Transaction)',
              });
              setResult(result);
            }
          } catch (e) {
            setError(e?.message || 'signAndSendTransaction error');
          }
        }}
      >
        Sign And Send Transaction
      </Button>

      {result && (
        <Callout>
          <a href={`https://mintscan.io/cosmos/txs/${result}`} target="_blank">
            {result}
          </a>
        </Callout>
      )}
      {error && <Callout type="error">{error}</Callout>}
    </div>
  );
}
