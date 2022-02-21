/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react"
import Facilities from "../Facilities"
import Testimonials from "../Testimonials"
import {RiCloseFill} from "react-icons/ri"
import {BiMenuAltRight} from "react-icons/bi"
import "./index.css"
import Campus from "../Campus"
import Cta from "../Cta"
import Footer from "../Footer"
import { Link } from "react-router-dom"
class Home extends Component{
    state={
        menu:false
    }
    onClose=()=>this.setState({menu:false})
    onMenu=()=>this.setState({menu:true})
render(){
    const {menu}=this.state
    return <>
    <section className="header">
        <nav>
            <a><img alt="logo" src="https://res.cloudinary.com/imagelinks/image/upload/v1645252188/new%20app/logo_evmovp.png"/></a>
            <div className="nav-links">
            {/* <RiCloseFill  className="close-icon" onClick={this.onClose}/> */}
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/cource"><li>Cource</li></Link>
                    <Link to="/blog"><li>Blog</li></Link>
                    <Link to="/contact"><li>Contact Us</li></Link>
                </ul>
                
            </div>
            <BiMenuAltRight className="hamburger" size={24} onClick={this.onMenu}/>
            {menu&&<div className="mob-menu">
            <RiCloseFill  className="close-icon" size={24} onClick={this.onClose}/>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/cource"><li>Cource</li></Link>
                    <Link to="/blog"><li>Blog</li></Link>
                    <Link to="/contact"><li>Contact Us</li></Link>
                </ul>
            </div>
                }
        </nav>
        <div className="text-box">
            <h1>World's Biggest University</h1>
            <p>Extracting text from a Web page can be done in several ways. The method you choose <br/>should depend on the purpose you have in mind for the text. If all your business. </p>
            <a href="" className="hero-btn">Visit Us To Know More</a>
        </div>
    </section>
    <section className="cource">
        <h1>Cources We Offer</h1>
        <p>There are movements for education reforms, such as for improving quality and efficiency of education towards relevance in students' lives</p>
        <div className="cources-container">
            <div className="cources">
                <h3>Intermediate</h3>
                <p>Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, habits, and personal development.</p>
            </div>
            <div className="cources">
                <h3>Degree</h3>
                <p>Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, habits, and personal development.</p>
            </div>
            <div className="cources">
                <h3>Post Graduation</h3>
                <p>Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, habits, and personal development.</p>
            </div>
        </div>
    </section>
<Campus/>
<Facilities/>
<Testimonials/>
<Cta/>
<Footer/>
</>
}
}
export default Home