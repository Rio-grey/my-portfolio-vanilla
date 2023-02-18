import { addCategory, addProject } from "@/api/project";
import HeaderAdmin from "@/components/HeaderAdmin";
import { useState, useEffect, router } from "@/utilities";
import axios from "axios";

const AdminAddCategoryPage = () => {
  useEffect(() => {
    const form = document.getElementById("form-add");
    const categoryName = document.getElementById("category-name");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      try {
        const formData = {
          name: categoryName.value,
        };
        await addCategory(formData);
        router.navigate("/admin/categories");
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
  return /*html*/ `
    <div class="min-h-full">
      ${HeaderAdmin()}
      <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">Add category</h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8" id="main-admin">
          <form id="form-add" class="min-w-full">
            <div class="grid grid-cols-6 gap-x-6">
              <div class="form-group mb-5 col-span-6 sm:col-span-3">
                <label for="category-name" class="form-label block mb-2">Name category</label>
                <input type="text" id="category-name" class="form-control py-1 px-2 w-full rounded border border-solid outline-none focus:border-sky-600 border-gray-300">
              </div>
            </div>
            <button type="submit" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add</button>
          </form>
        </div>
      </main>
    </div>
  `;
};
export default AdminAddCategoryPage;
