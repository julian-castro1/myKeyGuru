import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavigationBar from './NavigationBar';


function Home({theme}){

    return (
        <PageContainer color={theme.back3}>
            <NavigationBar current="home" theme={theme}/>
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

Home.propTypes = {
    theme: PropTypes.dict,
};


export default Home;