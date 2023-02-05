import styled from '@emotion/styled';

const Container = styled.div`
            display: flex;
            flex-direction:column;            
            align-items: start;
            justify-content: center;
            margin: 0 auto;
            padding: 0 20px;
            width: fit-content;
            max-width: 480px;
            height: 100%;
            font-size: 40;
            

            color: #010101;
`;

const Title = styled.h1`
margin-top:2em;
font-size: 40;
            color: #010101;`

const ContactsList = styled.h2`
margin-top: 2em;
font-size: 40;
color: #010101;`

export { Container, Title, ContactsList};