import React, { useContext } from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, StyledTitle, Wrapper } from './UsersList.styles';
import { UsersProviders } from 'Providers/UsersProvider';



const UsersList = () => {
  const { users, isLoading } = useContext(UsersProviders)

  const ListOfUsers = users.map((userData) => {
    return (
      <UsersListItem key={userData.name} userData={userData} />
    )
  });

  return (
    <Wrapper>
      <StyledTitle>Students List</StyledTitle>
      <StyledList>{isLoading ? <h1>is Loading...</h1> : ListOfUsers}</StyledList>
    </Wrapper>
  );
};

export default UsersList;
