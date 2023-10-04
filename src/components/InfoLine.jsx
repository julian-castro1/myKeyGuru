import styled from 'styled-components';
import PropTypes from 'prop-types';

function InfoLine({name, value, theme}){
    function cleanString(str) {
        let words = str.replace(/_/g, ' ').split(' ');
        words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
        return words.join(' ');
    }
    const viewUHS = () => {
        isLink && window.open(value, '_blank');
    }

    const isLink = value.includes('.com');

    return(
        <InfoContainer theme={theme}>
            <InfoKey theme={theme}>{cleanString(name)}</InfoKey>
            <InfoValue theme={theme} onClick={viewUHS} link={isLink}> {isLink ? cleanString(name) : value} </InfoValue>
        </InfoContainer>
    )
    
}


const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 3rem;
    padding: 0.5rem 1rem;

    border-radius: .6rem;

    background-color: ${props => props.theme.back2};
`;
const InfoKey = styled.span`
    font-weight: 600;
    color: ${props => props.theme.text};
`;
const InfoValue = styled.span`
    font-weight: 400;
    color: ${props => props.link ? '#0851bf' : props.theme.text};

    max-width: 50%;
    overflow-y: scroll;
    overflow-x: scroll;


`;



InfoLine.propTypes = {
    theme: PropTypes.dict,
    name: PropTypes.string,
    value: PropTypes.string,
};

export default InfoLine;