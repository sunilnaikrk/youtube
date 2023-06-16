
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import AddVideo from './components/addVideo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pagenotfound from './components/pagenotfount';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={ <AddVideo />} path="/add-video"/>
          <Route element={<Pagenotfound/>} path='*'/>
        </Routes>

      </BrowserRouter>

    </div>
  )

}

export default App;
