import {BrowserRouter, Route,Routes} from "react-router-dom"
import Home from "./components/Home"
import './App.css';
import Cource from "./components/Cource";
import Campus from "./components/Campus";
import Facilities from "./components/Facilities";
import Cta from "./components/Cta";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cource" element={<Cource/>}/>
        <Route path="/campus" element={<Campus/>}/>
        <Route path="/facilities" element={<Facilities/>}/>
        <Route path="/cta" element={<Cta/>}/>
        <Route path="/testimonials" element={<Testimonials/>}/>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
