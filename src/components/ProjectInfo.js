const ProjectInfo = ({ name, teams }) => {
  return /*html*/ `
    <h2>${name}</h2>
    ${
      teams
        ? /*html*/ `
          <h3>Teams</h3>
          <ul>
            ${teams
              .map((member) => {
                return /*html*/ `<li>${member.name}</li>`;
              })
              .join("")}
          </ul>
        `
        : ""
    }
  `;
};

export default ProjectInfo;
