import qs from 'query-string';
import { BaseURLType } from 'types';

function generateSrc(baseURL: BaseURLType, params: Record<string, unknown>) {
  const query = qs.stringify(params);
  return `${baseURL}?${query}`;
}

export default generateSrc;
