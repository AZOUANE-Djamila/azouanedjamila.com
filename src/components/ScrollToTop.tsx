import React from 'react';
import { Button } from 'antd';
import { UpOutlined } from '@ant-design/icons';

const ScrollToTop = () => (
  <Button
    icon={<UpOutlined />}
    shape="circle"
    style={{
      position: 'fixed',
      bottom: '50px',
      right: '50px',
      zIndex: 100,
    }}
    onClick={() => window.scrollTo(0, 0)}
  />
);

export default ScrollToTop;
