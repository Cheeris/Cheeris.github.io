import React, {useState} from 'react';
import {Layout, Menu, type MenuProps} from 'antd';
import {blogConfig} from '../../configs/blogConfig';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'; 
const {Sider} = Layout;

const items: MenuProps['items'] = blogConfig.map((item) => ({
    key: item.location,
    icon: React.createElement(NotificationOutlined),
    label: item.label,
}));

const BlogSider: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Sider
      style={{
        background: 'grey',
      }}
    >
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={items}
        style={{ height: '100%', borderRight: 0 }}
        onClick={({key})=>{
            navigate(key);
        }}
      />
    </Sider>
  );
}

export default BlogSider;