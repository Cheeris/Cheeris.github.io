import React, {useState} from 'react';
import {Layout, Menu, type MenuProps} from 'antd';
import {routes} from '../../routes';

const {Header} = Layout;

function createMenuItems() {
    return routes.map((item) => ({
        key: item.key,
        label: item.label,
        onClick: () => (window.location.href = item.location),
    }));
}

const items = createMenuItems();

const BlogHeader: React.FC = () => {
  return (
    <Header style={{ display: 'flex', alignItems: 'center'}}>
    <div className="demo-logo" onClick={() => window.location.href = '/'} style={{cursor:'pointer', display:'flex', alignItems:'center', padding:'0px 12px'   }}>
        <img src="\HomeIcon.jpg" alt="logo" style={{width:'36px', height:'36px'}} />
        <span style={{fontSize: '12px',color:'#fff', padding:'0px 4px'}}>Cheeris's Blog</span>
    </div>
    <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={items}
        style={{ flex: 1, minWidth: 0 }}
        selectedKeys={[routes.find((item) => item.location === window.location.pathname)?.key || '1']}
    /> 
    </Header>

    
  )
}

export default BlogHeader;