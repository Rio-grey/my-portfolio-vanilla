import { useEffect, useState } from "@/utilities";
const Category = ({ category, onClick }) => {
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-category");
    for (const btn of btns) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const id = btn.dataset.id;
        onClick(id);
      });
    }
  }, [category, onClick]);
  return /*html*/ `
    <div class="text-center mb-9 flex gap-5 justify-center">
      <a class="btn-category p-2 bg-slate-900 bg-opacity-10 inline-block rounded-lg" data-id="0">All</a>
      ${category
        .map(
          (item) =>
            /*html*/ `<a href="" data-id="${item.id}" class="btn-category p-2 bg-slate-900 bg-opacity-10 inline-block rounded-lg">${item.name}</a>`
        )
        .join("")}
    </div>
  `;
};
export default Category;
