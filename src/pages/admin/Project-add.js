import { useState, useEffect, router } from "@/utilities";

const AdminAddProjectPage = () => {
  useEffect(() => {
    const form = document.getElementById("form-add");
    const projectName = document.getElementById("project-name");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = {
        name: projectName.value,
      };
      fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then(() => router.navigate("/admin/projects"));
    });
  });
  return /*html*/ `
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
          <h1 class="mb-5 text-center text-3xl font-semibold">Add project</h1>
          <form id="form-add" class="min-w-full text-center">
            <label for="exampleFormControlInput1" class="form-label inline-block mb-5">Name project</label>
            <div class="flex justify-center items-center gap-2">
              <input type="text" id="project-name" class="form-control py-1 px-2 w-2/4 rounded border border-solid outline-none focus:border-sky-600 border-gray-300">
              <button type="submit" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
};
export default AdminAddProjectPage;
