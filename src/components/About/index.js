import { Component } from "react";
import "./index.css"
import {RiCloseFill} from "react-icons/ri"
import {BiMenuAltRight} from "react-icons/bi"
import { Link } from "react-router-dom";
import Footer from "../Footer";
class About extends Component{
    state={
        menu:false
    }
    onClose=()=>this.setState({menu:false})
    onMenu=()=>this.setState({menu:true})
    render(){
        const {menu}=this.state
        return<>
            <section className="header-sub">
                <nav>
                   <img alt="logo" src="https://res.cloudinary.com/imagelinks/image/upload/v1645252188/new%20app/logo_evmovp.png"/>
                    <div className="nav-links">
                        <ul>
                            <Link className="navs" to="/"><li>Home</li></Link>
                            <Link className="navs" to="/about"><li>About</li></Link>
                            <Link className="navs" to="/cource"><li>Cource</li></Link>
                            <Link className="navs" to="/blog"><li>Blog</li></Link>
                            <Link className="navs" to="/contact"><li>Contact Us</li></Link>
                        </ul>
                        
                    </div>
                    <BiMenuAltRight className="hamburger" size={24} onClick={this.onMenu}/>
                    {menu&&<div className="mob-menu">
                    <RiCloseFill  className="close-icon" size={24} onClick={this.onClose}/>
                        <ul>
                            <Link className="navs" to="/"><li>Home</li></Link>
                            <Link className="navs" to="/about"><li>About</li></Link>
                            <Link className="navs" to="/cource"><li>Cource</li></Link>
                            <Link className="navs" to="/blog"><li>Blog</li></Link>
                            <Link className="navs" to="/contact"><li>Contact Us</li></Link>
                        </ul>
                    </div>
                        }
                </nav>
                <div className="nav-head">
                    <h1>About Us</h1>
                </div>
            </section>
            <section className="about-body">
                <div className="main-about">
                    <div className="main-about-col">
                        <h1>World's Biggest University</h1>
                        <p>Extracting text from a Web page can be done in several ways. The method you choose should depend on the purpose you have in mind for the text. If all your business. </p>
                        <a href="" className="hero-btn red-btn">EXPLORE TO KNOW MORE</a>
                    </div>
                    <div className="main-about-col">
                        <img src="https://res.cloudinary.com/imagelinks/image/upload/v1645252182/new%20app/about_xek8vn.jpg" alt="about"/>
                    </div>
                </div>
                
            </section>
            <Footer/>
        </>
    }
}
export default About