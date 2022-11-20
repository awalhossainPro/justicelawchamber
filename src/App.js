import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Practice from './components/Pages/Practice/Practice';
import Blog from './components/Pages/Blog/Blog';
import Footer from './components/Shared/Footer/Footer';
import Pagenotfound from './components/Pages/Pagenotfound/Pagenotfound';
import ServiceDetail from './components/Pages/Home/ServiceDetail';
import Login from './components/Pages/Login/Login';
import SocialLogin from './components/Pages/Login/SocialLogin';
import Register from './components/Pages/Register/Register';
import RequireAuth from './components/Pages/Login/RequireAuth';
import ProtectedPage from './components/Pages/ProtectedPage/ProtectedPage';

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/practicearea' element={<Practice></Practice>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/service/:serviceId' element={
            <RequireAuth>
              <ServiceDetail></ServiceDetail>
            </RequireAuth>
          }></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/sociallogin' element={<SocialLogin></SocialLogin>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/protectedpage' element={
            <RequireAuth>
              <ProtectedPage></ProtectedPage>
            </RequireAuth>
          }></Route>
          <Route path='*' element={<Pagenotfound></Pagenotfound>}></Route>
        </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
