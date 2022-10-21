import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Categories from './components/Categories/Categories';
import NewsLetter from './components/NewsLetter/NewsLetter';
import Products from './components/Products/Products';
import Work from './components/Work/Work';
import Footer from './components/Footer/Footer';
import './App.scss';
import { Fragment } from 'react';

const App = () => (
  <Fragment>
    <Navbar />
    <Hero />
    <About />
    <Products />
    <Categories />
    <Work />
    <NewsLetter />
    <Footer />
  </Fragment>
)

export default App
