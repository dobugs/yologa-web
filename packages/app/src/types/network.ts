interface Paging {
  page: number;
  size: number;
}

interface ListResponse<T> {
  totalElements: number;
  page: number;
  size: number;
  content: T[];
}

export type { Paging, ListResponse };
