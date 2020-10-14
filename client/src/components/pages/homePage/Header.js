import React from 'react';
import '../../css/header.css';

function Header() {
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
      <header className="masthead">
            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-10 align-self-end">
                        <h1 className="text-uppercase text-white font-weight-bold">Choose  your  next  lecture</h1>
                        <hr className="divider my-4" />
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <p className="text-white-75 font-weight-light mb-5"><p>The purpose of the site is to connect between independent lecturers and you!</p> <p>We have a large selection of content on our site divided by categories.</p> 
                        <p>feel free to visit our site!</p>
                        </p>
                        <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">About Us</a>
                    </div>
                </div>
            </div>
        </header>
       
      </>
    );
  }
  
  export default Header;