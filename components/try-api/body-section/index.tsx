import JsonEditor from '@/components/common/json-editor';
import React from 'react';

interface IBodySectionProps {
  payload: object;
  onChangePayload: (payload: object) => void;
}

const BodySection: React.FC<IBodySectionProps> = ({ payload, onChangePayload }) => {
  return <JsonEditor value={payload} onChange={onChangePayload} />;
};

export default BodySection;
