import React, { useState, useEffect } from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import { users as usersData } from "data/users"
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import Navigation from "../components/molecules/Navigation/Navigation"
import Form from "components/organisms/Form/Form"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


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
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navigation />
        <Wrapper>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/add-user">Add users</Link>
          </nav>
        </Wrapper>
        <Switch>
          <Route path="/" exact>
            <Wrapper>
              <UsersList user={user} deleteUser={deleteUser} isLoading={isLoading} />
            </Wrapper>
          </Route>
          <Route path="/add-user" >
            <Wrapper>
              <Form submitAddNewUser={submitAddNewUser} handleChangeInput={handleChangeInput} formValues={formValues} />
            </Wrapper>
          </Route>

        </Switch>
      </ThemeProvider>
    </Router>
  )
};

export default Root;
