import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import IconRefresh from '../assets/icons/IconRefresh';
import Alert from './Alert';
import { getAlerts } from './AWS';

function AlertsCard({theme}){
    const [alerts, setAlerts] = useState({});

    useEffect(() => {
        // fetch alerts
        // fetchAlerts();

    }, [alerts]);

    async function fetchAlerts(){
        // fetch alerts
        let response = await getAlerts();

        console.log("fetching alerts...", response);

        // setState
        setAlerts(response);
    }

    return (
        <Card theme={theme}>
            <Heading>
                <Title> alerts: </Title>
                <RefreshButton theme={theme} onClick={fetchAlerts}> <IconRefresh color={theme.icon}/> </RefreshButton>
            </Heading>
            <AlertsContainer>
                {Object.values(alerts).map((alert) => {
                    return <Alert key={alert['SKU']+alert['place']} theme={theme} alert={alert}/>
                })}
            </AlertsContainer>
        </Card>
    )
}

const Card = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    border-radius: 1rem;
    border: 0;

    padding: 1rem;

    background-color: ${props => props.theme.back2};
    color: ${props => props.theme.text};
`;
const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1rem;
`;
const Title = styled.div`
    font-weight: 600;
    font-size: 1.5rem;
`;
const RefreshButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 2rem;
    width: 2rem;

    background-color: ${props => props.theme.back3};
    padding: .2rem;

    margin: 0;
    padding: 0;

    &:hover {
        cursor: pointer;
    }
`;
const AlertsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .6rem;

    width: 100%;
    height: 100%;
    padding: .2rem;

    overflow-y: scroll;
`;
AlertsCard.propTypes = {
    theme: PropTypes.dict,
};

export default AlertsCard;