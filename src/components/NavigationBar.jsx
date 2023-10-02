import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import IconHome from '../assets/icons/IconHome'
import IconInv from '../assets/icons/IconInv'
import IconTran from '../assets/icons/IconTran'
import IconFin from '../assets/icons/IconFin'
import IconSearch from '../assets/icons/IconSearch'
import IconNav from '../assets/icons/IconNav'

function NavigationBar({theme, current}){
    const navigate = useNavigate();
    let cur = {home: false, inv:false, tran:false, fin:false, seach:false, nav:false};
    const enabled = {home: true, inv:true, tran:false, fin:false, seach:false, nav:false};
    cur[current] = true;

    return (
        <>
            <NavBarContainer color={theme.back2}>
                <IconContainer sColor={theme.primary} home={true} sel={cur.home} onClick={() => enabled.home && navigate('/')}> <IconHome sel={cur.home}/> </IconContainer>
                <IconContainer sColor={theme.primary} sel={cur.inv} onClick={() => enabled.inv && navigate('/inventory')}> <IconInv sel={cur.inv}/> </IconContainer>
                <IconContainer sColor={theme.primary} sel={cur.tran} onClick={() => enabled.tran && navigate('/transactions')}> <IconTran sel={cur.tran}/> </IconContainer>
                <IconContainer sColor={theme.primary} sel={cur.fin} onClick={() => enabled.fin && navigate('/financial')}> <IconFin sel={cur.fin}/> </IconContainer>
                <IconContainer sColor={theme.primary} sel={cur.search} onClick={() => enabled.search && navigate('/search')}> <IconSearch sel={cur.search}/> </IconContainer>
                <IconContainer sColor={theme.primary} sel={cur.nav} onClick={() => enabled.nav && navigate('/navigation')}> <IconNav sel={cur.nav}/> </IconContainer>
            </NavBarContainer>
        </>
    )
}

const NavBarContainer = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;

    width: 5.5rem;
    height: 100vh;
    background-color: ${props => props.color}
`;
const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: ${props=>props.home ? '4rem' : '.2rem'};
    margin-bottom: ${props=>props.home ? '4rem' : '.2rem'};

    height: 4rem;
    width: 4rem;

    background-color: ${props=> props.sel && props.sColor};
    border-radius: 1rem;
`


NavigationBar.propTypes = {
    theme: PropTypes.dict,
    current: PropTypes.string,
};

export default NavigationBar;