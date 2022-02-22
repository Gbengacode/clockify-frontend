import React, { useState } from 'react';
// import { PropTypes } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { addProject } from '../../redux/projects/projects';
import {
  ModalBody, ModalFooter,
} from
  '../../assets/modalStyles/modal';

const Form = () => {
  const dispatch = useDispatch();
  const [project, setProject] = useState([]);
  const [projectName, setProjectName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const handleChange = (e) => {
    setProjectName(e.target.value);
    setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = false;
    if (projectName.trim() === '') {
      error = true;
      setErrorMsg('Please enter project name');
    }
    if (!error) {
      const formData = { id: uuidv4(), projectName, time: 0 };
      setProject([...project, formData]);
      dispatch(addProject(formData));
      toast.success('Project Added!');
      setProjectName('');
    }
  };

  return (
    <>
      <ToastContainer />
      <ModalBody>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="enter name of project"
            value={projectName}
            onChange={handleChange}
          />
          <p>{errorMsg}</p>
        </form>
      </ModalBody>
      <ModalFooter>
        <button type="button" onClick={handleSubmit}>Create</button>
      </ModalFooter>
    </>
  );
};

export default Form;
