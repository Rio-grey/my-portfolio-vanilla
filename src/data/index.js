const menus = [
  // { name: "Home", path: "/" },
  // { name: "About", path: "#about" },
  { name: "Portfolio", path: "#portfolio" },
  { name: "Projects", path: "#projects" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact", path: "#contact" },
];
const mySkills = [
  { img: "./src/images/javascript.svg" },
  { img: "./src/images/html.svg" },
  { img: "./src/images/css.svg" },
  { img: "./src/images/tailwindcss.svg" },
  { img: "./src/images/vercel.svg" },
  { img: "./src/images/nodejs.svg" },
  { img: "./src/images/photoshop.png" },
  { img: "./src/images/figma.png" },
  { img: "./src/images/npm.svg" },
  { img: "./src/images/sass-1-logo-svg-vector.svg" },
  { img: "./src/images/bootstrap-4-logo-svg-vector.svg" },
  { img: "./src/images/php-logo-svg-vector.svg" },
  { img: "./src/images/github-octocat-logo-svg-vector.svg" },
];
const projects = [
  {
    id: 1,
    name: "Dự án 1",
    teams: [
      {
        id: 1,
        name: "Quý",
      },
      {
        id: 2,
        name: "Trường",
      },
      {
        id: 1,
        name: "Quang",
      },
    ],
  },
  {
    id: 2,
    name: "Dự án mẫu",
  },
  {
    id: 3,
    name: "Dự án tốt nghiệp",
    teams: [
      {
        id: 1,
        name: "Quý",
      },
      {
        id: 2,
        name: "Hà Giang",
      },
      {
        id: 1,
        name: "Minh Anh",
      },
    ],
  },
];
export { projects, menus, mySkills };
