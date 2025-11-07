import DefaultBlogPage from "../pages/blog";
import BlogPage from "../pages/blog/blogPage";

export const blogConfig = [
    {
        path: "index",
        location: "/blog",
        element: <DefaultBlogPage />,
    },
    {
        path: "helloWorld.md",
        location: "/blog/helloWorld",
        element: <BlogPage path="helloWorld.md" />,
    },
    {
        path: "helloReact.md",
        location: "/blog/helloReact",
        element: <BlogPage path="helloReact.md" />,
    }
]