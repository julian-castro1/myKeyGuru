import styled from 'styled-components';
import PropTypes from 'prop-types';

function AlertsCard({theme}){
    return (
        <Card theme={theme}>
            <span>alerts:</span>
        </Card>
    )
}

const Card = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 5rem;
    border-radius: 1rem;
    border: 0;

    padding: 1rem;

    background-color: ${props => props.theme.back2};
`

AlertsCard.propTypes = {
    theme: PropTypes.dict,
};

export default AlertsCard;