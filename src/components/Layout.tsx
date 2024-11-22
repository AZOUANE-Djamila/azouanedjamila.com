import React, { ReactNode } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'gatsby';
import '../styles/navbar.scss'; // Import your custom SCSS styles

const { Header, Content, Footer } = Layout;

interface CustomLayoutProps {
  children: ReactNode;  // Explicitly type the 'children' prop
}

const CustomLayout: React.FC<CustomLayoutProps> = ({ children }) => (
  <Layout>
    {/* Header Section */}
    <header className="custom-header">
      <Menu mode="horizontal" defaultSelectedKeys={['1']} className="custom-menu">
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/experiences">Experiences</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/projects">Projects</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    </header>

    {/* Content Area */}
    <Content className="custom-content">
      {children}
    </Content>

    {/* Footer Section */}
    <footer className="custom-footer">
      Djamila's Portfolio ©2024
    </footer>
  </Layout>
);

export default CustomLayout;
