import instance from "./config";

const getProjects = () => {
  return instance.get("/projects");
};
const getProject = (id) => {
  return instance.get(`/projects/${id}`);
};
const addProject = (project) => {
  return instance.post("/projects", project);
};
const editProject = (project) => {
  return instance.put(`/projects/${project.id}`, project);
};
const deleteProject = (id) => {
  return instance.delete(`/projects/${id}`);
};

// categories
const getCategories = () => {
  return instance.get("/categoryProjects");
};
const deleteCategory = (id) => {
  return instance.delete(`/categoryProjects/${id}`);
};
const addCategory = (category) => {
  return instance.post("/categoryProjects", category);
};
const getCategory = (id) => {
  return instance.get(`/categoryProjects/${id}`);
};
const editCategory = (category) => {
  return instance.put(`/categoryProjects/${category.id}`, category);
};

export {
  getProjects,
  getProject,
  addProject,
  editProject,
  deleteProject,
  getCategories,
  deleteCategory,
  addCategory,
  getCategory,
  editCategory,
};
