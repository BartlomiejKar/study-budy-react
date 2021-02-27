import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";
import { Label } from "components/atoms/Label/Label";
import { Input } from "components/atoms/Input/Input"


const Wrapper = styled.div`
background-color: yellow;
`;

const FormField = ({ label, type = "text", name, id, ...props }) => {
    return (
        <>
            <Label htmlFor={id}>{label}</Label>
            <Input name={name} id={id} type={type} />
        </>
    )
};

FormField.PropTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default FormField;