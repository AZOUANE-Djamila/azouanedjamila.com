import React from 'react';
import { Card, Button, Tabs, Tag } from 'antd';
import Layout from '../components/Layout'
import '../styles/experience.scss';

const { TabPane } = Tabs;

// Experience card component
const ExperienceCard = ({ title, company, duration, description, skills }) => {
  return (
    <Layout>
    <Card
      className="experience-card"
      title={<span className="experience-card__title">{title}</span>}
      extra={<span className="experience-card__duration">{duration}</span>}
      hoverable
    >
      <div className="experience-card__company">{company}</div>
      <div className="experience-card__description">{description}</div>
      <div className="experience-card__skills">
        {skills.map((skill, index) => (
          <Tag key={index} className="experience-card__skill-tag">
            {skill}
          </Tag>
        ))}
      </div>
    </Card>
    </Layout>
  );
};

const experiences = [
  {
    category: 'Development Experience',
    experiences: [
      {
        title: 'Web Developer',
        company: 'Web Innovations',
        duration: 'Jun 2018 - Dec 2020',
        description: 'Developed responsive websites and web applications, enhancing user experience and ensuring cross-platform compatibility.',
        skills: ['HTML/CSS', 'JavaScript', 'React', 'PHP'],
      },
    ],
  },
  {
    category: 'Product/Project Management Experience',
    experiences: [
      {
        title: 'Product Manager',
        company: 'Tech Solutions Ltd.',
        duration: 'Jan 2021 - Present',
        description: 'Managed the product lifecycle for various web applications, overseeing development, deployment, and feature optimization.',
        skills: ['Agile', 'JIRA', 'UX/UI', 'Leadership'],
      },
      {
        title: 'Freelance Web & Product Manager',
        company: 'Smartinia',
        duration: 'Jan 2022 - Present',
        description: 'Provided end-to-end management for web projects, collaborating with clients to bring their digital products to life.',
        skills: ['Project Management', 'Client Relations', 'Team Collaboration', 'Strategy'],
      },
    ],
  },
  {
    category: 'SAP Consulting Experience',
    experiences: [
      {
        title: 'SAP Consultant',
        company: 'Best IS Solutions',
        duration: 'Feb 2020 - Present',
        description: 'Provided SAP consulting services to streamline business processes, enhance data management, and optimize workflows within organizations.',
        skills: ['SAP FICO', 'SAP MM', 'Business Process Optimization', 'Client Interaction'],
      },
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="experience-section">
      <h2 className="experience-section__header">Professional Experience</h2>
      <p className="experience-section__description">
        A brief overview of my professional journey and roles I’ve undertaken.
      </p>

      <Tabs className="experience-tabs" defaultActiveKey="1">
        {experiences.map((category, categoryIndex) => (
          <TabPane tab={category.category} key={categoryIndex + 1}>
            <div className="experience-category">
              {category.experiences.map((experience, experienceIndex) => (
                <ExperienceCard
                  key={experienceIndex}
                  title={experience.title}
                  company={experience.company}
                  duration={experience.duration}
                  description={experience.description}
                  skills={experience.skills}
                />
              ))}
            </div>
          </TabPane>
        ))}
      </Tabs>

      <Button type="primary" className="cta-button" href="/contact">
        Connect with Me
      </Button>
    </section>
  );
};

export default ExperienceSection;
