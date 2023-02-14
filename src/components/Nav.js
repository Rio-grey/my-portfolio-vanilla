import { menus } from "../data";
const Nav = () => {
  return /*html*/ `
      <nav class="flex gap-x-20 text-base font-medium">
        ${menus
          .map(
            (menu) =>
              /*html*/ `<a class="hover:text-indigo-700 transition-all duration-200" href="#contact">${menu.name}</a>`
          )
          .join("")}
      </nav>
  `;
};
export default Nav;
