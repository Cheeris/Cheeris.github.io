import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalLayout from './layout/BlogLayout';

import NotFoundPage from './pages/404/index';
import { routes } from './configs/routeConfig';

function App() {
  return (
    <Router>
      <GlobalLayout>
        <Routes>
          {routes.map((item) => (
            <Route key={item.key} path={item.location} element={item.element}>
              {item.children?.map((child) => (
                <Route key={child.key} path={child.location} element={child.element} />
              ))}
            </Route>
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </GlobalLayout>
    </Router>
  );
}

export default App;