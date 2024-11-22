import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import '../styles/contact.scss';
import Layout from '../components/Layout'

const Contact = () => {
  const handleSubmit = (values) => {
    console.log('Form values:', values);
  };

  return (
    <Layout>
    <section className="contact-section">
      <h2 className="section-title">Contact Us</h2>
      <Row justify="center">
        <Col xs={24} sm={16} md={12}>
          <Form
            layout="vertical"
            onFinish={handleSubmit}
            className="contact-form"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input placeholder="Enter your name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>
            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: 'Please enter your message' }]}
            >
              <Input.TextArea rows={4} placeholder="Enter your message" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="submit-button">
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </section>
    </Layout>
  );
};

export default Contact;
