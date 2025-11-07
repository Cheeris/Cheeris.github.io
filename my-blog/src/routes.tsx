import AboutPage from "./pages/about";
import BlogPage from "./pages/blog";
import HomePage from "./pages/index";


export const routes = [
    {
        key: '1',
        label: '首页',
        location: '/',
        element: <HomePage />,
    },
    {
        key: '2',
        label: '关于',
        location: '/about',
        element: <AboutPage />,
    },
    {
        key: '3',
        label: 'Blog',
        location: '/blog',
        element: <BlogPage />,
    },
]
// <Router>
//     <GlobalLayout>
//     <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/blog" element={<BlogPage />} />
//         <Route path="*" element={<NotFoundPage />} />
//     </Routes>
//     </GlobalLayout>
// </Router>