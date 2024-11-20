import React from 'react';
import { Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';
import '../styles/skills.scss';

// Tool logo imports
import reactLogo from '../images/react-logo.png';
import nodejsLogo from '../images/nodejs-logo.svg';
import jsLogo from '../images/javascript-logo.png';
// Add more logos as needed

const skillsData = [
  { name: 'React', logo: reactLogo, description: 'Building interactive UIs' },
  { name: 'Node.js', logo: nodejsLogo, description: 'Server-side JavaScript' },
  { name: 'JavaScript', logo: jsLogo, description: 'Web development language' },
  // Add more skills as needed
];

const Skills = () => (
  <div className="skills-section">
    <h2 className="skills-title">Skills</h2>
    <h3 className="skills-subtitle">Technologies & Tools</h3>
    <Row gutter={16} justify="center">
      {skillsData.map((skill, index) => (
        <Col xs={24} sm={12} md={8} lg={6} key={index}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card
              className="skill-card"
              hoverable
              cover={<img alt={skill.name} src={skill.logo} className="skill-logo" />}
            >
              <h4 className="skill-name">{skill.name}</h4>
            </Card>
          </motion.div>
        </Col>
      ))}
    </Row>
  </div>
);

export default Skills;
