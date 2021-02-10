import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import { Wrapper, NameUser, AttendanceUser, AverageUser } from './UsersListItem.styles';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <AverageUser average={average}>{average}</AverageUser>
    <div>
      <NameUser>{name}</NameUser>
      <AttendanceUser>{attendance}</AttendanceUser>
    </div>
    <Button />
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
