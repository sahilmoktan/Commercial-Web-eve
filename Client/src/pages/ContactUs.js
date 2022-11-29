import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function ContactUs() {
  return (
    <>
      <Navbar />
      <br />
      <section id="contact-us" className="contact-us section">
        <div className="container">
          <div className="contact-head">
            <div className="row">
              <div className="col-lg-8 col-12">
                <div className="form-main">
                  <div className="title">
                    <h4>Get in touch</h4>
                    <h3>Write us a message</h3>
                  </div>
                  <form
                    className="form"
                    method="post"
                    action="https://formspree.io/f/mnqrknky"
                  >
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label>
                            Your Name<span>*</span>
                          </label>
                          <input
                            name="name"
                            type="text"
                            placeholder="Full Name"
                            required
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label>
                            Your Subjects<span>*</span>
                          </label>
                          <input
                            name="subject"
                            type="text"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label>
                            Your Email<span>*</span>
                          </label>
                          <input
                            name="email"
                            type="email"
                            placeholder="Valid Email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group">
                          <label>
                            Your Phone<span>*</span>
                          </label>
                          <input
                            name="company_name"
                            type="text"
                            placeholder="Number"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group message">
                          <label>
                            your message<span>*</span>
                          </label>
                          <textarea
                            name="message"
                            placeholder="Your message here"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group button">
                          <button type="submit" className="btn ">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="single-head">
                  <div className="single-info">
                    <i className="fa fa-phone"></i>
                    <h4 className="title">Call us Now:</h4>
                    <ul>
                      <li>+977 9801234567</li>
                      <li>+977 9851234567</li>
                    </ul>
                  </div>
                  <div className="single-info">
                    <i className="fa fa-envelope-open"></i>
                    <h4 className="title">Email:</h4>
                    <ul>
                      <li>
                        <a href="mailto:info@yourwebsite.com">
                          info@bajesales.com.np.com
                        </a>
                      </li>
                      <li>
                        <a href="mailto:info@yourwebsite.com">
                          support@bajesales.com.np.com
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="single-info">
                    <i className="fa fa-location-arrow"></i>
                    <h4 className="title">Our Address:</h4>
                    <ul>
                      <li>Anamnagar -28, Kathmandu, Nepal</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.64769152936!2d85.32964585!3d27.697281800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a364bb5935%3A0xf40b4cf2c78cf48a!2sAnamnagar%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1669753585295!5m2!1sen!2snp"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Footer />
    </>
  );
}

export default ContactUs;
