import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import ContactCotent from "../components/ContactContent";

const Contact = () =>{
    return <div>
        <Navbar/>
        <Heroimg2 heading="Contact" text="Let's connect with me to make amazing & responsive projects!! Open to collaboration, opportunities, and discussions."/>
        <ContactCotent/>
        <Footer/>
    </div>
    
}
export default Contact;