import styled from 'styled-components';

export const LogoImage = styled.img`
  max-width: 120px;
  padding-top: 5px;

@media (max-width: 800px) {
    max-width: 90px;
  }
`;

export const MenuWrapper = styled.nav`
  width: 100%;
  height: 60px;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  top: 0;
  left: 0;
  padding-left: 5%;
  padding-right: 5%;

  background: var(--black);
  border-bottom: 2px solid var(--primary);
`;

export const ButtonLink = styled.button`
  background-color: var(--primary);
  font-size: 10px;
  height: 2.3em;
  width: 2.3em;
  border-radius: 999px;
  position: relative;
&:after,
&:before {
  content: "";
  display: block;
  background-color: var(--white);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
&:before {
  height: 1em;
  width: 0.2em;
}
&:after {
  height: 0.2em;
  width: 1em;
}
:hover{
  opacity: .8;
}
`;
