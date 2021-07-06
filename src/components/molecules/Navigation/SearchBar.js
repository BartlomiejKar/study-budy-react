import React from 'react';
import styled from "styled-components"
import { Input } from '../FieldForm/Input/Input.styles';

const SearchWrapper = styled.div`
grid-row: 1/2;
grid-column: 2/3;
display: flex;
justify-content: flex-start;
align-items: center;
border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
padding: 0 40px;
${Input} {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.xl}
}
`
export const StatusInfo = styled.div`
color: ${({ theme }) => theme.colors.darkGrey};
font-size: ${({ theme }) => theme.fontSize.l};
margin-right: 40px;
p {
    margin: 5px;
}
`
const SearchBar = () => {
    return (
        <SearchWrapper>
            <StatusInfo>
                <p>Logged as:</p>
                <strong>
                    <p>Teacher</p>
                </strong>
            </StatusInfo>
            <Input />
        </SearchWrapper>
    )
}

export default SearchBar;