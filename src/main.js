// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.js";
import { render, router } from "./utilities";
import HomePage from "./pages/home";
import AboutPage from "./pages/About";
import NotFoundPage from "./pages/NotFound";
import ProjectsPage from "./pages/Projects";
import ProjectDetailPage from "./pages/ProjectDetail";
import BlogsPage from "./pages/Blogs";
import ContactPage from "./pages/Contact";
import AdminProjectsPage from "./pages/admin/Projects";
import AdminAddProjectsPage from "./pages/admin/Project-add";
import AdminEditProjectsPage from "./pages/admin/Project-edit";
import DashboardPage from "./pages/admin/Dashboard";
const app = document.querySelector("#app");
const mainAdmin = document.querySelector("#main-admin");

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/blogs", () => render(BlogsPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/project/:id", ({ data }) =>
  render(() => ProjectDetailPage(data), app)
);
router.notFound(() => render(NotFoundPage, app));
// Admin
router.on("/admin/dashboard", () => render(DashboardPage, mainAdmin));
router.on("/admin/projects", () => render(AdminProjectsPage, mainAdmin));
router.on("/admin/projects/add", () => render(AdminAddProjectsPage, mainAdmin));
router.on("/admin/projects/:id/edit", ({ data }) =>
  render(() => AdminEditProjectsPage(data), mainAdmin)
);
router.resolve();
