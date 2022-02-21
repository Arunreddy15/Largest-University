import { Component } from "react";
import "./index.css"
class Facilities extends Component{
    render(){
        return<>
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
        </>
    }
}
export default Facilities 