import React from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import ContextProviders from "../../src/Providers/UsersProvider"
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { RootWrapper } from './Root.styles';
import MainTemplate from "../components/molecules/Navigation/MainTemplate"
import Form from "components/organisms/Form/Form"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



const Root = () => {

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ContextProviders>
          <MainTemplate>
            <RootWrapper>
              <Switch>
                <Route path="/" exact>
                  <UsersList />
                </Route>
                <Route path="/add-user" >
                  <Form />
                </Route>
              </Switch>
            </RootWrapper>
          </MainTemplate >
        </ContextProviders>
      </ThemeProvider>
    </Router>
  )
};

export default Root;
