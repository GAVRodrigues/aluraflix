import React from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <PageDefault>
      <h1>Página não encontrada!</h1>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
};

export default Error