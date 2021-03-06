import React, { useContext, useEffect } from "react";
import Sidebar from "../layout/Sidebar";
import Bar from "../layout/Bar";
import FormTask from "../tasks/FormTask";
import ListTasks from "../tasks/ListTasks";

import authContext from "../../context/auth/authContext";

const Projects = () => {
  // Get auth info
  const { aunthenticatedUser } = useContext(authContext);

  useEffect(() => {
    aunthenticatedUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container-app">
      <Sidebar />

      <div className="main-section">
        <Bar />

        <main>
          <FormTask />

          <div className="tasks-container">
            <ListTasks />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
