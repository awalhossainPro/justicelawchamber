import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Practice from './components/Pages/Practice/Practice';
import Blog from './components/Pages/Blog/Blog';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/practicearea' element={<Practice></Practice>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
        </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
