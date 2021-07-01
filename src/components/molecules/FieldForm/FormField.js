import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";
import { Label } from "components/molecules/FieldForm/Label/Label.styles.js";
import { Input } from "components/molecules/FieldForm/Input/Input.styles.js";


const Container = styled.div`
display: flex;
flex-direction:column;
align-items: flex-start;
${Label} {
   margin: 15px 0;
}
`;

const FormField = ({ onChange, label, type = "text", name, id, value, ...props }) => {
    return (
        <Container>
            <Label htmlFor={id}>{label}</Label>
            <Input name={name} id={id} type={type} onChange={onChange} value={value} />
        </Container>
    );
};

FormField.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default FormField;