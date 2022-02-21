/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unreachable */
import { Component } from "react";
import "./index.css"
import {RiCloseFill} from "react-icons/ri"
import {BiMenuAltRight} from "react-icons/bi"
import { Link } from "react-router-dom";
import Footer from "../Footer";
class Cource extends Component{
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
                <div className="nav-head">
                    <h1>Our Cources</h1>
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
            <section className="facilities">
            <h1>Our Facilities</h1>
            <p>There are movements for education reforms, such as for improving quality and efficiency.</p>
            <div className="facilities-container">
                <div className="facilities-col">
                    <img src="https://res.cloudinary.com/imagelinks/image/upload/v1645252195/new%20app/library_mt0p6r.png" alt="pics"/>
                    <h3>World Class Library</h3>
                    <p>There are movements for education reforms, such as for improving quality and efficiency.</p>
                </div>
                <div className="facilities-col">
                    <img src="https://res.cloudinary.com/imagelinks/image/upload/v1645252202/new%20app/cafeteria_mgprcj.png" alt="pics"/>
                    <h3>Cafeteria</h3>
                    <p>There are movements for education reforms, such as for improving quality and efficiency.</p>
                </div>
                <div className="facilities-col">
                    <img src="https://res.cloudinary.com/imagelinks/image/upload/v1645252192/new%20app/basketball_vlfrbw.png" alt="pics"/>
                    <h3>Basketball Ground</h3>
                    <p>There are movements for education reforms, such as for improving quality and efficiency.</p>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    }
}
export default Cource