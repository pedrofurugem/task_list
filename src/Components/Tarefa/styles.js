import styled from 'styled-components'

export const Tarefa = styled.div`
   display: flex;
   width: 410px;
   padding: 15px;
   align-items: center;
   gap: 15px;

   border-radius: 11.25px;
   background: rgba(53, 56, 62, 0.10);

   border-radius: 22.5px;
   background: rgba(53, 56, 62, 0.05);

   svg {
      background: rgba(53, 56, 62, 0.25);
      padding: 8px;
      width: 35px;
      border-radius: 12.5px;
      height: 35px;
      cursor: pointer;
   }

   p {
      color: #35383E;
      font-size: 20px;
      font-weight: 700;
   }
`