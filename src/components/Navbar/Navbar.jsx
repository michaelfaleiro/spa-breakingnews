import logo from "../../images/logoBN.png";
import { Button, ImageLogo, InputSpace, Nav } from "./NavbarStyled.jsx";

export function Navbar() {
  return (
    <>
      <Nav>
        <InputSpace>
          <i class="bi bi-search"></i>
          <input type="text" placeholder="Pesquise por um título" />
        </InputSpace>
        <ImageLogo src={logo} alt="Logo do Breaking News" />
        <Button>Entrar</Button>
      </Nav>
    </>
  );
}
