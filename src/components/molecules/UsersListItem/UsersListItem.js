import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, NameUser, AttendanceUser, AverageUser, DivContainer } from './UsersListItem.styles';

const UsersListItem = ({ deleteUser, userData: { average, name, attendance = '0%' } }) => (

  <Wrapper>
    <AverageUser average={average}>{average}</AverageUser>
    <DivContainer>
      <NameUser>{name}</NameUser>
      <AttendanceUser>{attendance}</AttendanceUser>
    </DivContainer>
    <DeleteButton onClick={() => deleteUser(name)} />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
