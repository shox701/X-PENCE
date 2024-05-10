import React from 'react';
import Header from './components/header';
import YourComponent from './components/mid';
import ProductComponent from './components/product';
import Plan from './components/plan';
import Carousels from './components/Carousel';
import Footer from './components/footer/footer';
const App = () => {
  return (
    <div>
      <Header />
      <YourComponent />
      <ProductComponent />
      <Plan />
      <Carousels />
      <Footer />
    </div>
  );
};

export default App;


