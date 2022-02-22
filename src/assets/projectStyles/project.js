import styled from 'styled-components';

export const ProjectContainer = styled.div`
 display: flex;
 flex-direction: column
 
`;

export const ProjectTitle = styled.h2`
 color: grey;
 line-spacing: 0.5rem;
 font-size: 2.0rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  width: 900px;
  background: red;
  background: var(--white);
  border: 0.5px solid var(--blue-gray-4);
  box-shadow: rgba(100, 100, 139, 0.2) 0 7px 29px 0;
  p {
    text-align: center;
  }
`;

export const CardHeader = styled.div`
 display: flex;
 flex-direction: row;
 background: var(--blue-gray-3);
 padding: 10px 20px;
 h3 {
   color: #666;
   margin: 0;
 }
 
`;

export const Data = styled.div`
 display: flex;
 gap: 20px;
 padding-left: 20px;
 input {
     margin-top: 20px
 }
 
`;

export const ProjectBtn = styled.button`
  background-color: var(--blue);
  font-family: 'Poppins',sans-serif;
  display: block;
  padding: 10px 15px;
  margin-top: 10px;
  color: var(--white);
  border: none;
  outline: none;
  font-size: 1.0rem;
  border-radius: 5px;
  margin-right: 20px;
  cursor: pointer;
 }
`;
