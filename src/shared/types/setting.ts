export type Setting<T, K = unknown> = {
  key: string;
  value: T;
  properties: K;
};
