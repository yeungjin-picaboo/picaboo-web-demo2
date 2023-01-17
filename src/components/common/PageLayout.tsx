import { PageLayoutProps } from 'src/types/common.interface';
import styled from 'styled-components';
import SideNavigation from './SideNavigation';

export default function PageLayout({
  title,
  children,
  ...restProps
}: PageLayoutProps) {
  return (
    <Layout {...restProps}>
      <SideNavigation />
      <Content>
        <h1>{title}</h1>
        {children}
      </Content>
    </Layout>
  );
}

const Layout = styled.div``;

const Content = styled.div``;
