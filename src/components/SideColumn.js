import React from 'react';
import styled from 'styled-components';
import { useStore } from 'store';
import NextBlock from './NextBlock';
import { ReactComponent as PauseIcon } from 'assets/icons/pause.svg';
import { ReactComponent as ReplayIcon } from 'assets/icons/replay.svg';

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
    const { score, togglePauseGame, restartGame } = useStore();

    return (
        <Container>
            <span style={{color:'white'}}>
            <br/>
            If we know with clarity<br/>
            how many people<br/>
            is hired in each<br/>
            department we will<br/>
            have a better insight<br/>
            of were to place our<br/>
            next workers.<br/><br/>
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
