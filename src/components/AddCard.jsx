import styled from 'styled-components';
import PropTypes from 'prop-types';
import IconBase from '../assets/icons/IconBase';
import IconVan from '../assets/icons/IconVan';
import { useState } from 'react';

function AddCard({theme, value, onChange, addKey}){
    const [addTo, setAddTo] = useState('van');


    return (
        <Card theme={theme}>
            <Title> add key: </Title>
            <AddToContainer>
                <Subtitle>adding to...</Subtitle>
                <Selectors>
                    <IconContainer onClick={() => setAddTo('van')} theme={theme} cur='van' sel={addTo}> <IconVan  color={addTo === 'van' ? theme.contrastPrimary : theme.icon}/> </IconContainer>
                    <IconContainer onClick={() => setAddTo('base')} theme={theme} cur='base' sel={addTo}> <IconBase  color={addTo === 'base' ? theme.contrastPrimary : theme.icon}/> </IconContainer>
                </Selectors>
            </AddToContainer>
            <AddBar theme={theme}>
                <AddInput theme={theme} placeholder="SKU" value={value} onChange={(e)=> onChange(e.target.value)}/>
                <AddButton theme={theme} onClick={()=> addKey(addTo)}> <span>add</span> </AddButton>
            </AddBar>
        </Card>
    )
}

const Card = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    border-radius: 1rem;
    border: 0;

    padding: 1rem;

    background-color: ${props => props.theme.back2};
`
const AddToContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 4rem;
`
const Title = styled.div`
    font-weight: 600;
    margin-bottom: 1rem;
`;
const AddBar = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-evenly;
    
    gap: 1rem;
`;
const AddInput = styled.input`
    height: 2.4rem;
    border-radius: .5rem;
    border: 0;
    text-align: center;

    flex: 5;

    font-size: 1rem;
    font-weight: 600;

    background-color: ${props => props.theme.back3};
    color: ${props => props.theme.text};

    &::placeholder {
        font-size: 1rem;
        font-weight: 600;
        color: ${props => props.theme.back1};
    }
`;
const AddButton = styled.button`
    height: 2.4rem;
    border-radius: .5rem;
    border: 0;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;

    display: flex;
    align-items: center;
    justify-content: center;
    
    flex: 1;

    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.primaryText};
`;
const Subtitle = styled.span`
    font-weight: 300;
    margin-right: 1rem;
    padding-left: 1rem;

    color: ${props => props.theme.text};
`
const Selectors = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;

    height: 100%;
    width: 70%;

    gap: 1rem;
`;
const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 60%;
    width: 40%;

    border-radius: .5rem;

    background-color: ${props => props.sel === props.cur ? props.theme.primary : props.theme.back3};
`;

AddCard.propTypes = {
    theme: PropTypes.dict,
    value: PropTypes.string,
    onChange: PropTypes.func,
    addKey: PropTypes.func,
};

export default AddCard;