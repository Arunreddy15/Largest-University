import { Component } from "react";
import {GrLinkedinOption,GrTwitter,GrFacebookOption,GrInstagram} from "react-icons/gr"
import "./index.css"
class Footer extends Component{
    render(){
        return<>
        <section className="footer">
            <h4>About Us</h4>
            <p>There are movements for education reforms, such as for improving quality and efficiency.<br/> whether or not the user is logged in, what color to display for a button, etc.</p>
            <div className="social-icons">
                <GrLinkedinOption size={24} className="link"/>
                <GrTwitter size={24} className="twi"/>
                <GrFacebookOption size={24} className="fb"/>
                <GrInstagram size={24} className="gr"/>
            </div>
            <p>by @runreddy</p>
        </section>
        </>
    }
}
export default Footer        