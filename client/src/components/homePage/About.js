import React from 'react';


function About() {
    //
    // const [click, setClick] = useState(false);
    // const [dropdown, setDropdown] = useState(false);
  
    // const handleClick = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);
  
    // const onMouseEnter = () => {
    //   if (window.innerWidth < 960) {
    //     setDropdown(false);
    //   } else {
    //     setDropdown(true);
    //   }
    // };
  
    // const onMouseLeave = () => {
    //   if (window.innerWidth < 960) {
    //     setDropdown(false);
    //   } else {
    //     setDropdown(false);
    //   }
    // };
  
    return (
      <>
            <section className="page-section bg-primary" id="about">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="text-white mt-0">About Us!</h2>
                            <hr className="divider light my-4" />
                            <h3 className="text-white-50 mb-4"><p>We are five software development students.</p>
                            <p>This site is our primary product.</p> 
                            <p>We have decided to develop a website that will meet your need to receive interesting and enriching content during the Corona!</p> 
                            <p> If you are an independent lecturer who wants to deliver lectures,</p> 
                            <p>contact us!</p> 
                            <p> have a nice time!!</p></h3>
                            <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
                        </div>
                    </div>
                </div>
            </section>
       
      </>
    );
  }
  
  export default About;