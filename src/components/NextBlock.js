import React, {useMemo, useRef} from 'react';
import { useStore } from 'store';
import styled from 'styled-components';
import { math } from 'polished';
import { Coating, Grid, GridCell, InnerGridCell } from './shared.styled';
import GAME_STATES from 'constants/gameStates';

const ContainerCoating = styled(Coating)`
    align-self: flex-start;
    padding: 4px;
`;

const Container = styled.div`
    width: ${props => math(`${props.theme.cellSize} * 4`)};
    background-color: ${({ theme }) => theme.gridBackgroundColor};
    padding: 10px;
    box-sizing: content-box;
    border-radius: 6px;
`;

const GridWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: ${props => math(`${props.theme.cellSize} * 3`)};
    visibility: ${props => (props.shouldShow ? 'visible' : 'hidden')};
`;

const Next = styled.label`
    color: white;
    background-color: ${({ theme }) => theme.gridCoatingColor};
    text-transform: uppercase;
    margin-bottom: 10px;
    text-align: center;
    font-weight: bold;
    padding: 8px;
    border-radius: 6px;
    display: block;
    cursor: pointer;
    transition: background-color 200ms;

    :hover {
        background-color: ${({ theme }) => theme.gridCoatingColorDarken};
    }
`;

const OuterCell = styled(GridCell)`
    border: ${props =>
        props.blockType === null ? 'none' : `1px solid ${props.theme.gridLineColor}`};
    border-radius: ${({ theme }) => theme.blockStyles.borderRadius || 'initial'};
`;

const NextBlockLabel = styled.div`
margin-top: 10px;
margin-bottom: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: white;
`;

const oldLabelArray = [
    'consultant',
    'DMI',
    'Non-DMI',
    'FTE',
    'contractor',
    'IT',
    'Growth',
    'Mandate',
    'Compliance',
]

const labelArray = [
    'Employee',
    'Intern',
    'Vendor (Badge Only)',
    'SOW Worker',
    'Managed Service',
    'Consultant',
    'Contract Staffing',
]

function NextBlock() {
    const { nextBlockQueue, gameState, isHelpOn, toggleHelp } = useStore();
    const { shape, type } = nextBlockQueue[0];

    let cells = [];
    for (let i = 0; i < shape.length; i++) {
        for (let j = 0; j < shape[i].length; j++) {
            const blockType = shape[i][j] === 1 ? type : null;
            cells.push(
                <OuterCell key={`${i}${j}`} blockType={blockType}>
                    <InnerGridCell blockType={blockType} />
                </OuterCell>
            );
        }
    }

    const labelRef = useRef();
    const labelsButCurrent = labelArray.filter(x => x !== labelRef.current);

    const label = useMemo(
        () => labelsButCurrent[Math.floor(Math.random() * labelsButCurrent.length)]
    , [shape]);

    labelRef.current = label

    return (
        <ContainerCoating>
            <Container>
                <Next onClick={e => e.preventDefault() || toggleHelp()}>{isHelpOn ? "Next" : "?"}</Next>
                <br/>
                {
                <GridWrapper shouldShow={gameState !== GAME_STATES.NEW_GAME && isHelpOn}>
                    <Grid height={shape.length} width={shape[0].length}>
                        {cells}
                    </Grid>
                    <NextBlockLabel>{label}</NextBlockLabel>
                </GridWrapper>
                }
            </Container>
        </ContainerCoating>
    );
}

export default NextBlock;
