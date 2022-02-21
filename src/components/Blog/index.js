import { Component } from "react";
import { Link } from "react-router-dom";
import {RiCloseFill} from "react-icons/ri"
import {BiMenuAltRight} from "react-icons/bi"
import Footer from "../Footer";
import "./index.css"
class Blog extends Component{
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
                    <h1>Our Certifications & Online Programs For 2021</h1>
                </div>
            </section>
            <div className="blog-content">
                <div className="blog-content-left">
                    <img src="https://res.cloudinary.com/imagelinks/image/upload/v1645252188/new%20app/certificate_kkaktw.jpg" alt="certificates"/>
                    <h2>Our Certifications & Online Programs For 2021</h2>
                    <p>One of the most common types of certification in modern society is professional certification, where a person is certified as being able to competently complete a job or task, usually by the passing of an examination and/or the completion of a program of study. Some professional certifications also require that one obtain work experience in a related field before the certification can be awarded. Some professional certifications are valid for a lifetime upon completing all certification requirements. Others expire after a certain period of time and have to be maintained with further education and/or testing.
                    Certifications can differ within a profession by the level or<br/><br/> specific area of expertise to which they refer. For example, in the IT Industry there are different certifications available for software tester, project manager, and developer. Also, the Joint Commission on Allied Health Personnel in Ophthalmology offers three certifications in the same profession, but with increasing complexity.
                    Certification does not designate that a person has sufficient knowledge in a subject area,<br/> only that they passed the test.</p>
                    <br/>
                    <p>One of the most common types of certification in modern society is professional certification, where a person is certified as being able to competently complete a job or task, usually by the passing of an examination and/or the completion of a program of study. Some professional certifications also require that one obtain work experience in a related field before the certification can be awarded. Some professional certifications are valid for a lifetime upon completing all certification requirements. Others expire after a certain period of time and have to be maintained with further education and/or testing.
                    Certifications can differ within a <br/><br/>profession by the level or specific area of expertise to which they refer. For example, in the IT Industry there are different certifications available for software tester, project manager, and developer. Also, the Joint Commission on Allied Health Personnel in Ophthalmology offers three certifications in the same profession, but with increasing complexity.
                    Certification does not designate that a person has sufficient. knowledge in a subject area,only that they passed the test.</p>
                    <br/>
                    <p>One of the most common types of certification in modern society is professional certification, where a person is certified as being able to competently complete a job or task, usually by the passing of an examination and/or the completion of a program of study. Some professional certifications also require that one obtain work experience in a related field before the certification can be awarded. Some professional certifications are valid for a lifetime upon completing all certification requirements. Others expire after a certain period of time and have to be maintained with further education and/or testing.
                    Certifications can differ within a profession by the level or specific area of expertise to which they refer. For example, in the IT Industry there are different certifications available for software tester, project manager, and developer. Also, the Joint Commission on Allied Health Personnel in Ophthalmology offers three certifications in the same profession, but with increasing complexity.
                    Certification does not designate that a person has sufficient knowledge in a subject area, only that they passed the test.</p>
                    
                    <div className="comment-box">
                        <h3>Leave Comment Here</h3>
                        <form className="comment-form">
                            <input type="text" placeholder="Enter name"/>
                            <input type="email" placeholder="Enter email"/>
                            <textarea rows="5" placeholder="Enter Comment"/>
                            <button type="submit" className="hero-btn red-btn">POST COMMENT</button>
                        </form>
                    </div>
                </div>
                <div className="blog-content-right">
                    
                    <h3>Post Categories</h3>
                    <div>
                        <span>Bussiness Analytics</span>
                        <span>21</span>
                    </div>
                    <div>
                        <span>Artificial Intelligence</span>
                        <span>19</span>
                    </div>
                    <div>
                        <span>Data Science</span>
                        <span>15</span>
                    </div>
                    <div>
                        <span>Machine Learning</span>
                        <span>28</span>
                    </div>
                    <div>
                        <span>Computer Science</span>
                        <span>10</span>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    }
}
export default Blog