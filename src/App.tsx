import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import Legal from './pages/Legal';
import Article from './pages/Article';




function App() {

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentions-legales" element={<Legal />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      <Footer />
    </>
  )
}



export default App;
