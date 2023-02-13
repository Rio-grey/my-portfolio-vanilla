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
export { getProjects, getProject, addProject, editProject, deleteProject };
