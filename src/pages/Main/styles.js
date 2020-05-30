import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: ${(props) => (props.error ? 'red' : 'rgb(38, 37, 36)')};
  font-family: Arial, Helvetica, sans-serif;

  small {
    font-size: 14px;
    color: darkblue;
  }
`;
