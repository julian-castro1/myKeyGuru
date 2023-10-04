import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavigationBar from './NavigationBar'
import SearchCard from './SearchCard';
import AddCard from './AddCard';
import AlertsCard from './AlertsCard';


function InventoryPage({theme}){
    
    return (
        <PageContainer color={theme.back3}>
            <NavigationBar current="inv" theme={theme}/>
            <MainDisplay>
                <TitleContainer theme={theme}> <span>Inventory</span> </TitleContainer>
                <Panes>
                    <Pane theme={theme}>
                        <SearchCard theme={theme}/>
                        <AddCard theme={theme}/>
                    </Pane>
                    <Pane theme={theme}>
                        <AlertsCard theme={theme}/>
                    </Pane>
                </Panes>
            </MainDisplay>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    align-items: center;


    width: 100vw;
    height: 100%;

    background-color: ${props => props.color}
`;
const MainDisplay = styled.div`
    display: flex;
    flex-direction: column;

    height: 100%;

    flex: 1;
`;
const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    height: 5rem;
    padding-left: 2rem;

    font-size: 2.3rem;
    font-weight: 800;

    color: ${props => props.theme.text};
`;
const Panes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin: 1rem;
    margin-top: 0rem;

    flex: 1;
    gap: 1rem;
`;
const Pane = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1rem;

    width: 50%;
    height: 100%;
    background-color: ${props => props.theme.back3}
`;



InventoryPage.propTypes = {
    theme: PropTypes.dict,
};


export default InventoryPage;