import React from 'react';
import styled from 'styled-components';


const TimelineWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 1rem;
`;

const Item = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 100%;
`;

const ItemLeftPart = styled.div`
display: flex;
flex-direction:column;
align-items: flex-end;
text-align: right;
width: calc(50% - 1px);
padding-right: 0.5rem;
`;

const ItemCenterPart = styled.div`
width: 2px;
background-color: ${props => props.theme.colors.blue1};
position: relative;
`;

const ItemRightPart = styled.div`
display: flex;
flex-direction:column;
align-items: flex-start;
width: calc(50% - 1px);
padding-left: 0.3125rem;
`;

const Date = styled.p`
font-size: ${props => props.theme.fontSizes.medium};
font-weight: 700;
letter-spacing: 3px;
color: ${props => props.theme.colors.text1};
`;

const Company = styled.p`
font-size: ${props => props.theme.fontSizes.medium};
font-weight: 500;
color: ${props => props.theme.colors.text1};
`;

const JobPosition = styled.p`
font-size: ${props => props.theme.fontSizes.medium};
font-weight: 500;
color: ${props => props.theme.colors.text1};
`;

const Bullet = styled.div`
width: 6px;
height: 6px;
border-radius: 100%;
background-color: ${props => props.theme.colors.blue2};
position: absolute;
left: -2px;
top: 0.315rem;

`;




const Timeline = ({obj}) => {

    const timelineObj = obj;

    return (
        <TimelineWrapper>
            {timelineObj && timelineObj.map(item =>
                <Item key={item.id}>
                    <ItemLeftPart>
                        {item.left && <Date>{item.date}</Date>}
                        {item.left && <Company>{item.company}</Company>}
                        {item.left && <JobPosition>{item.jobPosition}</JobPosition>}
                    </ItemLeftPart>
                    <ItemCenterPart> <Bullet /></ItemCenterPart>
                    <ItemRightPart>
                        {!item.left && <Date>{item.date}</Date>}
                        {!item.left && <Company>{item.company}</Company>}
                        {!item.left && <JobPosition>{item.jobPosition}</JobPosition>}
                    </ItemRightPart>
                </Item>
            )}
        </TimelineWrapper>
    )
}

export default Timeline;
