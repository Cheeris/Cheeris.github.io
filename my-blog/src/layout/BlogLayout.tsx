import React from 'react';
import {Layout} from 'antd';
import { useLocation } from 'react-router-dom';
import BlogHeader from '../components/Header/index.tsx';
import BlogSider from '../components/Sider/index.tsx';

const { Content } = Layout;

interface GlobalLayoutProps {
  children: React.ReactNode;
}

const GlobalLayout: React.FC<GlobalLayoutProps> = ({ children }) => {
  const location = useLocation();
  
  // 判断当前路径是否需要显示Sider（博客页面显示Sider）
  const showSider = location.pathname.includes('/blog');
  
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 顶部 Header - 始终显示 */}
      <BlogHeader />
      <Layout>
        {/* 左侧 Sider - 只在博客页面显示 */}
        {showSider && <BlogSider />}
        <Layout style={{ 
          padding: '0 24px 24px', 
          transition: 'margin-left 0.2s'
        }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: '#fff',
              borderRadius: 8,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default GlobalLayout;
