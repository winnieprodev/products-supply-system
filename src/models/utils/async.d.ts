export interface Error {
  message: string;
}

export interface Async<T> {
  isLoading: boolean;
  error: Error | undefined;
  data: T | undefined;
}
