import { JsonView, Props } from 'react-json-view-lite';
import React, { useMemo } from 'react';

import { StyleProps } from 'react-json-view-lite/dist/DataRenderer';
import { omit } from 'ramda';
import styles from './index.module.scss';

interface IJsonViwerProps extends Props {}

const jsonViwerStyle = {
  container: styles.container,
  basicChildStyle: styles.basicChildStyle,
  expander: styles.expander,
  label: styles.label,
  nullValue: styles.nullValue,
  undefinedValue: styles.undefinedValue,
  numberValue: styles.numberValue,
  stringValue: styles.stringValue,
  booleanValue: styles.booleanValue,
  otherValue: styles.otherValue,
  punctuation: styles.punctuation,
  pointer: styles.pointer,
} as StyleProps;

const JsonViewer: React.FC<IJsonViwerProps> = (props) => {
  const omittedProps = omit(['style'], props);

  const viewer = useMemo(() => {
    return <JsonView {...omittedProps} style={jsonViwerStyle} />;
  }, [props.data]);

  return viewer;
};

export default JsonViewer;
