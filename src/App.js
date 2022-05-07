import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddItem from './components/AddItem/AddItem';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Items from './components/Items/Items';
import Login from './components/Login/Login';
import Manage from './components/Manage/Manage';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/items' element={<Items></Items>}></Route>
        <Route path='/items/:id' element={<Items></Items>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route> 
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/manage' element={<Manage></Manage>}></Route>
        <Route path='/addItem' element={<AddItem></AddItem>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
