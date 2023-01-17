import Main from './Main';

export default function MainLayout() {
  return (
    <Main>
      <Main.BackgroundImage imagePath='/main.jpg' />
      <Main.Header>
        <Main.Logo>PICASSO</Main.Logo>
        <Main.Nav>
          <Main.NavItem href='/showcase'>SHOWCASE</Main.NavItem>
          <Main.NavItem href='/forum'>Forum</Main.NavItem>
          <Main.NavItem href='/qna'>QNA</Main.NavItem>
          <Main.NavItem href='/login'>LOGIN</Main.NavItem>
          <Main.NavItem href='/register'>REGISTER</Main.NavItem>
        </Main.Nav>
      </Main.Header>
      <Main.Content>
        <Main.Title>
          <p>
            <span>NFT ART</span> WITH <span>AI</span>
          </p>
        </Main.Title>
        <Main.Text>
          <p>
            It is a platform that converts text entered by users into images
            <br />
            and turns them into NFT art.
          </p>
        </Main.Text>
        <Main.Button href='/generate'>Try for free</Main.Button>
      </Main.Content>
    </Main>
  );
}
