import { useMutation } from '@tanstack/react-query';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import PageTitle from 'components/atoms/PageTitle';
import SearchResultsSection from 'components/organisms/SearchResultsSection';
import BaseTemplate from 'components/templates/BaseTemplate';
import { FC, useEffect, useMemo, useState } from 'react';
import { searchRepositoriesWithQuery } from 'services/repositories';
import styles from './Home.module.scss';
import { AxiosError } from 'axios';
import {
  SearchRepositoriesResult,
  SortParam,
  SortType,
} from 'services/interfaces';
import Pagination from 'components/molecules/Pagination';
import { PER_PAGE } from 'utils/constants';
import Dropdown from 'components/molecules/Dropdown';
import { debounce } from 'utils';

const SORT_OPTIONS = [
  { label: 'Best match', value: '' },
  {
    label: 'Most stars',
    value: `&sort=${SortParam.Stars}&order=${SortType.DESC}`,
  },
  {
    label: 'Fewest stars',
    value: `&sort=${SortParam.Stars}&order=${SortType.ASC}`,
  },
  {
    label: 'Most forks',
    value: `&sort=${SortParam.Forks}&order=${SortType.DESC}`,
  },
  {
    label: 'Fewest forks',
    value: `&sort=${SortParam.Forks}&order=${SortType.ASC}`,
  },
  {
    label: 'Recently updated',
    value: `&sort=${SortParam.Updated}&order=${SortType.DESC}`,
  },
  {
    label: 'Least recently updated',
    value: `&sort=${SortParam.Updated}&order=${SortType.ASC}`,
  },
];

const Home: FC = () => {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState('');
  const [result, setResult] = useState<SearchRepositoriesResult>();
  const [sortParamStr, setSortParamStr] = useState('');

  useEffect(() => {
    // if (!query) return;
    debouncedSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, sortParamStr]);

  const { mutate: handleSearch, isLoading: isSearching } = useMutation(
    async () =>
      await searchRepositoriesWithQuery({
        query,
        page: currentPage,
        sortParamStr,
      }),
    {
      onError: (error: AxiosError) => {
        setError(error.message);
        const errCode = error.response?.status ?? 0;
        switch (errCode) {
          case 422:
            setError('Something went wrong with your condition');
            break;
          case 403:
            setError(
              'API rate limit exceeded. Please wait for a minute and try again.'
            );
            break;
          default:
            setError('Something went wrong');
        }
        console.log(error.response?.status);
        setResult({
          total_count: 0,
          incomplete_results: false,
          items: [],
        });
      },
      onSuccess: (data) => {
        setResult(data);

        if (data.items.length > 0) {
          setError('');
        } else {
          setError(`We couldn’t find any repositories matching '${query}'`);
        }
      },
    }
  );

  const debouncedSearch = useMemo(() => {
    return debounce(() => handleSearch(), 250);
  }, [handleSearch]);
  const handleSearchEvent = (): void => {
    debouncedSearch();
    setCurrentPage(1);
  };

  return (
    <BaseTemplate>
      <div className={styles.homePage}>
        <PageTitle text="Github Repositories Search" className={styles.title} />
        <div className={styles.body}>
          <div className={styles.searchInputWrapper}>
            <Input
              placeholder="Search Github"
              value={query}
              onChange={(val) => setQuery(val)}
              className={styles.searchInput}
              onEnter={() => handleSearchEvent()}
            />
            <Button
              text="Search"
              disabled={isSearching}
              onClick={() => handleSearchEvent()}
              className={styles.searchButton}
            />
          </div>
          {(result?.items ?? []).length > 0 && !isSearching && (
            <div>
              <Dropdown
                items={SORT_OPTIONS}
                title="Sort options"
                className={styles.dropdown}
                currentValue={sortParamStr}
                onChangeValue={(val) => setSortParamStr(val)}
              />
            </div>
          )}
          {error && (
            <div className={styles.searchResultsWrapper}>
              <div className={styles.errorText}>{error}</div>
            </div>
          )}
          {(result?.items ?? []).length > 0 && (
            <div className={styles.searchResultsWrapper}>
              <SearchResultsSection result={result} isLoading={isSearching} />
            </div>
          )}
          {(result?.items ?? []).length > 0 && !isSearching && (
            <div className={styles.pagination}>
              <Pagination
                currentPage={currentPage}
                itemCount={result?.total_count ?? 0}
                perPage={PER_PAGE}
                onChangeCurrent={setCurrentPage}
              />
            </div>
          )}
        </div>
      </div>
    </BaseTemplate>
  );
};

export default Home;
