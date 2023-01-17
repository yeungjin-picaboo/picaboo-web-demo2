import PageLayout from 'src/components/common/PageLayout';
import { PageLayoutProps } from 'src/types/common.interface';
import styled from 'styled-components';

export default function Forum({
  title,
  children,
  ...restProps
}: PageLayoutProps) {
  return (
    <PageLayout title={title} {...restProps}>
      {children}
    </PageLayout>
  );
}

Forum.Content = function ForumContent() {
  return <Content></Content>;
};

const Content = styled.div``;
