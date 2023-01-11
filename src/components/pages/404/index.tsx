import PageTitle from 'components/atoms/PageTitle';
import BaseTemplate from 'components/templates/BaseTemplate';
import { FC } from 'react';

const NotFoundPage: FC = () => {
  // const [name, setName] = useState('');
  return (
    <BaseTemplate>
      <PageTitle text="Opps! Page Not Found!!" />
    </BaseTemplate>
  );
};

export default NotFoundPage;
