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
import AdminAddProjectPage from "./pages/admin/Project-add";
import AdminEditProjectPage from "./pages/admin/Project-edit";
import DashboardPage from "./pages/admin/Dashboard";
import AdminCategoriesPage from "./pages/admin/Categories";
import AdminAddCategoryPage from "./pages/admin/Category-add";
import AdminEditCategoryPage from "./pages/admin/Category-edit";
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
router.on("/admin/", () => render(DashboardPage, mainAdmin));
router.on("/admin/projects", () => render(AdminProjectsPage, mainAdmin));
router.on("/admin/projects/add", () => render(AdminAddProjectPage, mainAdmin));
router.on("/admin/projects/:id/edit", ({ data }) =>
  render(() => AdminEditProjectPage(data), mainAdmin)
);
router.on("/admin/categories", () => render(AdminCategoriesPage, mainAdmin));
router.on("/admin/categories/add", () =>
  render(AdminAddCategoryPage, mainAdmin)
);
router.on("/admin/categories/:id/edit", ({ data }) =>
  render(() => AdminEditCategoryPage(data), mainAdmin)
);
router.resolve();
