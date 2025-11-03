import React from "react";
import "./mainPage.css";

const MainPage = () => {
  return (
    <div className="main-container">
      <div className="navbar">
          <div className="logo">
            <img src="/images/mainlogo.png" alt="Maximus Trimus Logo" />
          </div>
          <ul className="nav-links">
            <li>Home</li>
            <li>Contact</li>
            <li>Gallery</li>
            <li>The Barber</li>
          </ul>
        </div>
      <section
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
        className="gallery-content"
        style={{
          backgroundColor: "rgba(20, 20, 20, 1)",
          height: "100vh",
          width: "100vw",
        }}
      >

        </section>
    </div>
  );
};

export default MainPage;
