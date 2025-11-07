import AboutPage from "../pages/about";
import DefaultBlogPage from "../pages/blog/index.tsx";
import HomePage from "../pages/index/index";
import { blogConfig } from "./blogConfig";


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
        // element: <DefaultBlogPage />,
        children: blogConfig.map((item) => ({
            key: item.location,
            label: item.location,
            location: item.location,
            element: item.element,
        })),
    },
]
