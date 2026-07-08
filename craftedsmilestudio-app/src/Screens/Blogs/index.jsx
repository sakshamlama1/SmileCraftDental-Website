import "./index.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import GetInTouch from "../../Components/GetInTouch";
import Hero from "../../Components/Hero";
import Banner from "../../Components/Banner";

function Blogs() {
    return (
        <div className="about-screen">
            <Header />
             <Hero 
                title={"BLOGS"} 
                subheading={"Subheading"}
            />
            <main className="about-container">
                <div className="about-content">

                </div>
            </main>
            <GetInTouch />
            <Banner />
            <Footer />
        </div>
    );
}

export default Blogs;
