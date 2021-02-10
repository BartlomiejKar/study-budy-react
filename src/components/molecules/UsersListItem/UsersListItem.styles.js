import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;

export const NameUser = styled.p`
  font-weight: bold;
  font-style: normal;
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: 112.7%;
  letter-spacing: -0.02em;
  color: #737c8e;
  left: 573px;
  height: 19px;
`;

export const AttendanceUser = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: normal;
  font-style: normal;
  color: #737c8e;
  left: 573px;
  height: 19px;
  line-height: 112.7%;
  letter-spacing: -0.02em;
`;

export const AverageUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  left: 515px;
  border-radius: 50px;
  background-color: ${({ theme, average }) => {
    if (average > 4) return theme.colors.success;
    if (average > 3) return theme.colors.warning;
    if (average > 2) return theme.colors.error;
    if (average < 2) return theme.colors.lightGrey;
  }};
`;
