import './App.css';
import { About, Blogs, Home, Navbar, Products, Services } from './components';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Products />
      <Blogs />
    </>
  );
}

export default App;
