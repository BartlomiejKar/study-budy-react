import React, { useState, useContext } from 'react';
import { Wrapper, StyledTitle } from "components/organisms/UsersList/UsersList.styles";
import FormField from "components/molecules/FieldForm/FormField/";
import { Button } from "components/atoms/Button/Button.styles.js";
import { UsersProviders } from 'Providers/UsersProvider';

const InitialForm = {
    name: "",
    attendance: "",
    average: "",
}

const Form = () => {
    const { submitAddNewUser } = useContext(UsersProviders)
    const [formValues, setFormValues] = useState(InitialForm)

    const handleChangeInput = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        submitAddNewUser(formValues);
        setFormValues(InitialForm);
    }

    return (
        <Wrapper as="form" onSubmit={handleSubmit}>
            <StyledTitle>Add new student</StyledTitle>
            <FormField label="Name" name="name" id="name" value={formValues.name} onChange={handleChangeInput} />
            <FormField label="Attendance" name="attendance" id="attendance" value={formValues.attendance} onChange={handleChangeInput} />
            <FormField label="Average" name="average" id="average" value={formValues.average} onChange={handleChangeInput} />
            <Button type="submit">Add</Button>
        </Wrapper>
    )

}

export default Form;
