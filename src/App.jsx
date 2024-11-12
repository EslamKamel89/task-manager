import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    /*
    ! selected project has there state undefined , null and have value
    ? undefined >> no project selected && not adding new Project
    ? null >> adding new Project
    ? value >> project selected
    */
    selectedProjectId: undefined,
    projects: [],
  });
  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    })
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }
  const selectedProject = projectState.projects.find(project => project.id == projectState.selectedProjectId)
  let content = <SelectedProject project={selectedProject} />;
  // let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      }
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    });
  }
  console.log(projectState)
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
/*
{
    "projects": [
        {
            "title": "13-Aug-2013",
            "description": "Nisi omnis adipisci ",
            "dueDate": "2017-03-04",
            "id": 0.4756988607085837
        }
    ]
}
*/