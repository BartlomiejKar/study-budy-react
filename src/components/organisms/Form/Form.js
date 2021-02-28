import React from 'react';
import { Wrapper, StyledTitle } from "components/organisms/UsersList/UsersList.styles";
import FormField from "components/molecules/FieldForm/FormField/";
import { Button } from "components/atoms/Button/Button";

const Form = ({ submitAddNewUser, handleChangeInput, formValues }) => {
    return (
        <Wrapper as="form" onSubmit={submitAddNewUser}>
            <StyledTitle>Add new student</StyledTitle>
            <FormField label="Name" name="name" id="name" value={formValues.name} onChange={handleChangeInput} />
            <FormField label="Attendance" name="attendance" id="attendance" value={formValues.attendance} onChange={handleChangeInput} />
            <FormField label="Average" name="average" id="average" value={formValues.average} onChange={handleChangeInput} />
            <Button type="submit">Add</Button>
        </Wrapper>
    )

}

export default Form;
