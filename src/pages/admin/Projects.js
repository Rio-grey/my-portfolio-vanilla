// import { projects } from "@/data";
import { useEffect, useState } from "@/utilities";

const AdminProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/projects", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        fetch(`http://localhost:3000/projects/${id}`, {
          method: "DELETE",
        }).then(() => {
          const newProject = projects.filter((project) => project.id != id);
          setProjects(newProject);
        });
      });
    }
  });
  return /*html*/ `
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <h1 class="mb-5 text-center text-3xl font-semibold">List projects</h1>
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
  `;
};
export default AdminProjectsPage;
