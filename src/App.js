import React from 'react';
import Menu from "./components/Menu";
import BannerMain from "./components/BannerMain";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import dadosIniciais from "./data/dados_iniciais.json";

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />

      {dadosIniciais.categorias.map(categoria => (
        <Carousel key={categoria.cor} category={categoria} />
      ))}


      <Footer />

    </div>
  );
}

export default App;