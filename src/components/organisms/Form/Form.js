import React, { useContext } from 'react';
import { Wrapper, StyledTitle } from "components/organisms/UsersList/UsersList.styles";
import FormField from "components/molecules/FieldForm/FormField/";
import { Button } from "components/atoms/Button/Button.styles.js";
import { UsersProviders } from 'Providers/UsersProvider';
import useReducerForm from './useReducerForm';

const InitialForm = {
    name: "",
    attendance: "",
    average: "",
}

const Form = () => {
    const { submitAddNewUser } = useContext(UsersProviders)
    const { handleInputChange, clearValue, formValue } = useReducerForm(InitialForm)



    const handleSubmit = (e) => {
        e.preventDefault()
        submitAddNewUser(formValue);
        clearValue()
    }

    return (
        <Wrapper as="form" onSubmit={handleSubmit}>
            <StyledTitle>Add new student</StyledTitle>
            <FormField label="Name" name="name" id="name" value={formValue.name} onChange={handleInputChange} />
            <FormField label="Attendance" name="attendance" id="attendance" value={formValue.attendance} onChange={handleInputChange} />
            <FormField label="Average" name="average" id="average" value={formValue.average} onChange={handleInputChange} />
            <Button type="submit">Add</Button>
        </Wrapper>
    )

}

export default Form;
