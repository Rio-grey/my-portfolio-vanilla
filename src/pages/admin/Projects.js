// import { projects } from "@/data";
import { deleteProject, getProjects } from "@/api/project";
import HeaderAdmin from "@/components/HeaderAdmin";
import { useEffect, useState } from "@/utilities";
import axios from "axios";

const AdminProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    // fetch("http://localhost:3000/projects", {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((data) => setProjects(data));
    // axios
    //   .get(`http://localhost:3000/projects`)
    //   .then(({ data }) => setProjects(data));
    // getProjects()
    //   .then((data) => setProjects(data))
    //   .catch((error) => console.log(error));
    (async () => {
      try {
        setProjects(await getProjects());
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", async () => {
        const id = btn.dataset.id;
        const confirm = window.confirm("Are you sure you want to remove");
        if (confirm) {
          try {
            await deleteProject(id);
            const newProject = projects.filter((project) => project.id != id);
            setProjects(newProject);
          } catch (error) {
            console.log(error);
          }
          // deleteProject(id)
          //   .then(() => {
          //     const newProject = projects.filter((project) => project.id != id);
          //     setProjects(newProject);
          //   })
          //   .catch((error) => console.log(error));
        }
        // axios.delete(`http://localhost:3000/projects/${id}`).then(() => {
        //   const newProject = projects.filter((project) => project.id != id);
        //   setProjects(newProject);
        // });
        // fetch(`http://localhost:3000/projects/${id}`, {
        //   method: "DELETE",
        // }).then(() => {
        //   const newProject = projects.filter((project) => project.id != id);
        //   setProjects(newProject);
        // });
      });
    }
  });
  return /*html*/ `
    <div class="min-h-full">
      ${HeaderAdmin()}
      <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">List projects</h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8" id="main-admin">
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden rounded-lg shadow-lg">
                  <table class="min-w-full text-center">
                    <thead class="border-b bg-gray-800">
                      <tr>
                        <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                          #
                        </th>
                        <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                          Name
                        </th>
                        <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                          Thumnail
                        </th>
                        <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                          Description
                        </th>
                        <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                          Author
                        </th>
                        <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                          <a href="/admin/projects/add" class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Add</a>
                        </th>
                      </tr>
                    </thead class="border-b">
                    <tbody>
                      ${projects
                        .map((project, index) => {
                          return /*html*/ `
                          <tr class="bg-white border-b">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${project.id}</td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              ${project.name}
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <button data-id=${project.id} class="btn-remove inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Remove</button>
                              <a href="/admin/projects/${project.id}/edit" class="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">Edit</a>
                            </td>
                          </tr class="bg-white border-b">
                        `;
                        })
                        .join("")}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  `;
};
export default AdminProjectsPage;
