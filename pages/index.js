import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt: `Next js the React framework for production - 
      it makes building fullstack React apps 
      and sites a breeze and ships with built-in SSR`,
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt: `Next js the React framework for production - 
      it makes building fullstack React apps 
      and sites a breeze and ships with built-in SSR`,
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt: `Next js the React framework for production - 
      it makes building fullstack React apps 
      and sites a breeze and ships with built-in SSR`,
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting Started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt: `Next js the React framework for production - 
      it makes building fullstack React apps 
      and sites a breeze and ships with built-in SSR`,
    date: "2022-02-10",
  },
];
function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}
export default HomePage;

// 1 Hero Section => present ourselves
// 2 Featured Posts
