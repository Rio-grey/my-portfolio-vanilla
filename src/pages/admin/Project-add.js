import { addProject } from "@/api/project";
import HeaderAdmin from "@/components/HeaderAdmin";
import { useState, useEffect, router } from "@/utilities";
import axios from "axios";

const AdminAddProjectPage = () => {
  useEffect(() => {
    const form = document.getElementById("form-add");
    const projectName = document.getElementById("project-name");
    const projectAuthor = document.getElementById("project-author");
    const projectSource = document.getElementById("project-source");
    const projectWeb = document.getElementById("project-web");
    const projectLanguage = document.getElementById("project-language");
    const projectThumbnail = document.getElementById("project-thumbnail");
    const projectDate = document.getElementById("project-date");
    const projectCategory = document.getElementById("project-category");
    const projectGallery = document.getElementById("project-gallery");
    const projectDesc = document.getElementById("project-desc");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const urls = await uploadFiles(projectGallery.files);
      try {
        const formData = {
          name: projectName.value,
          author: projectAuthor.value,
          source: projectSource.value,
          web: projectWeb.value,
          language: projectLanguage.value,
          date: projectDate.value,
          categoryProjectId: projectCategory.value,
          desc: projectDesc.value,
          gallery: urls,
        };
        await addProject(formData);
        router.navigate("/admin/projects");
      } catch (error) {
        console.log(error);
      }
      // addProject(formData)
      //   .then(() => router.navigate("/admin/projects"))
      //   .catch((error) => console.log(error));
      // axios
      //   .post("http://localhost:3000/projects", formData)
      //   .then(() => router.navigate("/admin/projects"));
      // fetch("http://localhost:3000/projects", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // }).then(() => router.navigate("/admin/projects"));
    });
  });
  const uploadFiles = async (files) => {
    if (files) {
      const CLOUD_NAME = "dg5ax2asx";
      const PRESET_NAME = "riodev-portfolio";
      const FOLDER_NAME = "ECMA-portfolio";
      const urls = [];
      const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

      const formData = new FormData(); // key : value
      formData.append("upload_preset", PRESET_NAME);
      formData.append("folder", FOLDER_NAME);

      for (const file of files) {
        formData.append("file", file);
        const response = await axios.post(api, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        urls.push(response.data.secure_url);
      }
      return urls;
    }
  };
  return /*html*/ `
    <div class="min-h-full">
      ${HeaderAdmin()}
      <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">Add project</h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8" id="main-admin">
          <form id="form-add" class="min-w-full">
            <div class="grid grid-cols-6 gap-x-6">
              <div class="form-group mb-5 col-span-6 sm:col-span-3">
                <label for="project-name" class="form-label block mb-2">Name project</label>
                <input type="text" id="project-name" class="form-control py-1 px-2 w-full rounded border border-solid outline-none focus:border-sky-600 border-gray-300">
              </div>
              <div class="form-group mb-5 col-span-6 sm:col-span-3">
                <label for="project-author" class="form-label block mb-2">Author</label>
                <input type="text" id="project-author" class="form-control py-1 px-2 w-full rounded border border-solid outline-none focus:border-sky-600 border-gray-300">
              </div>
              <div class="form-group mb-5 col-span-6 sm:col-span-3">
                <label for="project-source" class="form-label block mb-2">Link source code</label>
                <input type="text" id="project-source" class="form-control py-1 px-2 w-full rounded border border-solid outline-none focus:border-sky-600 border-gray-300">
              </div>
              <div class="form-group mb-5 col-span-6 sm:col-span-3">
                <label for="project-web" class="form-label block mb-2">Link website</label>
                <input type="text" id="project-web" class="form-control py-1 px-2 w-full rounded border border-solid outline-none focus:border-sky-600 border-gray-300">
              </div>
              <div class="form-group mb-5 col-span-6 sm:col-span-3">
                <label for="project-language" class="form-label block mb-2">Language</label>
                <input type="text" id="project-language" class="form-control py-1 px-2 w-full rounded border border-solid outline-none focus:border-sky-600 border-gray-300">
              </div>
              <!--
              <div class="form-group mb-5 col-span-6 sm:col-span-3">
                <label for="project-thumbnail" class="form-label block mb-2">Thumbnail</label>
                <input class="block w-full text-sm text-gray-900 border py-[3.8px] px-2 border-gray-300 rounded cursor-pointer dark:text-gray-400 focus:outline-none" id="project-thumbnail" type="file">
              </div>
              -->
              <div class="form-group mb-5 col-span-6 sm:col-span-3">
                <label for="project-date" class="form-label block mb-2">Date</label>
                <input type="date" min="1997-01-01" max="2090-12-31" id="project-date" class="form-control py-[3px] px-2 w-full rounded border border-solid outline-none focus:border-sky-600 border-gray-300">
              </div>
              <div class="form-group mb-5 col-span-6 sm:col-span-3">
                <label for="project-category" class="block mb-2">Category</label>
                <select id="project-category" class=" border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5 px-2">
                  <option selected>Choose a category</option>
                  <option value="1">HTML, CSS</option>
                  <option value="2">PHP</option>
                  <option value="3">Javascript</option>
                  <option value="4">Pug, SCSS</option>
                </select>
              </div>
            </div>
            <div class="form-group mb-5">
              <label for="" class="form-label block mb-2">Gallery Project</label>
              <div class="flex items-center justify-center w-full">
                <label for="project-gallery" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white">
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <input id="project-gallery" type="file" multiple class="hidden" />
                </label>
              </div> 
            </div>
            <div class="form-group mb-5">
              <label for="project-desc" class="block mb-2">Description</label>
              <textarea id="project-desc" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg outline-none border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea>
            </div>
            <button type="submit" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add</button>
          </form>
        </div>
      </main>
    </div>
  `;
};
export default AdminAddProjectPage;
