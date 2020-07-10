import React, { useState } from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 32px;
  height: 32px;
`;

const InputForm = styled.form`
  max-width: 460px;
  display: flex;
  margin: 0 auto 32px;
`;

const Button = styled.button`
  outline: none;
  border: none;
  background-color: #d7dbdf;
  padding: 0px 15px;
  border-radius: 0 0.35em 0.35em 0;
  cursor: pointer;
`;

const Input = styled.input`
  font-size: 1em;
  width: 100%;
  background-color: #edeff0;
  padding: 10px 15px;
  border: 3px solid #d7dbdf;
  border-right: none;
  border-radius: 0.35em 0 0 0.35em;
  outline: none;
`;

const Form = ( {history, handleSubmit} ) => {
    const [inputSearch, setInputSearch] = useState("");

    const handleOnChange = (e) => {
        setInputSearch(e.target.value);
    };
    return (
        <InputForm onSubmit={e => handleSubmit(e, history, inputSearch)}>
            <Input
                type="text"
                name="search"
                placeholder="Search for sceneries..."
                onChange={handleOnChange}
                value={inputSearch}
            />
            <Button
                type="submit"
                disbaled={!inputSearch.trim()}
            > 
             <Img src="/images/search.svg" alt="search"></Img>

            </Button>

        </InputForm>

    );
}

export default Form;