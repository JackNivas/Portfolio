import React from 'react'
import { Element } from 'react-scroll';
import Img1 from '../../Assets/Ideas.jpg';
import Img2 from '../../Assets/Sillset1.png';
import Projects from '../Project/Project';
import "./ProjectContainer.css";

const ProjectContainer = () => {
const projects = [
    {
        img: Img1,
        title: "Gentlemen Jones",
        desc: "Make your business shine online with a custom E-commerce website designed just for you by a professional designer",
        link: "https://99designs.com/inspiration/websites/ecommerce"
    },
    {
    img: Img2,
    title: "E-Commerce",
    desc: "E-Commerce website is a shop on the web that provides goods and services to a large Internet audience. You may have decided to build your own eCommerce website, but just not sure where to begin",
    link: "https://websitelearners.com/create-an-ecommerce-website-using-wordpress/"
     
    },
    {
        img: "https://images-platform.99static.com//ZUU0DJkgfiPJzVKTgSEaii6H9G8=/5x0:1705x1700/fit-in/590x590/99designs-contests-attachments/111/111213/attachment_111213383",
        title: "Clone Projects",
        desc: "Make your business shine online with a custom E-commerce website designed just for you by a professional designer",
        link: "https://99designs.com/inspiration/websites/ecommerce"
    },
    {
    img: "https://images-workbench.99static.com/PBVl8sEbPxh8UWkVU7wiRJbhYL8=/99designs-contests-attachments/111/111303/attachment_111303308",
    title: "Online Cake Shop",
    desc: "E-Commerce website is a shop on the web that provides goods and services to a large Internet audience. You may have decided to build your own eCommerce website, but just not sure where to begin",
    link: "https://websitelearners.com/create-an-ecommerce-website-using-wordpress/"
     
    },
    
]
    
  return (
    <Element className ="projectContainer" id="projects">
    <h1>Projects</h1>
    <p>Here are some projects which I done for making lives to customer views.</p>
    <div className = "projectContainer__projects">
    {projects.map((projects, index) =>
        {
        return (
             <Projects
            key={index}
            img={projects.img}
            title={projects.title}
            desc={projects.desc}
            link={projects.link}
            />
            
        );
        }
        )
        }
        </div>
    </Element>
  );
};

export default ProjectContainer
