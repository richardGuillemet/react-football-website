import Header from '../src/components/Utils/Header/Header';
import Footer from './components/Utils/Footer/Footer';
import Home from './components/Pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import Leagues from './components/Pages/Leagues/Leagues';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/leagues" element={<Leagues />} />
        </Routes>
      </main>
      <Footer />
    </div >

  )
}

export default App;