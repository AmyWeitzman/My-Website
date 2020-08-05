import React from 'react';
//import { Container, Row, Col } from 'react-grid-system';
//import axios from 'axios';
import '../App.css';
import './Contact.css';

const EMAIL = "amy.n.weitzman@gmail.com";

// function resetForm() {
//     var name = document.getElementById("name");
//     var email = document.getElementById("email");
//     var message = document.getElementById("message");
//     name.innerHTML = '';
//     email.innerHTML = '';
//     message.innerHTML = '';
// }

// function getData() {
//     var name = document.getElementById("sender-name").value;
//     var email = document.getElementById("email").value;
//     var message = document.getElementById("message").value;
//     return {"name": name, "email": email, "message": message};
// }

// function handleSubmit(e) {
//     e.preventDefault();
//     var sendData = getData();
//     console.log("sending...");
//     axios({
//         method: "POST",
//         url: "http://localhost:3000/send",
//         data: sendData
//     }).then((resp) => {
//         console.log(resp.data);
//         if(resp.data.status === 'success')  {
//             alert("Message Sent.");
//             resetForm();
//         } else if(resp.data.status === 'fail') {
//             alert("Message failed to send.");
//         }
//     })
//     console.log("...sent");
// }

function Contact() {
  return (
    <div className="content">
        <div id="contact-links">
            <a href="https://github.com/AmyWeitzman/resume/raw/master/Weitzman_Amy.pdf" download>
                <img src={require("../images/resume.png")} alt="Resume" className="connect-icon" />
            </a>
            <br></br>
            <a href={"mailto:"+EMAIL}>
                <img src={require("../images/email.png")} alt="Email" className="connect-icon" />
            </a>
            <br></br>
            <a href="https://www.linkedin.com/in/amy-weitzman/" target="_blank" rel="noopener noreferrer">
                <img src={require("../images/linkedin.png")} alt="LinkedIn" className="connect-icon" />
            </a>
            <br></br>
            <a href="https://github.com/AmyWeitzman" target="_blank" rel="noopener noreferrer">
                <img src={require("../images/octocat.png")} alt="GitHub" className="connect-icon" id="github-icon" />
            </a>
        </div>
        {/* <form onSubmit={handleSubmit} method="POST">
            <Container>
                <Row>
                    <Col>
                        <label htmlFor="sender-name" className="label">Name</label>
                    </Col>
                    <Col>
                        <input type="text" id="sender-name" className="text-box" />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <label htmlFor="email" className="label">Email</label>
                    </Col>
                    <Col>
                        <input type="text" id="email" className="text-box" />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <label htmlFor="message" className="label">Message</label>
                    </Col>
                    <Col>
                        <textarea type="text" id="message" spellCheck="true" className="text-box" />
                    </Col>
                </Row>
                <br></br>
            </Container>
            <button type="submit" id="submit-button">Submit</button>
        </form> */}
    </div>
  );
}

export default Contact;
