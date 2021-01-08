import React, { useMemo } from 'react';
import { Dimensions } from 'react-native';

import Header from '../../components/Header';
import PhotoCard from '../../components/PhotoCard';
import { Container, Row } from './styles';

const Home: React.FC = () => {
  const photoCardProps = useMemo(() => {
    const screenWidth = Dimensions.get('screen').width;

    const width = `${screenWidth * 0.44}px`;
    const height = `${screenWidth * 0.5}px`;

    return {
      width,
      height,
    };
  }, []);

  return (
    <>
      <Header />

      <Container>
        <Row>
          <PhotoCard {...photoCardProps} />
          <PhotoCard {...photoCardProps} />
        </Row>

        <Row>
          <PhotoCard {...photoCardProps} />
          <PhotoCard {...photoCardProps} />
        </Row>

        <Row>
          <PhotoCard {...photoCardProps} />
          <PhotoCard {...photoCardProps} />
        </Row>
      </Container>
    </>
  );
};

export default Home;
