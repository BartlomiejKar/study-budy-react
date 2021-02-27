import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";
import { Label } from "components/atoms/Label/Label";
import { Input } from "components/atoms/Input/Input";


const Container = styled.div`
display: flex;
flex-direction:column;
align-items: flex-start;
${Label} {
   margin: 15px 0;
}
`;

const FormField = ({ label, type = "text", name, id, ...props }) => {
    return (
        <Container>
            <Label htmlFor={id}>{label}</Label>
            <Input name={name} id={id} type={type} />
        </Container>
    );
};

FormField.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default FormField;