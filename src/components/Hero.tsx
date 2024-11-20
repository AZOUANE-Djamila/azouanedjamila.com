import React from 'react';
import { Row, Col, Button } from 'antd';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import '../styles/hero.scss';

const Hero = () => (
  <Row
    className="hero-section"
    justify="center"
    align="middle"
  >
    {/* Text Column */}
    <Col xs={24} sm={22} md={12} lg={10} xl={8}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Djamila</h1>
          <h2 className="hero-subtitle">Product Manager & Software Engineer</h2>
          <p className="hero-description">
            Building innovative digital solutions for web and mobile applications.
          </p>
          <div className="hero-buttons">
            <Button
              type="primary"
              icon={<GithubOutlined />}
              href="https://github.com/djamila"
              target="_blank"
              className="cta-button"
            >
              GitHub
            </Button>
            <Button
              type="primary"
              icon={<LinkedinOutlined />}
              href="https://linkedin.com/in/djamila"
              target="_blank"
              className="cta-button"
            >
              LinkedIn
            </Button>
          </div>
        </div>
      </motion.div>
    </Col>
  </Row>
);

export default Hero;
