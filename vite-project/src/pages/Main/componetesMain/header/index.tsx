import logo from '../../../../../public/vite.svg';
import { Container } from './styled';
export function Header() {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <span>todo</span>
    </Container>
  );
}
