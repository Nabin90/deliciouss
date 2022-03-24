import Pages from "./pages/Pages";
import Category from "./components/Category";
import { Link, BrowserRouter } from 'react-router-dom';
import Search from "./components/Search";
import { GiKnifeFork } from 'react-icons/gi';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>deliciousss</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`;

const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 1rem;
  }
`;

export default App;
