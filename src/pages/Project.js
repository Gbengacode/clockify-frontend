import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/header/Sidebar';
import {
  Container,
} from '../assets/homeStyles/home';
import {
  ProjectContainer, CardContainer, CardHeader, Data, ProjectBtn, ProjectTitle,
} from '../assets/projectStyles/project';

const Project = () => {
  const projects = useSelector((state) => state.projects);
  const navigate = useNavigate('');
  return (
    <div>
      <Container>
        <Sidebar />
        <ProjectContainer>
          <div className="project-header">
            <ProjectTitle>Project Board</ProjectTitle>
            <ProjectBtn className="btn-project" onClick={() => { navigate('/'); }}>Create project</ProjectBtn>
          </div>

          <CardContainer>
            <CardHeader>
              <h3>Projects</h3>
            </CardHeader>
            { projects.length ? projects && projects.map((project) => (
              <div key={project.id}>
                <Data>
                  <input type="checkbox" id="project" name="project" value="" />

                  <p>{project.projectName}</p>
                </Data>
              </div>
            ))
              : <div><p>No Project</p></div> }

          </CardContainer>
        </ProjectContainer>
      </Container>

    </div>

  );
};

export default Project;
