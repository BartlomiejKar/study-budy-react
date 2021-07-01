import React from 'react';
import { NavigationWrapper } from "./Navigation.styles";
import Navigation from './Navigation';


const MainTemplate = ({ children }) => {

    return (
        <NavigationWrapper>
            <Navigation />
            {children}
        </NavigationWrapper>
    )
}

export default MainTemplate