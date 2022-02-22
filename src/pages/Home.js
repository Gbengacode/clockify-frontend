import React, { useState, useEffect } from 'react';
import { BsPlay } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import { removeProject, updateTime } from '../redux/projects/projects';
import Sidebar from '../components/header/Sidebar';
import {
  Container, CardContainer, Icon, IconDel, Text,
} from '../assets/homeStyles/home';
import Modal from '../components/mini/Modal';

import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const projects = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [total, setTotal] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDelete = (payload) => {
    dispatch(removeProject(payload));
    toast.success('Project Deleted!', { position: toast.POSITION.BOTTOM_RIGHT });
  };

  const toggle = () => {
    setIsActive(!isActive);
  };
  let timer = null;

  useEffect(() => {
    if (isActive) {
      timer = setInterval(() => {
        setSeconds((seconds) => seconds + 1000);
      }, 1000);
    } else {
      clearInterval(timer);
      setSeconds(0);
      setTotal((prev) => prev + seconds);
    }
    return () => clearInterval(timer);
  }, [isActive]);

  const resume = (id, time) => {
    setIsActive(true);
    setSeconds(0);
    dispatch(updateTime({ id, time }));
  };

  return (
    <>
      <ToastContainer />
      <Container>
        <Sidebar />
        <CardContainer>

          <div className="form-container">
            <form>

              <input type="text" placeholder="What are you working on" />
              <Icon onClick={handleModal}>
                <AiOutlinePlusCircle />
              </Icon>
              <button className="btn-add" type="button">
                {' '}

                Project
              </button>
            </form>
            <div className="stop-div">
              <span className="count-time">
                {(`0${Math.floor((seconds / 3600000) % 60)}`).slice(-2)}
                :
                {(`0${Math.floor((seconds / 60000) % 60)}`).slice(-2)}
                {' '}
                :
                {' '}
                {(`0${Math.floor((seconds / 1000) % 60)}`).slice(-2)}
              </span>
              { isActive
                ? <button className="btn-stop" type="button" onClick={toggle}>Stop</button>
                : <button className="btn-start" type="button" onClick={toggle}>Start</button>}
            </div>
          </div>
          { isModalOpen && <Modal setIsModalOpen={setIsModalOpen} /> }
          <Text>This week</Text>
          <div className="result">
            <div className="header">
              <p>
                Total:
                {' '}
                {(`0${Math.floor((total / 3600000) % 60)}`).slice(-2)}
                :
                {(`0${Math.floor((total / 60000) % 60)}`).slice(-2)}
                :
                {' '}
                {(`0${Math.floor((total / 1000) % 60)}`).slice(-2)}
              </p>
            </div>

            <div className="body">
              { projects && projects.map((project) => (
                <div className="cover" key={project.id}>
                  <h2 className="desc">{project.projectName}</h2>
                  <h3>
                    {' '}
                    {(`0${Math.floor((project.time / 3600000) % 60)}`).slice(-2)}
                    :
                    {(`0${Math.floor((project.time / 60000) % 60)}`).slice(-2)}
                    :
                    {' '}
                    {(`0${Math.floor((project.time / 1000) % 60)}`).slice(-2)}
                  </h3>
                  <div
                    className="resume"
                    aria-hidden="true"
                    onClick={() => { resume(project.id, total); }}
                    onKeyPress={resume}
                  >
                    <BsPlay />
                  </div>
                  <IconDel
                    className="resume"
                    aria-hidden="true"
                    onClick={() => { handleDelete(project.id); }}
                    onKeyPress={() => { handleDelete(project.id); }}
                  >
                    <MdDeleteForever />
                  </IconDel>
                </div>
              ))}
            </div>
          </div>
        </CardContainer>

      </Container>

    </>
  );
};
export default Home;
