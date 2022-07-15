import {Routes, BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Home from "./pages/Home";
import NotFound from './pages/NotFound';
import About from './pages/About'
import Blog from './pages/Blog'
import AddEditBlog from './pages/AddEditBlog'
import Header from './components/Header';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/addBlog" element={<AddEditBlog/>} />
        <Route path="/editBlog/:id" element={<AddEditBlog/>} />
        <Route path="/blog/:id" element={<Blog/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
    </BrowserRouter> 
    
    );
}

export default App;
