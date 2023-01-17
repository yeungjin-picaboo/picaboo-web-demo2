import { StyledComponent } from 'styled-components';

export interface CompoundSig {
  [key: string]: StyledComponent<any, any, {}, never>;
}

export interface IProps {
  children: JSX.Element[] | JSX.Element | undefined | string;
  style?: React.CSSProperties;
}

export interface LinkProps extends IProps {
  href: string;
}

export interface PageLayoutProps extends IProps {
  title: string;
}
