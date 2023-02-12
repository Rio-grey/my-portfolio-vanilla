import ProjectList from "@/components/ProjectList";
import Header from "@/components/Header";

const ProjectsPage = () => {
  return /*html*/ `
    ${Header()}
    <h1 class="text-center text-xl">Projects Page</h1>
    <div class="projects">
      ${ProjectList()}
    </div>
  `;
};
export default ProjectsPage;
