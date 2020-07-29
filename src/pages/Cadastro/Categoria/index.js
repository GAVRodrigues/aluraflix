import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor
    })
  };

  function handleChange(parms) {
    setValue(
      parms.target.getAttribute('name'),
      parms.target.value
    );
  };

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(params) {
        params.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);
        setValues(valoresIniciais)
      }}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>

        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>

      </form>
      <Link to="/">
        Ir para Home
      </Link>

    </PageDefault>
  )
}

export default CadastroCategoria;