import React from "react";

function About() {
  return (
    <>
      <section className="page-section bg-primary" id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-5">About Us!</h2>
              <hr className="divider light my-4" />
              <h3 className="text-white-50 mb-20">
                <p>We are four software development students.</p>
                <p>This site is our primary product.</p>
                <p>
                  We have decided to develop a website that will meet your need
                  to receive interesting and enriching content during the
                  Corona!
                </p>
                <p>
                  {" "}
                  If you are an independent lecturer who wants to deliver
                  lectures,
                </p>
                <p>contact us!</p>
                <p> have a nice time!!</p>
              </h3>
              <a
                className="btn btn-light btn-xl js-scroll-trigger mb-5"
                href="#services"
              >
                Get Started!
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
