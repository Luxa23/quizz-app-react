import styled from 'styled-components';

const StyledWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 1rem;

  & > li {
    list-style-type: none;
    background-color: rgb(158 104 157);
    border-radius: 3px;
    padding: 0.3rem;
    font-size: 0.8rem;
  }
`;

export default StyledWrapper;
