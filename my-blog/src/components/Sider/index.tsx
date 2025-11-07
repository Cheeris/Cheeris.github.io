import React, {useState} from 'react';
import {Layout, Menu, type MenuProps} from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';

const {Sider} = Layout;
const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: Array.from({ length: 4 }).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  },
);
const BlogSider: React.FC = () => {
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
        items={items2}
        style={{ height: '100%', borderRight: 0 }}
      />
    </Sider>
  );
}

export default BlogSider;