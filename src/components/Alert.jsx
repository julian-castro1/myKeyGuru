import styled from 'styled-components';
import PropTypes from 'prop-types';
import IconVan from '../assets/icons/IconVan';
import IconBase from '../assets/icons/IconBase';


// alert = {SKU type remaining parent_brand product_link}
function InfoLine({alert, theme}){
    
    const viewUHS = () => {
        window.open(alert.product_link, '_blank');
    }

    let locElem = {
        'on_van': <IconVan percent='100%' color={theme.icon}/>,
        'on_base': <IconBase percent='100%' color={theme.icon}/>,
    }

    return(
        <InfoContainer theme={theme}>
            <LeftMost> 
                <AlertDot theme={theme} type={alert.type}/>
                <LocationDisp theme={theme}> {locElem[alert.place]} </LocationDisp>
            </LeftMost>
            <SKUDisp theme={theme}> {alert.SKU} </SKUDisp>
            <RightSide>
                <ContentsContainer theme={theme}>
                    <BrandDisp theme={theme}> {alert.parent_brand} </BrandDisp>
                    <RemDisp theme={theme}>
                        <AmountLeft theme={theme} type={alert.type}> {alert.remaining} </AmountLeft>
                        <LeftText theme={theme}>left</LeftText>
                    </RemDisp>
                </ContentsContainer>
                <ReorderButton onClick={viewUHS} theme={theme}>
                    <ReorderText theme={theme}>order</ReorderText>
                </ReorderButton>
            </RightSide>
        </InfoContainer>
    )
    
}


const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 5rem;
    padding: .5rem;

    border-radius: .6rem;

    background-color: ${props => props.theme.back1};
`;
const LeftMost = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-between;
    width: 2rem;

    height: 100%;
`;
const AlertDot = styled.div`
    width: .8rem;
    height: .8rem;
    border-radius: 50%;


    background-color: ${props => props.type === 'minimum' ? props.theme.red : props.theme.yellow};
`;
const LocationDisp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    /* margin-left: 1.5rem; */

    /* background-color: ${props => props.theme.back4}; */

    width:100%;
    height: 1.5rem;
`;
const SKUDisp = styled.div`
    font-weight: 400;
    font-size: 1.2rem;
    color: ${props => props.theme.text};
`;
const ContentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    /* width: 10rem; */
    padding: .3rem;
    padding-left: .8rem;
    padding-right: .8rem;

    border-radius: .5rem;

    background-color: ${props => props.theme.back3};
`;
const RightSide = styled.div`
    display: flex;
    gap: .5rem;
`
const BrandDisp = styled.div`
    font-weight: 700;
    font-size: 1rem;
    color: ${props => props.theme.text};
`;
const RemDisp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    width: 4rem;
`;
const AmountLeft = styled.div`
    font-weight: 700;
    font-size: 1.3rem;
    color: ${props => props.type === 'minimum' ? props.theme.red : props.theme.yellow};
`;
const LeftText = styled.div`
    font-weight: 300;
    color: ${props => props.theme.text};
`;
const ReorderButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: .5rem;

    padding: .5rem;
    margin: 0;

    background-color: ${props => props.theme.back4};
`;
const ReorderText = styled.span`
    writing-mode: vertical-lr;
    text-orientation: sideways;

    font-weight: 600;
    font-size: 1rem;
    color: ${props => props.theme.icon};
`


InfoLine.propTypes = {
    theme: PropTypes.dict,
    name: PropTypes.string,
    value: PropTypes.string,
};

export default InfoLine;