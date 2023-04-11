/* eslint-disable jsx-a11y/iframe-has-title */
import axios from "axios";
import React from "react";
import "./Style.css";
const Index = () => {
  const [name, setName] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const subjectHandler = (e) => {
    setSubject(e.target.value);
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const messageHandler = (e) => {
    setMessage(e.target.value);
  };
  const data = {
    name,
    subject,
    phone,
    email,
    message,
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "https://long-ruby-bunny-yoke.cyclic.app/api/magquerry/create",
        data
      );
      console.log(res);
      setLoading(false);
      setName("");
      setSubject("");
      setPhone("");
      setEmail("");
      setMessage("");
      if (res.status === 200) {
        alert("Your email has been sent thank you");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="contact-page-sec mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fa fa-map" />
                </div>
                <div className="contact-info-text">
                  <h2>address</h2>
                  <span>Remera Nobiscum house </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fa fa-envelope" />
                </div>
                <div className="contact-info-text">
                  <h2>E-mail</h2>
                  <span>visibilitymag@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="fa fa-table" />
                </div>
                <div className="contact-info-text">
                  <h2>working time</h2>
                  <span>From 7:00AM up to 9:00PM </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="contact-page-form" method="post">
              <h2>Get in Touch</h2>
              <form action="contact-mail.php" method="post">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        onChange={nameHandler}
                        value={name}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        required
                        onChange={emailHandler}
                        value={email}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        name="phone"
                        onChange={phoneHandler}
                        value={phone}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        onChange={subjectHandler}
                        value={subject}
                      />
                    </div>
                  </div>
                  <div className="col-md-12 message-input">
                    <div className="single-input-field">
                      <textarea
                        placeholder="Write Your Message"
                        name="message"
                        defaultValue={""}
                        onChange={messageHandler}
                        value={message}
                      />
                    </div>
                  </div>
                  <div className="single-input-fieldsbtn">
                    <button
                      className="btn btn-primary"
                      style={{
                        backgroundColor: "#10CDD3",
                        color: "black",
                        border: "none",
                      }}
                      onClick={submitHandler}
                    >
                      {" "}
                      {loading ? "loading.." : "Send now"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-page-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63800.11052167663!2d30.02870274642468!3d-1.9503869846258697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRemera%20Nobiscum%20house%20!5e0!3m2!1sen!2srw!4v1675271320572!5m2!1sen!2srw"
                width="400"
                height="300"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
