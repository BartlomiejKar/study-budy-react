import React, { useState, useEffect } from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import { users as usersData } from "data/users"
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import Form from "components/organisms/Form/Form"

const InitialForm = {
  name: "",
  attendance: "",
  average: "",
}

const Root = () => {

  const [formValues, setFormValues] = useState(InitialForm)
  const [user, setUser] = useState(usersData);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setUser(usersData);
      setIsLoading(false);
    }, 2000);
  }, []);

  const deleteUser = (name) => {
    const newUserList = user.filter((elem) => elem.name !== name);
    setUser(newUserList);
  };


  const handleChangeInput = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }


  const submitAddNewUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    }
    setUser([newUser, ...user]);
    setFormValues(InitialForm);
  }


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Form submitAddNewUser={submitAddNewUser} handleChangeInput={handleChangeInput} formValues={formValues} />
      </Wrapper>
      <Wrapper>
        <UsersList user={user} deleteUser={deleteUser} isLoading={isLoading} />
      </Wrapper>
    </ThemeProvider>
  )
};

export default Root;
