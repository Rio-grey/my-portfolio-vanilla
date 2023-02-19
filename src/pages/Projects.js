import ProjectList from "@/components/ProjectList";
import Header from "@/components/Header";
import { getCategories, getProjects } from "@/api/project";
import { useEffect, useState } from "@/utilities";
import Category from "./Categories";

const ProjectsPage = () => {
  const [projectInCategory, setProjectInCategory] = useState([]);
  const [projects, setProjects] = useState([]);
  const [category, setCategory] = useState([]);
  const [id, setId] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        setProjects(await getProjects());
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      try {
        setCategory(await getCategories());
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  useEffect(() => {
    // console.log(1);
    // (async () => {
    //     const data = await (await fetch(`http://localhost:3000/category/${id}?_embed=projects`)).json();
    //     setProjectInCategory(data.projects)
    // })()
  }, [id]);
  const onHandleClick = async (id) => {
    if (id != 0) {
      const data = await (
        await fetch(
          `http://localhost:3000/categoryProjects/${id}?_embed=projects`
        )
      ).json();
      // console.log(data);
      setProjectInCategory(data);
    } else {
      fetch("http://localhost:3000/projects")
        .then((Response) => Response.json())
        .then((data) => setProjectInCategory(data));
    }
  };
  return /*html*/ `
    <div class="Projects max-w-wrapper mx-auto" id="projects">
      <h1 style="-webkit-background-clip: text" class="mb-14 text-[144px] text-center overflow-visible font-pacifico bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">Recent projects</h1>
      ${Category({ category, onClick: onHandleClick })}
      <div class="project grid grid-cols-3 gap-10 relative">
        <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" xmlns="http://www.w3.org/2000/svg">
            <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"/>
            <defs>
              <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                <stop stop-color="#9089FC" />
                <stop offset="1" stop-color="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        ${
          projectInCategory.projects
            ? `
            ${projectInCategory.projects
              .map((project) => {
                return /*html*/ `
                <div class="project-item hover:bg-blue-100 transition-all rounded-lg shadow-2xl">
                  <a href="/project/${project.id}"><img class="h-60 object-cover w-full rounded-t-lg" src="${project.thumbnail}" alt="" /></a>
                  <div class="content p-5">
                    <span class="text-sm text-gray-700 block mb-3 font-light">${project.date} — Web development</span>
                    <h2 class="title text-2xl font-medium mb-3 tracking-[0.45px] leading-8"><a href="/project/${project.id}">${project.name}</a></h2>
                    <span class="mb-3 inline-block py-1 px-2 rounded-md bg-black bg-opacity-5">${project.language}</span>
                    <p class="desc mb-4 font-light">${project.desc}</p>
                    <div class="btns flex gap-5 mt-auto">
                      <a href="${project.source}" target="_blank" class="inline-block py-1.5 px-2 border-gray-500 border rounded-lg font-light">View source</a>
                      <a href="${project.web}" target="_blank" class="inline-block py-1.5 px-2 border-gray-500 border rounded-lg font-light">Visit website</a>
                    </div>
                  </div>
                </div>
              `;
              })
              .join("")}
          `
            : `
          ${projects
            .map((project) => {
              return /*html*/ `
              <div class="project-item hover:bg-blue-100 transition-all rounded-lg shadow-2xl">
                <a href="/project/${project.id}"><img class="h-60 object-cover w-full rounded-t-lg" src="${project.thumbnail}" alt="" /></a>
                <div class="content p-5">
                  <span class="text-sm text-gray-700 block mb-3 font-light">${project.date} — Web development</span>
                  <h2 class="title text-2xl font-medium mb-3 tracking-[0.45px] leading-8"><a href="/project/${project.id}">${project.name}</a></h2>
                  <span class="mb-3 inline-block py-1 px-2 rounded-md bg-black bg-opacity-5">${project.language}</span>
                  <p class="desc mb-4 font-light">${project.desc}</p>
                  <div class="btns flex gap-5 mt-auto">
                    <a href="${project.source}" target="_blank" class="inline-block py-1.5 px-2 border-gray-500 border rounded-lg font-light">View source</a>
                    <a href="${project.web}" target="_blank" class="inline-block py-1.5 px-2 border-gray-500 border rounded-lg font-light">Visit website</a>
                  </div>
                </div>
              </div>
            `;
            })
            .join("")}
          `
        }
        
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" xmlns="http://www.w3.org/2000/svg">
            <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"/>
            <defs>
              <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                <stop stop-color="#9089FC" />
                <stop offset="1" stop-color="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  `;
};
export default ProjectsPage;
