import PageTitle from 'components/atoms/PageTitle';
import BaseTemplate from 'components/templates/BaseTemplate';
import { FC } from 'react';

const About: FC = () => {
  // const [name, setName] = useState('');
  return (
    <BaseTemplate>
      <PageTitle text="About" />
    </BaseTemplate>
  );
};

export default About;
