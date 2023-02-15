import { mySkills } from "@/data";

const MySkills = () => {
  return /*html*/ `
    <div class="grid grid-cols-6 gap-10">
      <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50">
        ${mySkills
          .map(
            (skill) =>
              /*html*/ `<img class="mb-3 w-[65px] object-cover mx-auto" src="${skill.img}" />`
          )
          .join("")}
      </div>
    </div>  
  `;
};
export default MySkills;
