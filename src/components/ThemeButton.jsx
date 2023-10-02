import styled from 'styled-components';

function ThemeButton({theme, changeTheme}){


    return(
        <>
            <ButtonBack color={theme.back4} onClick={changeTheme}>
                <ButtonFront current={theme.current} color={theme.back2} />
            </ButtonBack>
        </>
    )
}

const ButtonBack = styled.div`
    position: fixed;
    top: 1rem;
    right: 1rem;

    background-color: ${props => props.color};

    height: 2rem;
    width: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
`
const ButtonFront = styled.div`
    background-color: ${props => props.color};

    height: 1.5rem;
    width: 1.5rem;
    border-radius: 2rem;

    transition: transform 0.3s ease-in-out;
  transform: translateX(${props => (props.current === 'dark' ? '-1rem' : '1rem')});
`

export default ThemeButton;