import styled from 'styled-components';

function Input({type, placeholder, color}){
    return <StyledInput type={type} placeholder={placeholder} color={color}></StyledInput>
}

const StyledInput = styled.input`
    background-color: ${props => props.color};
    border: 0;

    height: 2rem;
    border-radius: 10px;

    text-align: center;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder{
        font-weight: 400;
        font-size: .8rem;
    }
`

export default Input;