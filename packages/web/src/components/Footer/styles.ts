import { Flex, DefaultTheme } from '@chakra-ui/core';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { transparentize } from 'polished';

interface IContainerProps {
  theme: DefaultTheme;
}

export const Container = styled(Flex)<IContainerProps>`
--base-color: ${props => props.theme.colors.gray[500]};

  height: 130px;
  background: linear-gradient(45deg, #2A4365, #fff);


`;
