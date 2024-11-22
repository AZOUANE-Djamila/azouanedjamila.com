import React from 'react';
import { Card, Button, Tabs, Tag } from 'antd';
import Layout from '../components/Layout';
import '../styles/experience.scss';

const { TabPane } = Tabs;

const ExperienceCard = ({ title, company, duration, description, skills }) => {
  return (
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
        description:
          'Developed responsive websites and web applications, enhancing user experience and ensuring cross-platform compatibility.',
        skills: ['HTML/CSS', 'JavaScript', 'React', 'PHP'],
      },
    ],
  },
  // Add more categories and experiences as needed
];

const ExperienceSection = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default ExperienceSection;
