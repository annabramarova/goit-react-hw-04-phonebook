import styled from '@emotion/styled';


const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width:100%;
  gap: 8px;
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
display: flex;

`;

const ListText = styled.p`
  margin:0;
  font-size: 18px;
  font-weight: bold;

`;

const Button = styled.button`
  cursor: pointer;
padding: 8px 12px;
width: 100px;
color: #000;
border-radius: 8px;
font-weight: bold;
background: #f4f4f4;
margin-left: auto;
  box-shadow:  2px 2px 4px rgba(0, 0, 0, 0.15),
    -2px -2px 4px rgba(0, 0, 0, 0.15);

     &:active{
    box-shadow:  inset 2px 2px 4px rgba(0, 0, 0, 0.15),
    inset -2px -2px 4px rgba(0, 0, 0, 0.15);}
`;

export { List, ListItem, ListText, Button };