// Donate.js

import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Styles/donate.css';

function Donate() {
  const handleDonate = () => {
    // Replace 'YOUR_PAYPAL_EMAIL' with your actual PayPal email
    const paypalEmail = 'isaackwamenarteh21@gmail.com';

    // Fetch the donation amount from the form or set it directly
    const donationAmount = document.getElementById('formAmount').value || 10;

    // Create the PayPal donation link
    const paypalLink = `https://paypal.me/nartehi?${paypalEmail}?amount=${donationAmount}`;

    // Open the PayPal donation link in a new tab
    window.open(paypalLink, '_blank');
  };

  return (
    <div className="donate">
      <Container>
        <Row>
          {/* Text and Image Column */}
          <Col md={6}>
            <h2>Join Us in Making a Difference</h2>
            <p>
            Our story is one of resilience, determination, and the unwavering belief that 
            education has the power to transform lives. We invite you to be a part of our journey. 
            Your support will enable the <strong>TiC Foundation</strong> to expand its reach, bring computers to 
            more classrooms, and empower countless children with the tools they need to shape their futures.
            Together, let's build a world where every child has the opportunity to unlock their potential through technology. 
            Join us in making a difference, one computer at a time.
              Your generous donation helps us continue our mission and support the community. 
              Thank you for your contribution!
            </p>
            <h5>Donate today and be a catalyst for change. Together, we are #TechInspiredChange.</h5>
            {/* Add your image here */}
            <img src="https://pbs.twimg.com/media/EwwHSE9XIAAur16.jpg" alt="Our Impact" className="img-fluid" />
          </Col>
          {/* Donation Form Column */}
          <Col md={6}>
            <h2>Donate to Support Our Cause</h2>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formAmount">
                <Form.Label>Donation Amount</Form.Label>
                <Form.Control type="number" placeholder="Enter the amount" />
              </Form.Group>

              <Button variant="primary" onClick={handleDonate}>
                Make a Donate
              </Button>
            </Form>
          </Col>

          
        </Row>
      </Container>
    </div>
  );
}

export default Donate;
