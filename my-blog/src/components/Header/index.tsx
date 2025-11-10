import React, {useState, useEffect} from 'react';
import {Layout, Menu, type MenuProps} from 'antd';
import {routes} from '../../configs/routeConfig';
import {useAppStore} from '../../stores/appStore';
import { useNavigate, useLocation } from 'react-router-dom';
const {Header} = Layout;



const BlogHeader: React.FC = () => {

  const headerSelectedKey = useAppStore((state) => state.headerSelectedKey);
  const setHeaderSelectedKey = useAppStore((state) => state.setHeaderSelectedKey);
  const navigate = useNavigate();

  function createMenuItems() {
    return routes.map((item) => ({
        key: item.key,
        label: item.label,
        onClick: () => (navigate(item.location), setHeaderSelectedKey(item.key)),
    }));
  }

  
  const items = createMenuItems();
  
  
  return (
    <Header style={{ display: 'flex', alignItems: 'center'}}>
    <div className="demo-logo" onClick={() => (navigate('/'), setHeaderSelectedKey('1'))} style={{cursor:'pointer', display:'flex', alignItems:'center', padding:'0px 12px'   }}>
        <img src="\HomeIcon.jpg" alt="logo" style={{width:'36px', height:'36px'}} />
        <span style={{fontSize: '12px',color:'#fff', padding:'0px 4px'}}>Cheeris's Blog</span>
    </div>
    <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={items}
        style={{ flex: 1, minWidth: 0 }}
        selectedKeys={[headerSelectedKey]}
    /> 
    </Header>

    
  )
}

export default BlogHeader;