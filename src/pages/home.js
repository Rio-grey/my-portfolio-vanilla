import { getCategories, getProjects } from "@/api/project";
import Header from "@/components/Header";
import { useEffect, useState } from "@/utilities";
import AboutPage from "./About";
import Category from "./Categories";
import ContactPage from "./Contact";
import PortfolioPage from "./Portfolio";
import ProjectsPage from "./Projects";

const HomePage = () => {
  return /*html*/ `
    ${Header()}
    ${AboutPage()}
    ${PortfolioPage()}
    ${ProjectsPage()}
    ${ContactPage()}
  `;
};

export default HomePage;
