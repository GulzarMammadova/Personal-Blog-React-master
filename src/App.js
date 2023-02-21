import './App.css';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { About } from './pages/About'
import { Journey } from './pages/Journey';
import { Blog } from './pages/blog/Blog';
import { Portfolio } from './pages/portfolio/Portfolio';
import { Contact } from "./pages/Contact"
import { Footer } from './components/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom"



function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/journey' element={<Journey />} />
          <Route path='/Blog' element={<Blog />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
