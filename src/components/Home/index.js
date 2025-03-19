import {Component} from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { FaBars  } from "react-icons/fa";
import { BsX } from "react-icons/bs";

import './index.css'

class Home extends Component{
    state = {
        value:false
    }

    onClickIconBtn = () =>{
        this.setState(prevState =>({
            value:!prevState.value
        }))
    }

    render(){
        const {value} = this.state
        const getIcon = value ?  <BsX/> : <FaBars/> 
        const displayIcon = value ?   "display":"hide"
        return (
            <div className="portfolie-main-container">
                <nav className='nav-container'>
                    <div className="nav-top-container">
                        <div className='nav-logo'>SGR</div>
                        <div className="icon-container" onClick={this.onClickIconBtn}> 
                            {getIcon}
                        </div>
                    </div>
                    <>
                        <ul className={`${displayIcon} nav-unordered-list-container`}>
                           <a className='anchor' href="#home"><li  className='link-name'>Home</li></a>
                           <a className='anchor'  href="#about"><li  className='link-name'>About</li></a>
                           <a className='anchor'  href="#skills"><li  className='link-name'>Skills</li></a>
                           <a className='anchor'  href="#projects"><li  className='link-name'>Projects</li></a>
                           <a className='anchor'  href="#contact"><li  className='link-name'>Contacts</li></a>
                        </ul>
                    </>
                </nav>
                <div id="home" className='home-container'>
                    <div className="text-container">
                        <h1 className='main-heading'>I<span className="span">'</span>m <br/>Sagar<br/> Kamineni<span className="span">.</span></h1>
                        <p className='main-text'>I am passion about Frontend Developer</p>
                    </div>
                    <div className="text-image-container">
                        <img src="https://res.cloudinary.com/du28y3o00/image/upload/v1742035106/IMG_20240531_124751_2_1_poyckp.jpg" className='image' alt="image-logo"/>
                    </div>
                </div>
                <div id="about"  className='about-container'>
                    <h1 className='about-heading'>About</h1>
                    <p className='about-paragraph'>I'm Sagar. I am from Ponnaluru but I am living in Hyderbad. I have completed MCA at Prakasam Engineering College, kandukur.
                        
                        My Strengths are I am self Motivating Person and Head Working. 
                    </p>
                    <p className='about-paragraph'>I am a passionate Frontend Developer dedicated to building fast, responsive, and visually appealing web applications. I have hands-on experience with technologies like HTML, CSS, JavaScript, and modern frameworks like React.js and basics of Python. I have developed many Static and Dynamic websites. I am also Developed React.js Project.</p>
                </div>
                <div id="skills"  className='skills-container'>
                    <div className='skills-bottom-container'>
                        <div>
                            <h1 className='skills-heading'>Technical Skills</h1>
                            <div>
                                <p>Frontend: HTML, CSS, JavaScript</p>
                                <p>Framework: React.js</p>
                                <p>Programming Language: Python</p>
                            </div>
                        </div>
                        <div>
                            <img src="https://www.aihr.com/wp-content/uploads/skill-building-cover.png" alt="skill-image" className="skill-image"/>
                        </div>
                    </div>
                </div>
                <div id="projects"  className="projects-container">
                    <h1 className='projects-heading'>Projects</h1>
                    <div className='project-link-container'>
                        <div className="static-website">
                            <h1 className="project-heading">Static Website</h1>
                            <a href="https://kamineni.ccbp.tech/"><img className="static-image" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/ocean.jpg" alt="static-image"/></a>
                        </div>
                        <div className="static-website">
                            <h1 className="project-heading">Responsive Website</h1>
                            <a href="https://sagarkamineni.ccbp.tech/"><img className="static-image"  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/foodmunch-banner-bg.png" alt="static-image"/></a>
                        </div>
                        <div className="static-website">
                            <h1 className="project-heading">Frontend Website</h1>
                            <a href="https://ksagar.ccbp.tech/"><img className="static-image"  src="https://assets.ccbp.in/frontend/react-js/home-sm-bg.png" alt="static-image"/></a>
                        </div>
                    </div>
                </div>
                <div id="contact"  className="contact-container">
                    <h1 className="contact-heading">
                        Contacts
                    </h1>
                    <div>
                        <p className='contact'>Contact: 7993019547</p>
                        <p className='contact-mail'>Mail: kaminenisagar@gmail.com</p>
                    </div>
                    <div className='contact-logos'>
                        <p className='provided-name'>Provided By...</p>
                        <div className='anchor-container'>
                            <a className="anchor" href="https://www.linkedin.com/"><FaLinkedin/></a>
                            <a className="anchor"  href="https://www.facebook.com/"><FaFacebook/></a>
                            <a className="anchor"  href="https://www.instagram.com/"><FaSquareInstagram/></a>
                            <a className="anchor"  href="https://github.com/"><FaSquareGithub/></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home