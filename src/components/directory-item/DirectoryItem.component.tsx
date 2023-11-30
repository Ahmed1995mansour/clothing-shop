import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { DirectoryObject } from '../directory/Directory.component';
import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles';

type DirectoryItemProps = {
  directory: DirectoryObject;
};
const DirectoryItem: FC<DirectoryItemProps> = ({ directory }) => {
  const { title, imageUrl, route } = directory;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage $image={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
