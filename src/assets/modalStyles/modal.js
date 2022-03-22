import styled, { keyframes } from 'styled-components';

const drop = keyframes`
  0%{}
  100% {transform: translateY(800px)}

`;

export const ModalBackground = styled.div`

display: flex;
flex-direction: column;
background: var(--dark);
height: 100%;
width: 100%;
padding: 20px;
position: fixed;
top: -800px;
left: 0;
animation: ${drop} 0.3s ease-in-out forwards;


`;

export const ModalClose = styled.button`
    
    box-sizing: border-box;
    height: 30px;
    font-size: 1.2rem;
    background: transparent;
    border: none;
    outline: none;
    padding: 0 10px;
    cursor: pointer;
    color: #666;
`;

export const ModalContainer = styled.div`
display: flex;
flex-direction:column;
align-item: center;
margin: 50px auto;
justify-content: center;
background: var(--white);
padding: 20px;
width: 600px;
border-radius: 6px;
box-shadow: rgba(100, 100, 139, 0.2) 0 7px 29px 0;

`;

export const ModalTitle = styled.div`
display: flex;
justify-content: space-between;
h2 {
    color: #666;
    font-size: 1.1rem;
}
`;

export const ModalBody = styled.div`
border-radius: 6px;
  form{
      input {
          width: 100%;
          padding 15px;
      }
      p {
          color: var(--red);
          margin-top: 5px;
      }
  }
`;

export const ModalFooter = styled.div`
display: flex;
justify-content: flex-end;
margin-top: 20px;
  button {
      background: var(--blue);
      border: none;
      color: var(--white);
      cursor: pointer;
      padding: 10px 20px;
  }
`;
