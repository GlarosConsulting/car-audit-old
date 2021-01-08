import React from 'react';
import { ViewProps } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

import { Container, Photo, TitleContainer, Title } from './styles';

interface IPhotoCardProps extends ViewProps {
  width: string | number;
  height: string | number;
}

const PhotoCard: React.FC<IPhotoCardProps> = ({ width, height, ...rest }) => (
  <Container
    width={width}
    height={height}
    {...rest}
    activeOpacity={0.7}
    onPress={() =>
      launchCamera({ mediaType: 'photo' }, ({ uri }) => {
        console.log(uri);
      })
    }
  >
    <Photo />

    <TitleContainer>
      <Title>Card</Title>
    </TitleContainer>
  </Container>
);

export default PhotoCard;
