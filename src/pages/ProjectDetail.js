import Header from "@/components/Header";
import { useEffect, useState, router } from "@/utilities";
import { getProject } from "@/api/project";
import ProjectInfo from "@/components/ProjectInfo";

const ProjectDetailPage = ({ id }) => {
  const [projects, setProjects] = useState({});
  useEffect(() => {
    (async () => {
      try {
        setProjects(await getProject(id));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return /*html*/ `
    ${Header()}
    <div class="Project-detail max-w-wrapper mx-auto">
      <h1 class="text-center text-7xl mb-10">Project Detail</h1>
      <p class="text-center bg-black bg-opacity-10 px-5 py-3 rounded-full w-60 mx-auto mb-20">Project || Project Detail</p>
      <div class="project-main relative">
        <div class="project-gallery">
          <div>${
            projects.gallery
              ? projects.gallery
                  .map((item) => {
                    return `<img
                    src="${item}"
                    class="h-auto w-full object-cover shadow-xl duration-500 rounded-xl mb-5"
                  ></img>`;
                  })
                  .join("")
              : ""
          }</div>
        </div>
        <div class="project-desc">
          <h1>${projects.desc}</h1>
        </div>
        <div class="project-info bg-[#252734]  w-[265px] py-[50px] px-10 absolute right-5 top-[570px] text-white">
          <h1 class="text-center text-3xl mb-10 font-medium">Information</h1>
          <div class="bg-[#2a2c39] p-5 mb-2">
            <h2 class="font-medium mb-3">Project Name:</h2>
            <span class="text-gray-400">${projects.name}</span>
          </div>
          <div class="bg-[#2a2c39] p-5 mb-2">
            <h2 class="font-medium mb-3">Clients:</h2>
            <span class="text-gray-400">${projects.author}</span>
          </div>
          <div class="bg-[#2a2c39] p-5 mb-2">
            <h2 class="font-medium mb-3">Language:</h2>
            <span class="text-gray-400">${projects.language}</span>
          </div>
          <div class="bg-[#2a2c39] p-5 mb-2">
            <h2 class="font-medium mb-3">Date:</h2>
            <span class="text-gray-400">${projects.date}</span>
          </div>
        </div>
      </div>
    </div>
  `;
};

export default ProjectDetailPage;
