import React, { useState, useEffect } from "react";
import "./mainPage.css";
import { BsStars } from 'react-icons/bs';
import { PiScissorsThin } from 'react-icons/pi';
const MainPage = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > 100) { 
                if (window.scrollY < lastScrollY) {
                    setIsVisible(true);
                } 
                else if (window.scrollY > lastScrollY) {
                    setIsVisible(false);
                }
            } else {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        }
    };
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]); 
  return (
      <div className="main-container">
        <div className="opaque-content-wrapper">
          <div className={`navbar ${isVisible ? 'navbar--visible' : 'navbar--hidden'}`}>
            <div className="logo">
              <img src="/images/mainlogo.png" alt="Maximus Trimus Logo" />
            </div>
              <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#the-barber">The Barber</a></li>
              </ul>
          </div>
          <section
            id="home"
            className="home-section"
            style={{
              backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/mainBackground.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "100vh",
              width: "100%",
            }}
          >

            <div className="home-content">
              <h1>
                Maximus <br /> Trimus
              </h1>
              <p>Veni, Vedi, Praecidi.</p>
              <p><strong>Est. 2021</strong></p>
              <button className="book-now-btn">BOOK NOW</button>
            </div>
          </section>

          <section
            id="contact"
            className="contact-section"
            style={{
              backgroundImage: "url('/images/contactbg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "100vh",
              width: "100%",
            }}
          >
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="contact-content">
                <div className="contact-content-text">
                  <h2>Welcome to MAXIMUS TRIMUS</h2>
                  <h3>
                  Established in 2021, Maximus Trimus is a thriving local shop that
                  started in a garage to fulfill a passion for the craftsmanship of
                  haircutting.
                  </h3>
                  <div className="contact-details-grid">
                <div className="location-info">
                  <h3>Location:</h3>
                  <div className="map">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.390138742389!2d120.59134717596842!3d15.136904063719903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f2464b079d17%3A0xe6a79e3010af94a4!2sPacimar%20Estate%2C%20Kenneth%20St%2C%20Angeles%2C%20Pampanga!5e0!3m2!1sen!2sph!4v1762132780562!5m2!1sen!2sph"  
                      style={{ border: 0 }} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                  </div>
                </div>
                
                <div className="business-details">
                  <p className="status">🟢 THE BARBER IS IN!</p>
                  <p><strong>Hours of Operation:</strong> Sunday to Saturday</p>
                  <p>7:00 am to 10:00 pm</p>
                  <p><strong>Phone:</strong> 09916461936</p>
                  <p><strong>Email:</strong> maximustrimus@gmail.com</p>
                </div>
                </div>
                </div>
            </div>

            
          </section>
          <section 
            id="gallery"
            className="gallery-section"
            style={{
              backgroundColor: "rgba(20, 20, 20, 1)",
              height: "100vh",
              width: "100%",
            }}
          >
            <div className="gallery-content">
              <h1>The Cuts</h1>
          </div>

          </section>
        </div>
        <section
          id="the-barber"
          className="barber-section1"
          style={{
            backgroundColor: "rgba(20, 20, 20, 1)",
            height: "100vh",
            width: "100%",
          }}
        >
          <div className="barber-fixed-image-wrapper">
              <img 
              src="/images/ako.png" 
              alt="Man Behind the Cuts" 
              className="barber-image"
              />
          </div>
          <div className="barber-scroll-content">
            <div className="barber-content-slide slide-1">
              <div className="barber-text-overlay">
                <span className="man-text">MAN</span>
                <span className="behind-text">BEHIND</span>
                <span className="the-text">THE</span>
                <span className="cuts-text">CUTS</span>
              </div>
            </div>
            <div className="barber-content-slide slide-2">
              <div className="bio-text-grid">
              <p className="bio-left-col">
                  A solo barber with 5 years of experience, trained under a local legend whose roots trace back to the iconic Oxford Barbers. Now, he brings that legacy into his own space a humble garage transformed into Maximus Trimus, where homey comfort meets Roman grit.
              </p>
              <p className="bio-left-col">
                  Barbering isn’t just about scissors and clippers it’s a privilege and a responsibility. He believes that when you trust me with your hair, you’re trusting me with your confidence. I don’t take that lightly.
              </p>

              <div className="bio-center-col"></div>
              
              <p className="bio-right-col">
                  Every client who sits in his chair gets more than just a trim he customizes your cut to highlight the best version of you. Whether it’s a clean fade, a sharp style, or just something fresh, He’ll make sure you walk out with a look that exceeds your expectations.
              </p>
              <p className="bio-right-col">
                  Funny thing is, he only picked up the clippers to shave my own goatee. But when his dad asked for a buzzcut, something clicked and the rest is history.
              </p>
              <p className="bio-right-col">
                  Whether you speak English, Filipino, Kapampangan, or even a bit of Japanese you're always welcome here. So sit back, relax, and let Maximus Trimus give you the cut you deserve.
              </p>
              </div>

            </div>
            <div className="barber-content-slide slide-3">
                <div className="stats-grid">
                    
                    {/* Left Column 1: Years of Experience */}
                    <div className="stat-item left-stat">
                        <BsStars className="stat-icon" />
                        <p className="stat-label">Years of Experience:</p>
                        <p className="stat-value">5 years and counting</p>
                    </div>

                    {/* Left Column 2: Specialty */}
                    <div className="stat-item left-stat">
                        <PiScissorsThin alt="Specialty Icon" className="stat-icon" />
                        <p className="stat-label">Specialty:</p>
                        <p className="stat-value">Modern cuts/Scissor cuts</p>
                    </div>
                    
                    {/* Center Column: Image Spacer (Must be empty!) */}
                    <div className="stat-center-spacer"></div>

                    {/* Right Column 1: Hair Type */}
                    <div className="stat-item right-stat">
                        <div className="hair-type-icons">
                          <img src="/images/line.png" alt="Straight Hair Icon" className="stat-icon straight-icon" />
                          <img src="/images/wavy.png" alt="Wavy Hair Icon" className="stat-icon wavy-icon" />
                          <img src="/images/curly.png" alt="Curly Hair Icon" className="stat-icon curly-icon" />
                        </div>
                        <p className="stat-label">Hair Type Accommodatable:</p>
                        <p className="stat-value">Any</p>
                    </div>

                    {/* Right Column 2: Hairstyles Experienced In */}
                    <div className="stat-item right-stat">
                      <div className="hair-style-icons">
                        <img src="/images/hairstyle1.png" alt="Styles Icon" className="stat-icon" />
                        <img src="/images/hairstyle2.png" alt="Styles Icon" className="stat-icon" />
                      </div>
                        <p className="stat-label">Hairstyles / Cuts Experienced In:</p>
                        <p className="stat-value">Any</p>
                    </div>
                    
                    {/* Add two more empty divs to complete the 3x3 grid shape for spacing */}
                    <div className="stat-empty"></div>
                    <div className="stat-empty"></div>
                    
                </div>
            </div>
          </div>
            
          
        </section>
      </div>
  );
};

export default MainPage;
