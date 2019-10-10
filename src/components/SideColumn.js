import React from 'react';
import styled from 'styled-components';
import { useStore } from 'store';
import NextBlock from './NextBlock';
import { ReactComponent as PauseIcon } from 'assets/icons/pause.svg';
import { ReactComponent as ReplayIcon } from 'assets/icons/replay.svg';
import GAME_STATES from 'constants/gameStates';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`;

const Controls = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
`;

const Score = styled.div`
    margin-top: 10px;
    display: flex;
    font-size: 30px;
    align-items: center;
    flex-direction: column;
    color: white;
`;

const ControlButton = styled.div`
    display: inline-flex;
    justify-content: center;
    width: 45%;
    background-color: ${({ theme }) => theme.gridCoatingColor};
    border-radius: 6px;
    padding: 4px;
    transition: background-color 200ms;
    cursor: pointer;

    :hover {
        background-color: ${({ theme }) => theme.gridCoatingColorDarken};
    }

    svg {
        fill: white;
        width: 30px;
        height: 30px;
    }
`;

function SideColumn() {
    const { score, togglePauseGame, restartGame, gameState } = useStore();

    return (gameState === GAME_STATES.PLAYING || gameState === GAME_STATES.PAUSED) && (
        <Container>
            <span style={{color:'white'}}>
            <br/>
            If we know with clarity<br/>
            how many people<br/>
            are hired in each<br/>
            department, then we will<br/>
            have better insight into<br/>
            where to place our<br/>
            next group of workers.<br/><br/>
            </span>
            <NextBlock />
            <Controls>
                <ControlButton onClick={togglePauseGame}>
                    <PauseIcon />
                </ControlButton>
                <ControlButton onClick={restartGame}>
                    <ReplayIcon />
                </ControlButton>
            </Controls>
            <Score>Score</Score>
            <Score>{score}</Score>
        </Container>
    );
}

export default SideColumn;
