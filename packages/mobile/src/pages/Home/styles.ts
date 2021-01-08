import { Grid, Row as GridRow } from 'react-native-easy-grid';

import styled from 'styled-components/native';

export const Container = styled(Grid)`
  flex-direction: column;

  padding: 20px 16px 8px;
`;

export const Row = styled(GridRow)`
  justify-content: space-between;
`;
