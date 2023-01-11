import { StarIcon } from 'components/atoms/Icon';
import { ExternalLink } from 'components/atoms/Link';
import { FC } from 'react';
import { RepositoryItem } from 'services/interfaces';
import TagsList from 'components/molecules/TagsList';
import dayjs from 'dayjs';
import styles from './RepositoryComponent.module.scss';

interface RepositoryComponentProps {
  repository: RepositoryItem;
}

const RepositoryComponent: FC<RepositoryComponentProps> = ({ repository }) => {
  const nFormatter = (num: number, digits: number): string => {
    const lookup = [
      { value: 1, symbol: '' },
      { value: 1e3, symbol: 'K' },
      { value: 1e6, symbol: 'M' },
      { value: 1e9, symbol: 'G' },
      { value: 1e12, symbol: 'T' },
      { value: 1e15, symbol: 'P' },
      { value: 1e18, symbol: 'E' },
    ];

    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    const item = lookup
      .slice()
      .reverse()
      .find((item) => {
        return num >= item.value;
      });
    return item
      ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
      : '0';
  };
  return (
    <div className={styles.repositoryComponent}>
      <ExternalLink
        href={repository.html_url}
        text={repository.full_name}
        className={styles.repoName}
      />
      <span className={styles.repoDescription}>{repository.description}</span>
      <TagsList tags={repository.topics} className={styles.topicsList} />
      <div className={styles.updateInfo}>
        <StarIcon width={16} height={16} />
        <span className={styles.starNumber}>
          {nFormatter(repository.stargazers_count, 1)}
        </span>
        <span className={styles.language}>{repository.language}</span>
        <span className={styles.licenseName}>{repository.license?.name}</span>
        <span className={styles.updatedAt}>
          Updated on {dayjs(repository.updated_at).format('YYYY/MM/DD')}
        </span>
      </div>
    </div>
  );
};

export default RepositoryComponent;
