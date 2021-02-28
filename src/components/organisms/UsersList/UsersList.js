import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, StyledTitle, Wrapper } from './UsersList.styles';



const UsersList = ({ user, deleteUser, isLoading }) => {
  const ListOfUsers = user.map((userData) => {
    return (
      <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
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
