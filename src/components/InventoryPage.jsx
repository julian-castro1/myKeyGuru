import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavigationBar from './NavigationBar'


function InventoryPage({theme}){
    
    return (
        <PageContainer color={theme.back3}>
            <NavigationBar current="inv" theme={theme}/>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    align-items: center;


    width: 100vw;
    height: 100vh;

    background-color: ${props => props.color}
`;

InventoryPage.propTypes = {
    theme: PropTypes.dict,
};


export default InventoryPage;