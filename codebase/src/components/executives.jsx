// ExecutivePage.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Styles/executive.css'; // Create a CSS file for styling

function ExecutivePage() {
  const executives = [
    {
      id: 1,
      name: 'Isaac Narteh',
      imageSrc: 'https://media.licdn.com/dms/image/D5603AQEFHgJw9hzA2A/profile-displayphoto-shrink_800_800/0/1682486693945?e=1709164800&v=beta&t=DMAfe4NNkAVRvmaHHjHa4ObioUBfA7Rz0Dk-B1dtK4Y',
      school: 'University 1',
      workExperience: 'Company A, Company B',
      additionalDetails: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Liliane Azabe',
      imageSrc: 'https://media.licdn.com/dms/image/D5603AQH-iTCgDUIK9Q/profile-displayphoto-shrink_800_800/0/1698969995736?e=1709164800&v=beta&t=vhldHvM5wMldGju5G0aQiIReLA8fTxZXcQApu1dw5Ao',
      school: 'University 2',
      workExperience: 'Company C, Company D',
      additionalDetails: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      name: 'Kyle Drummonds',
      imageSrc: 'https://media.licdn.com/dms/image/D4E03AQE_TXymVBnrVg/profile-displayphoto-shrink_800_800/0/1668745132971?e=1709164800&v=beta&t=TWPuZ0teVLfcQza6AoMM0YaOb8BWc3-yr0SNfw4WIo4',
      school: 'University 3',
      workExperience: 'Company E, Company F',
      additionalDetails: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
    id: 4,
      name: 'Kyle Drummonds',
      imageSrc: 'https://media.licdn.com/dms/image/D4E03AQE_TXymVBnrVg/profile-displayphoto-shrink_800_800/0/1668745132971?e=1709164800&v=beta&t=TWPuZ0teVLfcQza6AoMM0YaOb8BWc3-yr0SNfw4WIo4',
      school: 'University 3',
      workExperience: 'Company E, Company F',
      additionalDetails: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    // Add more executives as needed
    },
    {
      id: 5,
        name: 'Bright Awiakye',
        imageSrc: 'https://pbs.twimg.com/media/EaE1tqpWkAIaKPf.jpg',
        school: 'University 3',
        workExperience: 'Company E, Company F',
        additionalDetails: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      // Add more executives as needed
      }
  ];

  return (
    <div className="executive-page">
      <Container>
        <h2>Our Executives</h2>
        <Row>
          {executives.map((executive) => (
            <Col key={executive.id} md={4}>
              <div className="executive-item">
                <img src={executive.imageSrc} alt={executive.name} />
                <h3>{executive.name}</h3>
                <p>School: {executive.school}</p>
                <p>Work Experience: {executive.workExperience}</p>
                <p>{executive.additionalDetails}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ExecutivePage;
