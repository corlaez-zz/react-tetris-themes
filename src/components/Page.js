import React from 'react';
import Game from './Game';
import styled from 'styled-components';
import Title from './Title';
import { fadeOut, GRID_ANIMATION_DELAY } from 'style/animations';

const StyledPage = styled.div`
    min-height: 100vh;
    ${({ theme }) => theme.pageBackgroundCss};
`;

const GameArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 0 20px;
`;

const Header = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;
    height: 0px;
    color: white;
`;

const RandomizeButton = styled.span`
    position: fixed;
    margin-top: 70px;
    margin-right: 20px;

    color: white;
    background-color: ${({ theme }) => theme.gridCoatingColor};
    border: 2px solid white;
    border-radius: 6px;
    padding: 10px;
    font-size: 12px;
    cursor: pointer;
    transition: all 200ms;
    opacity: 0;

    animation: ${fadeOut} 200ms;
    animation-direction: reverse;
    animation-fill-mode: forwards;
    animation-delay: ${GRID_ANIMATION_DELAY}ms;

    :hover {
        color: #ccd1d1;
        border-color: #ccd1d1;
        transform: translateY(-2px);
        background-color: ${({ theme }) => theme.gridCoatingColorDarken};
    }
`;

function Page() {
    return (
        <StyledPage>
            <Header>
                <Title />
            </Header>
            <GameArea>
                <Game />
            </GameArea>
        </StyledPage>
    );
}

export default Page;
