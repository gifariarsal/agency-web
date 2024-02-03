import './App.css';
import {
  About,
  Blogs,
  Demo,
  FooterComp,
  Home,
  Navbar,
  Products,
  Services,
} from './components';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Products />
      <Testimonials />
      <Blogs />
      <Demo />
      <FooterComp />
    </>
  );
}

export default App;
