import styled from 'styled-components';
import PropTypes from 'prop-types';

function ConfirmPopup({theme, prompt, confirm, cancel}){
    return(
        <PopupContainer theme={theme}>
            <Title>{prompt}</Title>
            <ButtonContainer>
                <CancelButton theme={theme} onClick={cancel}>Cancel</CancelButton>
                <ConfirmButton theme={theme} onClick={confirm}>Confirm</ConfirmButton>
            </ButtonContainer>
        </PopupContainer>
    )
    
}


const PopupContainer = styled.div`
    background-color: ${props => props.theme.back1};
    color: ${props => props.theme.text};

    position: fixed;        
    top: 50%;             
    left: 50%;            
    transform: translate(-50%, -50%);

    width: 30vw;
    height: 20vh;
    
    z-index: 1000; 

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 0 2rem 2rem ${props => props.theme.back3};
`;

const Title = styled.span`
    font-weight: 600;
    font-size: 1.5rem;

    padding-top: .6rem;
    padding-bottom: 1rem;

    text-align: center;
    width: 100%;
`;
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

    gap: 1rem;
`;
const ConfirmButton = styled.button`
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.text};

    border: 0;
    border-radius: .5rem;

    padding: .5rem;

    flex: 1;
    height: 3.5rem;

    font-weight: 700;
    font-size: 1.2rem;
`;
const CancelButton = styled.button`
    background-color: ${props => props.theme.tertiary};
    color: ${props => props.theme.text};

    border: 0;
    border-radius: .5rem;

    padding: .5rem;

    flex: 1;
    height: 3.5rem;

    font-weight: 700;
    font-size: 1.2rem;
`;


ConfirmPopup.propTypes = {
    theme: PropTypes.dict,
    confirm: PropTypes.func,
    prompt: PropTypes.string,
    cancel: PropTypes.func
};

export default ConfirmPopup;