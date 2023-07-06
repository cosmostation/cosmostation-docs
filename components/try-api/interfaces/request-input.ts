export interface Query {
  key: string;
  type?: 'string' | 'number' | 'datetime';
  optional?: boolean;
  placeholder?: string;
}

export interface RequestInput {
  key: string;
  value: string;
  optional?: boolean;
}
