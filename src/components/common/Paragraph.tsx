import { IProps } from 'src/types/common.interface';
import styled from 'styled-components';

export default function Paragraph({ style, children }: IProps) {
  return <Container style={style}>{children}</Container>;
}

const Container = styled.div`
  span {
    color: #a4be7b;
  }
`;
