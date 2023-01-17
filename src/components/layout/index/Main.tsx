import { useMemo } from 'react';
import styled from 'styled-components';
import Paragraph from '../../common/Paragraph';
import Image from 'next/image';
import { IProps, LinkProps } from 'src/types/common.interface';
import Logo from '../../common/Logo';
import NavLink from '../../common/NavLink';

export default function Main({ children, ...restProps }: IProps) {
  return <Container {...restProps}>{children}</Container>;
}

Main.BackgroundImage = function MainBackground({
  imagePath,
}: MainBackgroundProps) {
  return <Image src={imagePath} alt='Background Image' fill />;
};

Main.Header = function MainHeader({ children, ...restProps }: IProps) {
  return <Header {...restProps}>{children}</Header>;
};

Main.Nav = function MainNav({ children, ...restProps }: IProps) {
  return <Nav {...restProps}>{children}</Nav>;
};

Main.NavItem = function MainNavItem({
  href,
  children,
  ...restProps
}: LinkProps) {
  return (
    <NavItem>
      <NavLink href={href} {...restProps}>
        {children}
      </NavLink>
    </NavItem>
  );
};

Main.Content = function MainContent({ children, ...restProps }: IProps) {
  return <Content {...restProps}>{children}</Content>;
};

Main.Logo = function MainLogo({ children, ...restProps }: IProps) {
  const style = useMemo(() => ({ fontSize: '3rem' }), []);
  return (
    <Logo style={style} {...restProps}>
      {children}
    </Logo>
  );
};

Main.Title = function MainTitle({ children, ...restProps }: IProps) {
  const style = useMemo(() => ({ fontSize: '8rem', fontWeight: 'bold' }), []);
  return (
    <Paragraph style={style} {...restProps}>
      {children}
    </Paragraph>
  );
};

Main.Text = function MainText({ children, ...restProps }: IProps) {
  const style = useMemo(
    () => ({
      fontSize: '3rem',
      margin: '2rem 0 3rem 0',
      lineHeight: '5rem',
    }),
    []
  );
  return (
    <Paragraph style={style} {...restProps}>
      {children}
    </Paragraph>
  );
};

Main.Button = function TryForFreeBtn({
  href,
  children,
  ...restProps
}: LinkProps) {
  const style = useMemo(() => ({ padding: '0.8rem 2rem' }), []);
  return (
    <TryButton>
      <NavLink href={href} style={style} {...restProps}>
        {children}
      </NavLink>
    </TryButton>
  );
};

type MainBackgroundProps = {
  imagePath: string;
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #e5d9b6;
`;

const Header = styled.div`
  height: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
`;

const Nav = styled.div`
  display: flex;
  font-size: 2rem;
`;

const NavItem = styled.div`
  margin-left: 5rem;

  a::after {
    content: '';
    display: block;
    width: 0;
    height: 5px;
    position: absolute;
    left: 0;
    bottom: 0px;
    background: #a4be7b;
  }

  &:hover a::after {
    width: 100%;
    transition: width 0.3s;
  }
`;

const Content = styled.div`
  padding: 4rem 4rem 8rem 4rem;
`;

const TryButton = styled.button`
  font-size: 2.5rem;
  border-radius: 2rem;
  padding: 0.8rem 0;
  background-color: #5f8d4e;
  border: none;

  &:hover {
    transform: scale(0.97);
  }
`;
