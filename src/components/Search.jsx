import { useState } from "react";
// Style
import styled from "styled-components";
// Icons
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <StyledForm>
      <input type="text" />
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin: 0 20rem;
  position: relative;
  width: 100%;
`;

export default Search;
