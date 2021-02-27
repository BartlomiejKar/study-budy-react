import React, { useEffect, useState } from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, StyledTitle, Wrapper } from './UsersList.styles';
import FormField from 'components/molecules/FieldForm/FormField';
import { Button } from 'components/atoms/Button/Button';

const UsersList = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    attendance: "",
    average: "",
  })
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


  const handleChangeInput = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const UserList = user.map((userData) => <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />);
  return (
    <>
      <Wrapper>
        <StyledTitle>Add new student</StyledTitle>
        <FormField label={"Name"} name="name" id="name" value={formValues.name} onChange={handleChangeInput} />
        <FormField label={"Attendance"} name="attendance" id="Attendance" value={formValues.attendance} onChange={handleChangeInput} />
        <FormField label={"Average"} name="average" id="average" value={formValues.average} onChange={handleChangeInput} />
        <Button>Add</Button>
      </Wrapper>
      <Wrapper>
        <StyledList>{isLoading ? <h1>is Loading...</h1> : UserList}</StyledList>
      </Wrapper>
    </>
  );
};

export default UsersList;
