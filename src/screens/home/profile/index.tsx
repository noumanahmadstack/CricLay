import {FC, memo} from 'react';
import Content from './components/content';
import SlidersScreenContainer from '../components/slidersContainer';
const ProfileHome: FC = () => {
  return (
    <SlidersScreenContainer headerTitle="Profile" disableViewAll={true}>
      <Content />
    </SlidersScreenContainer>
  );
};
export default memo(ProfileHome);
