import styled from 'styled-components';

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;

    @media screen and (max-width: 800px) {
        padding-left: 4.5%;        
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 15px;
        grid-row-gap: 25px;
    }

  @media screen and (max-width: 400px) {
        padding-left: 7.5%;
        grid-template-columns: 1fr;
        grid-row-gap: 25px;
    }
`;

export const Title = styled.h2 `
    font-size: 38px;
    margin-bottom: 25px;
    text-align: center;
    
`;