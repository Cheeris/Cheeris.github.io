import DefaultBlogPage from "../pages/blog";
import BlogPage from "../pages/blog/blogPage";

export const blogConfig = [
    {
        label: "Home",
        path: "index",
        location: "/blog",
        element: <DefaultBlogPage />,
    },
    {
        label:"helloWorld",
        path: "helloWorld.md",
        location: "/blog/helloWorld",
        element: <BlogPage path="helloWorld.md" />,
    },
    {
        label: "helloReact",
        path: "helloReact.md",
        location: "/blog/helloReact",
        element: <BlogPage path="helloReact.md" />,
    }
]