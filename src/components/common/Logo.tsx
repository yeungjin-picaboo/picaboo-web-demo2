import { IProps } from 'src/types/common.interface';
import styled from 'styled-components';

export default function Logo({ style, children }: IProps) {
  return <Container style={style}>{children}</Container>;
}

const Container = styled.div`
  font-family: 'Loved by the King', cursive;
`;
