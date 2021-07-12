import React from 'react';
import { Input } from '../FieldForm/Input/Input.styles'
import { SearchWrapper, StatusInfo } from './NewSection.styles';


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