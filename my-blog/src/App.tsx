import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalLayout from './layout/BlogLayout';
import HomePage from './pages/index/index';
import AboutPage from './pages/about/index';
import BlogPage from './pages/blog/index';
import NotFoundPage from './pages/404/index';

function App() {
  return (
    <Router>
      <GlobalLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </GlobalLayout>
    </Router>
  );
}

export default App;