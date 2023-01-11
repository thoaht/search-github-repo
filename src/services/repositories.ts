import axios from 'libs/axios';
import { SearchRepositoriesResult } from './interfaces';
import { PER_PAGE } from 'utils/constants';
export const searchRepositoriesWithQuery = async ({
  query,
  page,
  sortParamStr,
}: {
  query: string;
  page: number;
  sortParamStr: string;
}): Promise<SearchRepositoriesResult> => {
  return (
    await axios.get(
      `/search/repositories?q=${query}&page=${page}&per_page=${PER_PAGE}${sortParamStr}`
    )
  )?.data as SearchRepositoriesResult;
};
