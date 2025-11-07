import React from 'react';
import {Breadcrumb, Layout} from 'antd';
import {Outlet} from 'react-router-dom';
const {Content} = Layout;


const BlogContent: React.FC = () => {
  return (
    <Layout style={{padding:'0 24px 24px'}}>
      <Breadcrumb style={{margin:'16px 0'}} items={[{title:'Home'}, {title:'Cheeris\'s Blog'}]}/>
      <Content style={{padding: 24, margin: 0, minHeight: 280, background: '#fff', borderRadius: 8,}}>
        
      </Content>
    </Layout>
  )
}

export default BlogContent;