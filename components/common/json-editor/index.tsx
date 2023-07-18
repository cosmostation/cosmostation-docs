import { InteractionProps, ReactJsonViewProps } from 'react-json-view';
import React, { useCallback, useMemo } from 'react';

import dynamic from 'next/dynamic';
import { omit } from 'ramda';
import styles from './index.module.scss';

const Editor = dynamic(() => import('react-json-view'), {
  ssr: false,
});

interface IJsonEditorProps {
  value: object;
  onChange: (value: object) => void;
}

const JsonEditor: React.FC<IJsonEditorProps> = ({ value, onChange }) => {
  const onEdit = useCallback((value: InteractionProps) => {
    onChange(value.updated_src);
  }, []);

  const viewer = useMemo(() => {
    return (
      <Editor
        src={value}
        name={false}
        indentWidth={2}
        displayObjectSize={false}
        style={{ backgroundColor: 'transparent' }}
        onEdit={onEdit}
      />
    );
  }, [value]);

  return <div className={styles.container}>{viewer}</div>;
};

export default JsonEditor;
