/* eslint-disable no-unreachable */
/* eslint-disable jsx-a11y/iframe-has-title */
import { Component } from "react";
import { Link } from "react-router-dom";
import {RiCloseFill} from "react-icons/ri"
import {ImHome} from "react-icons/im"
import {BiMenuAltRight} from "react-icons/bi"
import {BsFillTelephoneFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import Footer from "../Footer";
import emailjs from 'emailjs-com';
import "./index.css"
class Contact extends Component{
    state={
        menu:false,
        // name:"",email:"",subject:"",message:""
    }
    onClose=()=>this.setState({menu:false})
    onMenu=()=>this.setState({menu:true})
    onName=(e)=>this.setState({name:e.target})
    onSubject=(e)=>this.setState({subject:e.target})
    onEmail=(e)=>this.setState({email:e.target})
    onMessage=(e)=>this.setState({message:e.target})
    onSubmit=async(e)=>{ 
        // const{name,email,subject,message}=this.state
        e.preventDefault()
        console.log("clicked submit")
       await emailjs.sendForm("service_s2rbjf6", 'template_88gsu5j', e.target, "user_RsIf543oIUNSs6GmVVag5")
        
        .then((result) => {
            window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        }, (error) => {
            console.log(error.text);
        });
    }
    render(){
        const {menu,name,email,subject,message}=this.state
        return<>
        <section className="header-sub">
                <nav>
                    <a><img alt="logo" src="https://res.cloudinary.com/imagelinks/image/upload/v1645252188/new%20app/logo_evmovp.png"/></a>
                    <div className="nav-links">
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
                    <h1>Contact Us</h1>
                </div>
        </section>
        <section className="location">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786.9261452492583!2d79.16071061481065!3d18.350653487508126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccdaf9f56aaf43%3A0xff9136139341d5dd!2sVaageswari%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1645351027415!5m2!1sen!2sin" width="600" height="450" loading="lazy"></iframe>
        </section>
        <section className="contact-us">
            <div>
                <div className="contact-us-col">
                    <div>
                        <ImHome className="link edges" size={24}/>
                        <span>
                            <h5>Hyderabad Road, VGCE</h5>
                            <p className="spansp">Karimnagar, Telanga IN</p>
                        </span>
                    </div>
                    <div>
                        <BsFillTelephoneFill className="link edges" size={24}/>
                        <span>
                            <h5>Hyderabad Road, VGCE</h5>
                            <p className="spansp">Karimnagar, Telangana IN</p>
                        </span>
                    </div>
                    <div>
                        <MdEmail className="link edges" size={24}/>
                        <span>
                            <h5>+91 9302903200</h5>
                            <p className="spansp">Monday - Saturday, 10 AM - 6 PM</p>
                        </span>
                    </div>
                </div>
                <div className="contact-us-col">
                    <form onSubmit={this.onSubmit}>
                        <input type="text" onChange={this.onName}  name="name" placeholder="Enter Your Name" required/>
                        <input type="email" onChange={this.onEmail}  name="email" placeholder="Enter Email Address" required/>
                        <input type="text" onChange={this.onSubject}  name="subject" placeholder="Enter Your Subject" required/>
                        <textarea rows="5" onChange={this.onMessage}  name="message" placeholder="Enter Your Message" required/>
                        <button type="submit" className="hero-btn red-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    }
}
export default Contact