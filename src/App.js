import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import MinimalLayout from './pages/MinimalLayout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Routers from './router';

function App() {
  return (
    <div className="App">
    {/* App */}

     <Routers />
   </div>
  );
}

export default App;