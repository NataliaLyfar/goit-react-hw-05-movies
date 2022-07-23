import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import styled from "styled-components";
import { GoSearch } from "react-icons/go";


const SearchForm = styled.form`
margin: 0 auto ${p => p.theme.space[3]}px;
display: flex;
align-items: center;
width: 100%;
max-width: 300px;
border-bottom: 1 px solid ${p => p.theme.colors.accent};
overflow: hidden;
`;
const SearchInput = styled.input`
display: inline-block;
width: 100%;
font: inherit;
font-size: ${p => p.theme.fontSizes.m};
border: none;
border-bottom: 2px solid ${p => p.theme.colors.accent};
color: ${p => p.theme.colors.white};
background-color: transparent;
outline: none;
padding-left: ${p => p.theme.space[1]}px;
padding-right: ${p => p.theme.space[0]}px;
  &::placeholder {
    font: inherit;
    font-size: ${p => p.theme.fontSizes.s};
    color: ${p => p.theme.colors.white};
  };
`;
const SearchButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
border: 0;
background: transparent;
transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
cursor: pointer;
outline: none;
  svg{
    width: 20px;
    height: 20px;
    color: ${p => p.theme.colors.white};
  };
`;


export const SearchBar = ({ onSearch }) => {
const {register, handleSubmit, resetField} = useForm();

const onSubmit = data => {
  onSearch(data.query);
  resetField('query');
};

return (
    <SearchForm onSubmit={handleSubmit(onSubmit)} >
        <SearchInput
        type="text"
        placeholder="Search for movie"
        {...register("query")}
        autoComplete="off"
        autoFocus
        />
        <SearchButton type="submit"><GoSearch /></SearchButton>
    </SearchForm>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};