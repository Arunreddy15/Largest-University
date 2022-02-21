import { Component } from "react";
import "./index.css"
class Campus extends Component{
    render(){
        return<>
        <section className="campus">
        <h1>Our Global Campus</h1>
        <p>There are movements for education reforms, such as for improving quality and efficiency.</p>
        <div className="campus-container">
            <div className="campus-col">
                <img alt="pic" src="https://res.cloudinary.com/imagelinks/image/upload/v1645252195/new%20app/london_wsch0c.png"/>
                <div className="layer">
                    <h3>LONDON</h3>
                </div>
            </div>
            <div className="campus-col">
                <img alt="pic" src="https://res.cloudinary.com/imagelinks/image/upload/v1645252206/new%20app/newyork_m5qvhm.png"/>
                <div className="layer">
                    <h3>NEW YORK</h3>
                </div>
            </div>
            <div className="campus-col">
                <img alt="pic" src="https://res.cloudinary.com/imagelinks/image/upload/v1645252201/new%20app/washington_vdei1j.png"/>
                <div className="layer">
                    <h3>WASHINGTON</h3>
                </div>
            </div>
        </div>
        </section>
        </>
    }
}
export default Campus