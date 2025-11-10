import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useAppStore } from '../../stores';

export interface BlogProps {
  path: string;
}

const BlogPage: React.FC<BlogProps> = (props: BlogProps) => {
    const [content, setContent] = useState<string>("");

    useEffect(()=>{

        fetch(`/posts/${props.path}`).then((res)=>res.text()).then((text)=>setContent(text))
        .catch((err)=>{
            console.log(err);
        })
    },[props.path])
  return (
    <div>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}

export default BlogPage;