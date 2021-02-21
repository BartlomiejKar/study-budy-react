import React, { useEffect, useState } from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, Wrapper } from './UsersList.styles';

const UsersList = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setUser(users);
      setLoading(false);
    }, 2000);
  }, []);

  const deleteUser = (name) => {
    const newUserList = user.filter((elem) => elem.name !== name);
    setUser(newUserList);
  };

  const UserList = user.map((userData) => <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />);
  return (
    <Wrapper>
      <StyledList>{isLoading ? <h1>is Loading...</h1> : UserList}</StyledList>
    </Wrapper>
  );
};

export default UsersList;
