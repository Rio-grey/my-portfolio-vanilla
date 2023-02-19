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
      <h1 class="text-center text-7xl mb-10 font-medium">Project Detail</h1>
      <p class="text-center bg-black bg-opacity-10 px-5 py-3 rounded-full w-60 mx-auto mb-20">Project || Project Detail</p>
      <div class="project-main relative">
        <div class="project-thumbnail mb-10">${
          projects.thumbnail
            ? projects.thumbnail.map(
                (item) =>
                  `<img src="${item}" class="h-[600px] w-full object-cover border-2" />`
              )
            : ""
        }</div>
        <div class="project-desc mb-10">
          <h4 class="text-lg mb-3"><span class="inline-block mr-5">||</span>Givest - Non Profit Website</h4>
          <h1 class="text-6xl leading-[80px] font-medium max-w-[677px] mb-5">Givest is a non profit and fund rising website.</h1>
          <p class="max-w-[677px] mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <p class="max-w-[677px] mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <p class="max-w-[677px] mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <p class="max-w-[677px] mb-4">${projects.desc}</p>
        </div>
        <div class="project-gallery">
          <h2 class="text-5xl leading-[80px] font-medium mb-7">Images Gallery.</h2>
          ${
            projects.gallery
              ? projects.gallery
                  .map((item) => {
                    return `<img
                    src="${item}"
                    class="h-auto w-full object-cover shadow-xl border duration-500 rounded-xl mb-5"
                  ></img>`;
                  })
                  .join("")
              : ""
          }
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
