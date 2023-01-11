import classNames from 'classnames';
import Tag from 'components/atoms/Tag';
import { FC } from 'react';
import styles from './TagsList.module.scss';

interface TagsListProps {
  tags: string[];
  className?: string;
}
const TagsList: FC<TagsListProps> = ({ tags, className }) => {
  if (tags.length === 0) return <></>;
  return (
    <div className={classNames(styles.tags, className ?? '')}>
      {tags.map((tp, index) => (
        <Tag tagName={tp} key={`tag-${tp}-${index}`} className={styles.tag} />
      ))}
    </div>
  );
};

export default TagsList;
