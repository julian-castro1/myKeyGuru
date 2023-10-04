import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavigationBar from './NavigationBar';


function Home({theme}){

    return (
        <PageContainer color={theme.back3}>
            <NavigationBar current="home" theme={theme}/>
            <MainDisplay>
                <TitleContainer theme={theme}> <span>Home</span> </TitleContainer>
                <Panes>
                    <Pane theme={theme}>
                    </Pane>
                    <Pane theme={theme}>
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

    width: 50%;
    height: 100%;
    background-color: ${props => props.theme.back3}
`;
Home.propTypes = {
    theme: PropTypes.dict,
};


export default Home;