import './style.css';

function Header(){
  return(
    <header>
    <div class="header">
    <a href="./imgs/note.png" class="logo">ACME - Tecnologia</a>
    <div class="header-right">
    <a class="active" href="#Home">Página principal</a>
    <a href="#contact">Favoritos</a>
    <a href="#about">Sobre nós</a>
    </div>
    </div>
  </header>
  )
}

export default Header;