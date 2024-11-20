import React from 'react';
import { Card, Col, Row } from 'antd';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import '../styles/about.scss';

const About = () => {
  // Set up the intersection observer hook
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  // Animation settings using react-spring for a smooth fade and slide
  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(30px)', // Slide up effect
    config: { tension: 200, friction: 25 }, // Smooth transition
  });

  return (
    <section ref={ref} className="about">
      <Row gutter={16} justify="center">
        <Col xs={24} sm={18} md={12}>
          <animated.div style={animationProps}>
            <Card className="about-card" bordered={false}>
              <h2>About Me</h2>
              <p>
                I'm a passionate Product Manager & Software Engineer with a focus on delivering high-quality digital solutions.
              </p>
              <p>
                Skilled in project management, product design, and full-stack development, always aiming to create impactful products.
              </p>
            </Card>
          </animated.div>
        </Col>
      </Row>
    </section>
  );
};

export default About;
