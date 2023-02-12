import Header from "@/components/Header";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectInfo from "@/components/ProjectInfo";
import { projects } from "@/data";
import { router } from "@/utilities";

const ProjectDetailPage = ({ id }) => {
  const currentProject = projects.find((project) => project.id == id);
  if (!currentProject) return router.navigate("/projects");
  return /*html*/ `
    ${Header()}
    <div class="project-gallery">
      ${ProjectGallery({
        img: "https://source.unsplash.com/random",
      })}
    </div>
    <div class="project-info">
      ${ProjectInfo(currentProject)}
    </div>
  `;
};

export default ProjectDetailPage;
