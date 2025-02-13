import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Footer from "../components/Footer/Footer";

const Page = () => {
  return (
    <div className="bg-zinc-400">
      <Header></Header>
      <Hero></Hero>

      <p>
        Welcome to my portfolio! This home page is a showcase of my skills,
        projects, and experiences as a web developer, all powered by Next.js.
        Here, you will get an insight into my journey in the tech world, from the
        innovative projects I have built to the technical expertise I have developed
        along the way. Through this portfolio, I aim to demonstrate my passion
        for creating dynamic and responsive web applications using modern
        technologies. Feel free to explore and reach out via the contact section
        if you have any questions or opportunities you did like to discuss. 🚀
        What is next on our coding adventure?
      </p>

      <Footer></Footer>

    
    </div>
  );
};

export default Page;
