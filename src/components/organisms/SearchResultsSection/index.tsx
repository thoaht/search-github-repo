import { LoadingIcon } from 'components/atoms/Icon';
import RepositoryComponent from 'components/molecules/RepositoryComponent';
import { FC, memo } from 'react';
import { SearchRepositoriesResult } from 'services/interfaces';
import styles from './SearchResultsSection.module.scss';

interface SearchResultsSectionProps {
  result: SearchRepositoriesResult | undefined;
  isLoading: boolean;
}
const SearchResultsSection: FC<SearchResultsSectionProps> = ({
  result,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <div className={styles.loading}>
        <LoadingIcon width={80} height={80} />
      </div>
    );
  }
  if (!result) return <></>;
  return (
    <div className={styles.searchResultsSection}>
      <h3 className={styles.title}>
        Showing {result.total_count.toLocaleString()} available repositories
        results
      </h3>
      <div className={styles.resultsList}>
        {result.items.map((item, index) => (
          <RepositoryComponent
            repository={item}
            key={`repo-${item.id}-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(SearchResultsSection);
