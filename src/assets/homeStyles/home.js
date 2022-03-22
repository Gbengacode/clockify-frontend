import styled from 'styled-components';

export const Container = styled.div`
 width: 100%;
 height: 100vh;
 display: flex;
 flex: 1;
 gap: 40px;
`;
export const CardContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 40px;
flex: 1;

.form-container {
   
    height: 150px;
    background: var(--white);
    border: 0.5px solid var(--blue-gray-4);
    box-shadow: rgba(100, 100, 139, 0.2) 0 7px 29px 0;
  
    form {
        display: flex;
        padding: 10px;
        gap: 10px;
        border-bottom:  0.5px solid var(--blue-gray-4);
        input[type=text] {
            width: 100%;
            padding: 10px 20px;
            border: none
        }
        .btn-add {
            background-color: transparent;
            font-family: 'Poppins', sans-serif;
            border: none;
            outline: none;
            color: var(--blue);
            font-size: 1.0rem;
            margin-right: 20px;
            cursor: pointer;
        }
       
    }
    .stop-div {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding-right: 20px;
        .count-time {
            display: block;
            margin: 10px 15px 0 0;
            color: var(--blue-gray-8);
            font-size: 1.1rem;
        }
       .btn-stop {
        background-color: var(--red);
        font-family: 'Poppins', sans-serif;
           display: block;
           padding: 0 15px;
           margin-top: 10px;
           color: var(--white);
           border: none;
           outline: none;
           font-size: 1.0rem;
           border-radius: 5px;
           margin-right: 20px;
           &:hover{
            background: var(--white);
            color: var(--red);
            border: 1px solid var(--red);
       }
       }

       .btn-start {
        background-color: var(--blue);
        font-family: 'Poppins', sans-serif;
           display: block;
           padding: 0 15px;
           margin-top: 10px;
           color: var(--white);
           border: none;
           outline: none;
           font-size: 1.0rem;
           border-radius: 5px;
           margin-right: 20px;
           &:hover{
            background: var(--white);
            color: var(--blue);
            border: 1px solid var(--blue);
       }
       
    }


    }
    
    
}
.result {
    display: flex;
    flex-direction: column;
    background: var(--white);
    border: 0.5px solid var(--blue-gray-4);
    box-shadow: rgba(100, 100, 139, 0.2) 0 7px 29px 0;
    

.header {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    
    background: var(--blue-gray-3);
    p{
       padding-right: 20px;
       color: var(--blue-gray-6);
    }
}
.body .cover {
    display: flex;
   
    padding-right: 20px;
   
    .desc {
        margin-right: auto;
        font-size: 1.2rem;
        padding-left: 20px;
        color: var(--blue-gray-6);
    }
    .resume {
        margin-top: 13px;
        font-size: 2rem;
        cursor: pointer;
    }
    h3 {
        padding-right: 20px;
        color: var(--blue-gray-6);
       
    }
}

`;

export const FormPanel = styled.div`
  
`;

export const ResultPanel = styled.div``;

export const Icon = styled.div`
margin-top: 8px;
font-size: 20px;
color: var(--blue);
cursor: pointer;
`;

export const IconDel = styled.div`
 color: var(--red);
 cursor: pointer;
`;

export const Text = styled.p`
 color: var(--blue-gray-10);
`;
