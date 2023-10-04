import styled from 'styled-components';
import PropTypes from 'prop-types';
import InfoLine from './InfoLine';

function MoreInfoPopup({theme, info, close}){
    return(
        <PopupContainer theme={theme}>
            <HeaderContainer>
                <Title>{info.SKU}</Title>
                <CloseButton theme={theme} onClick={close}>X</CloseButton>
            </HeaderContainer>
            <InfoContainer theme={theme}>
                {Object.keys(info).map((key, index) => {
                    return <InfoLine key={key} name={key} value={String(info[key])} theme={theme}/>
                })}
            </InfoContainer>
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

    width: 40vw;
    height: 70vh;
    
    z-index: 1000; 

    display: flex;
    flex-direction: column;

    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 0 2rem 2rem ${props => props.theme.back3};
`;
const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    padding-bottom: 1rem;
`
const CloseButton = styled.button`
    background-color: ${props => props.theme.back2};
    color: ${props => props.theme.text};

    margin-left: auto;
`;
const Title = styled.span`
    font-weight: 700;
    font-size: 1.5rem;
    padding-left: 1rem;
`;
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    overflow-y: scroll;
    height: 100%;

    gap: .2rem;
`;


MoreInfoPopup.propTypes = {
    theme: PropTypes.dict,
    info: PropTypes.dict,
    close: PropTypes.func,
};

export default MoreInfoPopup;