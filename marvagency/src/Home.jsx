import React from 'react'
import { Link, Element } from "react-scroll"
import "./Home.css"
import icon1 from "./assets/graphic.png"
import icon2 from "./assets/webdev.png"
import icon3 from "./assets/appdev.png"
import icon4 from "./assets/email.png"
import icon5 from "./assets/Ai.png"
import icon6 from "./assets/video.png"
import icon7 from "./assets/location.png"
import icon8 from "./assets/call.png"
import icon9 from "./assets/clock.png"
import icon10 from "./assets/email2.png"
import icon11 from "./assets/facebook.png"
import icon12 from "./assets/twitter.png"
import icon13 from "./assets/linkedin.png"


const Home = () => {
  return (
    <div className='main-page' >

        <header>
            <nav id='nav-id' >
                <h1>Logo</h1>
                <ul>
                    <a href='#home'> <li> Home</li></a>
                    <a href='#about'><li>About us</li></a>
                    <a href='#contact'><li>Contact Us</li></a>
                    <a href='#portfolio' ><li>Portfolio</li></a>
                </ul>
                <button id='get-started-btn' >Get Started</button>
            </nav>
        </header>

        <main>
        <section id='home' >
            <div className='home-section' >
                <div className='left-side' >
                    <h1>Infinite Possibilities, <br /> One Agency </h1>
                    <p>We turn bold ideas into powerful digital experiences. From concept to execution , our team crafts <br /> solutions that push boundaries while keeping your vision at the center.</p>
                    <button>Get Started</button>
                </div>
                <div className='right-side' >

                    <div className='image-container' >
                      { /* <img className='hero-image' loading='lazy' src="./heroman.png" alt="image of a man"  /> */ }  
                    </div>
                </div>
            </div>
        </section>
        <section id='about' >
            <div className='about-page' >
                <h1> <span id='about'>About</span>  Us</h1>
                <div className='image-and-des'>
                    <div className='left' >

                    </div>
                    <div  className='right'>
                       <h2>What We Do For You</h2>
                       <p id='stitle' >WE ARE DIGITAL CREATIVES</p> 
                        <p className='parag' >We blend creativity and technology to craft impactful digital experiences. From branding and design to web development and marketing, we help businesses stand out, connect with their audience, and grow. Our team is passionate about turning ideas into engaging visuals and strategies that drive results.</p>
                        <div className='experience' >
                             <div> <p> <span>4</span> yrs <br /> Experience   </p> </div>
                             <div> <p><span>1k</span> + <br /> products</p>   </div>
                            <div> <p><span>500</span> + <br /> clients</p>   </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='services-page' >
                <div className='s-title' >
                    <h1>Service</h1>
                    <p>Innovative design, strategy, and technology in <br /> one place.</p>
                </div>
                <div className='s-divs' >
                    <div className='block' >
                        <img className='img' width={50} src={icon1} alt="graphics icon" />
                        <h2>Graphic design</h2>
                        <p>Flyer desihn . Presentation design . Pitch deck design . Menu design. Brochure design . Poster design.</p>
                    </div>

                    <div className='block' >
                         <img width={50} src={icon3} alt="graphics icon" />
                        <h2> Mobile and web app development </h2>
                        <p>.</p>
                    </div>

                     <div  className='block' >
                        <img width={50} src={icon2} alt="website icon" />
                        <h2>Website design</h2>
                        <p>Business website design . E-commerce website design . Author website design . Shopify store setup . Shopify website design . Shopify store customization</p>
                    </div>

                    <div className='block' >
                        <img width={50} src={icon4} alt="graphics icon" />
                        <h2>Email marketing</h2>
                        <p></p>
                    </div>

                    <div className='block' >
                        <img width={50} src={icon6} alt="graphics icon" />
                        <h2>Video editing</h2>
                        <p>Presentation video . 2D video creation . Whiteboard video creation</p>
                    </div>

                    <div className='block' >
                        <img width={50} src={icon5} alt="graphics icon" />
                        <h2>AI and Automation</h2>
                        <p></p>
                    </div>

                </div>
                 <button>Contact us</button>
            </div>
        </section>
        <section id='contact' >
            <div className='contact-page' >
                <div className='hero' >
                    <h1> <span>Connect</span>  With Our Team</h1>
                </div>

                <div className='contact-main-div' >



                <div className='left' >
                    <h2>Contact Details</h2>
                    <p>Have a project in mind or a question for us? <br /> Connect with our team and we'll be happy to guild you.</p>
                    <div className='contact-div' >
                        <div className='contact-detail' >
                        <div className='icon' > <img width={60} src={icon7} alt="" /> </div>
                        <div><p><b>Address</b> </p> <p>JL, Raya Kuta No 121</p>  </div> 
                        </div>

                        <div className='contact-detail' >
                        <div className='icon' ><img width={60} src={icon8} alt="" /></div>
                        <div><p><b>Mobile</b> </p> <p> +234 7030030526 </p>  </div> 
                        </div>

                        <div className='contact-detail' >
                        <div className='icon' > <img width={60} src={icon9} alt="" /> </div>
                        <div><p><b>Availability</b> </p> <p> Daily : 9am - 9pm </p>  </div> 
                        </div>

                        <div className='contact-detail' >
                        <div className='icon' ><img width={60} src={icon10} alt="" /></div>
                        <div><p><b>Email</b></p> <p>adebowalemarvellous02@gmail.com</p>  </div> 
                        </div>
                    </div>
                    <div className='social-media'>
                        <h3>Social Media :</h3>
                        <div className='div' > 
                            <img width={30} src={icon11} alt="" /> 
                            <img width={30} src={icon12} alt="" /> 
                            <img width={30} src={icon13} alt="" />  
                         </div>
                    </div>
                </div>
                <div className='right' ></div>


                </div>
            </div>
        </section>
        <section id="portfolio" ></section>
        </main>


    </div>
  )
}

export default Home