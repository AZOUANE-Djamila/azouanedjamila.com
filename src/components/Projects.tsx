import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import Layout from '../components/Layout'
const portfolioImage = require('../images/portfolio.png');

const magpharmImage = require('../images/WebsiteMagpharmLaboratoires.jpg');
const cmconsultingImage = require('../images/WebsiteCmConsulting.png');

import '../styles/projects.scss';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern and responsive portfolio website showcasing my projects and experiences.',
    image: portfolioImage,
    link: 'https://azouanedjamila.com',
  },
  {
    title: 'Corporate Website',
    description: 'A corporate website.',
    image: magpharmImage,
    link: 'https://www.magpharm.com/',
  },
  {
    title: 'Corporate Website',
    description: 'A corporate website',
    image: cmconsultingImage,
    link: 'https://cmconsulting-dz.com/',
  },
];

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    config: { tension: 200, friction: 20 },
  });

  return (
    <Layout>
    <section className="projects-section" ref={ref}>
      <h2 className="section-title">Projects</h2>
      <Row gutter={[16, 16]} justify="center">
        {projects.map((project, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <animated.div style={animationProps}>
              <Card
                hoverable
                cover={
                  <div className="project-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="overlay-text">
                      {project.title}
                    </div>
                  </div>
                }
                className="project-card"
              >
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <Button
                  type="primary"
                  href={project.link}
                  target="_blank"
                  className="view-project-button"
                >
                  View Project
                </Button>
              </Card>
            </animated.div>
          </Col>
        ))}
      </Row>
    </section>
    </Layout>

  );
};

export default Projects;
