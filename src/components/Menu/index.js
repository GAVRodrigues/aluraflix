import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import { LogoImage, MenuWrapper, ButtonLink } from './style';

function Menu() {
  return (
    <MenuWrapper className="Menu">
      <Link to="/">
        <LogoImage className="Logo" src={Logo} alt="AluraFlix Logo" />
      </Link>

      <ButtonLink as={Link} className="ButtonLink" to="/cadastro/video" />
    </MenuWrapper>
  );
}

export default Menu;
