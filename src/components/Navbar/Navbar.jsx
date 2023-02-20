import "./Navbar.css";
import logo from "../../images/logoBN.png";

export function Navbar() {
  return (
    <>
      <nav>
        <div className="input-search-space">
          <i class="bi bi-search"></i>
          <input type="text" placeholder="Pesquise por um título" />
        </div>
        <img src={logo} alt="Logo do Breaking News" />
        <button>Entrar</button>
      </nav>
    </>
  );
}
