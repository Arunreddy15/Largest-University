import { Component } from "react";
import {BsStarFill} from "react-icons/bs"
import {BsStarHalf} from "react-icons/bs"
import "./index.css"
class Testimonials extends Component{
    render(){
        return<>
        <section className="testimonials">
            <h1>What Our Students Say</h1>
            <p>There are movements for education reforms, such as for improving quality and efficiency.</p>
            <div className="testimonial-container">
                <div className="testimonial-col">
                    <img src="https://res.cloudinary.com/imagelinks/image/upload/v1645252194/new%20app/user1_xwvhje.jpg" alt="test"/>
                    <div className="talks">
                        <p>There are movements for education reforms, such as for improving quality and efficiency. whether or not the user is logged in, what color to display for a button, etc.</p>
                        <h3>Christine</h3>
                        <ul>
                            <li><BsStarFill  size={15}/></li>
                            <li><BsStarFill  size={15}/></li>
                            <li><BsStarFill  size={15}/></li>
                            <li><BsStarFill  size={15}/></li>
                            <li><BsStarFill  size={15}/></li>
                        </ul>
                    </div>
                </div>
                <div className="testimonial-col">
                    <img src="https://res.cloudinary.com/imagelinks/image/upload/v1645252200/new%20app/user2_c0fkml.jpg" alt="test"/>
                    <div className="talks">
                        <p>There are movements for education reforms, such as for improving quality and efficiency. whether or not the user is logged in, what color to display for a button, etc.</p>
                        <h3>Albert</h3>
                        <ul>
                            <li><BsStarFill  size={15}/></li>
                            <li><BsStarFill  size={15}/></li>
                            <li><BsStarFill  size={15}/></li>
                            <li><BsStarFill  size={15}/></li>
                            <li><BsStarHalf  size={15}/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
    }
}
export default Testimonials   