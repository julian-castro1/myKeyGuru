import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { getKeyInfo } from './AWS';
import IconBase from '../assets/icons/IconBase';
import IconVan from '../assets/icons/IconVan';

function SearchCard({theme}){
    const [displaying, setDisplaying] = useState(false);
    const [info, setInfo] = useState({})
    const [searchValue, setSearchValue] = useState("")


    const fetchInfo = async (SKU) => {
        try {
            const data = await getKeyInfo({SKU:SKU});
            setInfo(data);
            setDisplaying(true);
        } catch (err) {
            if (err && err.message) {
                alert(err.message);
            } else {
                alert("An error occurred while fetching the key information.");
            }
        }
    };


    function searchClicked(){
        fetchInfo(searchValue);
    }

    return (
        <Card theme={theme}>
            <Title> search: </Title>
            <SearchBar theme={theme}>
                <SearchInput theme={theme} placeholder="SKU" value={searchValue} onChange={(e)=> setSearchValue(e.target.value)}/>
                <SearchButton theme={theme} onClick={searchClicked}> <span>search</span> </SearchButton>
            </SearchBar>
            <InventoryContainer disp={displaying}>
                <TotalContainer>
                    <span>total : </span>
                    <InvValue theme={theme}> {displaying ? info['qty'] : '-'} </InvValue>
                </TotalContainer>
                <PlacesContainer>
                    <PlaceContainer>
                        <IconContainer> <IconVan  theme={theme}/> </IconContainer>
                        <span>:</span>
                        <InvValue theme={theme}>{displaying ? info['on_van'] : '-'} </InvValue>
                    </PlaceContainer>
                    <PlaceContainer>
                        <IconContainer> <IconBase  theme={theme}/> </IconContainer>
                        <span>:</span>
                        <InvValue theme={theme}>{displaying ? info['on_base'] : '-'} </InvValue>
                    </PlaceContainer>
                </PlacesContainer>
                <DividerLine  theme={theme}/>
                <LocationContainer theme={theme}>
                    <span>location: </span>
                    <InvValue theme={theme}>{info['location']} </InvValue>
                </LocationContainer>
            </InventoryContainer>
            { displaying &&
                <InventoryOptions>
                <ImageContainer theme={theme}> <ProductImage src={info['img_link']}/> </ImageContainer>
                <ProductOptions>
                    <SKUDisplay theme={theme}> <span>{info['SKU']}</span> </SKUDisplay>
                    <SellButton theme={theme}>Sell</SellButton>
                    <MoreInfoButton theme={theme}>more info</MoreInfoButton>
                    <EditButton theme={theme}>edit</EditButton>
                </ProductOptions>
            </InventoryOptions>
            }
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
    color: ${props => props.theme.text};
`;
const Title = styled.div`
    font-weight: 600;
    margin-bottom: 1rem;
`;
const SearchBar = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-evenly;
    
    gap: 1rem;
`;
const SearchInput = styled.input`
    height: 2.4rem;
    border-radius: .5rem;
    border: 0;
    text-align: center;

    flex: 5;

    background-color: ${props => props.theme.back3};
    color: ${props => props.theme.text};

    &::placeholder {
        font-size: 1rem;
        font-weight: 600;
        color: ${props => props.theme.back1};
    }
`;
const SearchButton = styled.button`
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
const InventoryContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;

    margin-top: 1rem;
    margin-bottom: ${props=> props.disp ? '1rem' : '0'};

    height: 6rem;
`;
const TotalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 600;
    font-size: 1.2rem;

    height: 100%;
    flex: 1;
    gap: .5rem;
`;
const InvValue = styled.div`
    font-weight: 700;
    font-size: 1.8rem;
    color: ${props => props.theme.primary};
`;
const PlacesContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    height: 100%;

    flex: 1;
`;
const PlaceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 1%.4;
    height: 3rem;

    gap: .5rem;
`;
const DividerLine = styled.div`
    width: 3px;
    height: 80%;
    background-color: ${props => props.theme.back3};
    border-radius: 1rem;

    margin-left: 1rem;
    margin-right: 1.8rem;
`;
const LocationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.back3};

    padding: 1rem;
    padding-top: .3rem;
    padding-bottom: .3rem;
    border-radius: .5rem;

    height: 90%;

    font-weight: 700;
    font-size:1.1rem;

    color: ${props => props.theme.back1};

    flex: 1;
`;
const InventoryOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1rem;
`;
const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 17rem;
    width: 11rem;

    flex: 1;

    border: 4px solid ${props => props.theme.back1};
    border-radius: 1rem;
    overflow: hidden;
`;
const ProductImage = styled.img`
    height: 100%;
`;
const ProductOptions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;

    flex: 1;
    gap: .7rem;
`;
const SKUDisplay = styled.div`
    display: flex;
    width: 100%;
    height: 4rem;
    border-radius: .5rem;

    flex: 1.8;
    align-items: center;
    justify-content: center;

    font-weight: 600;
    color: ${props => props.theme.text};
    font-size: 1.4rem;

    background-color: ${props => props.theme.back3};
`;
const SellButton = styled.button`
    flex: 2;
    background-color: ${props => props.theme.primary};
    width: 100%;
    font-size: 2rem;
    font-weight: 700;
`;
const MoreInfoButton = styled.button`
    flex:1;
    width: 100%;
    background-color: ${props => props.theme.back3};

    color: ${props => props.theme.text};
    font-size: 1.1rem;
`;
const EditButton = styled.button`
    flex:1;
    width: 100%;
    background-color: ${props => props.theme.back3};

    color: ${props => props.theme.text};
    font-size: 1.1rem;
`;
const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;

`;

SearchCard.propTypes = {
    theme: PropTypes.dict,
};

export default SearchCard;