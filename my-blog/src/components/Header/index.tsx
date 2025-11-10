import React, {useState} from 'react';
import {Layout, Menu, type MenuProps} from 'antd';
import {routes} from '../../configs/routeConfig';

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
  // 获取当前路径
  const currentPath = window.location.pathname;
  
  // 查找匹配的路由key
  let selectedKey = '1';
  
  // 首先检查直接路由
  const directRoute = routes.find((item) => item.location === currentPath);
  if (directRoute) {
    selectedKey = directRoute.key;
  } else {
    // 如果没有直接匹配，检查blog子路由
    const blogRoute = routes.find((item) => item.key === '3');
    if (blogRoute && blogRoute.children) {
      const blogChildRoute = blogRoute.children.find((child) => child.location === currentPath);
      if (blogChildRoute) {
        selectedKey = '3'; // 选中Blog主菜单项
      }
    }
  }
  
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
        selectedKeys={[selectedKey]}
    /> 
    </Header>

    
  )
}

export default BlogHeader;