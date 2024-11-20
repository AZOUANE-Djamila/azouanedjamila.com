import React from 'react';
import { Card, Col, Row } from 'antd';

const projects = [
  { title: 'Project 1', description: 'A cool project', link: '/project-1' },
  { title: 'Project 2', description: 'Another amazing project', link: '/project-2' },
];

const ProjectsCarousel = () => (
  <section style={{ padding: '50px 0' }}>
    <h2 style={{ textAlign: 'center' }}>My Projects</h2>
    <Row gutter={16} justify="center">
      {projects.map((project, index) => (
        <Col xs={24} sm={12} md={8} key={index}>
          <Card
            title={project.title}
            bordered={false}
            hoverable
            onClick={() => window.location.href = project.link}
          >
            <p>{project.description}</p>
          </Card>
        </Col>
      ))}
    </Row>
  </section>
);

export default ProjectsCarousel;
