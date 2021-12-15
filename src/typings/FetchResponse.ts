interface FetchResponse<T> {
  data: T | null;
  error: string | null;
}

export default FetchResponse;
