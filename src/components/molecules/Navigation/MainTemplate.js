import React from 'react';
import { NavigationWrapper, UserListWrapper } from "./Navigation.styles";
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import NewsSection from './NewsSection';


const MainTemplate = ({ children }) => {

    return (
        <NavigationWrapper>
            <Navigation />
            <UserListWrapper>
                {children}
            </UserListWrapper>
            <SearchBar />
            <NewsSection />
        </NavigationWrapper>
    )
}

export default MainTemplate