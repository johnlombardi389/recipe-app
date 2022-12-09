import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Style
import styled from "styled-components";
// Icons
import { FaSearch } from "react-icons/fa";

function Search() {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <StyledSection>
      <StyledForm onSubmit={submitHandler}>
        <FaSearch />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </StyledForm>
      <h1>Hello</h1>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  position: relative;
  width: 75%;
  padding: 5rem 0rem;
  input {
    width: 100%;
    border: none;
    font-size: 1.5rem;
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
  }
  svg {
    width: 1.2rem;
    height: 1.2rem;
    position: absolute;
    top: 50%;
    left: 2.5%;
    transform: translate(-100%, -50%);
  }
`;

export default Search;
