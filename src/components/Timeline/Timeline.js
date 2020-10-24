import React from 'react';
import styled from 'styled-components';


const TimelineWrapper = styled.div`
width: 100vw;
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
width: 100vw;
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




const Timeline = () => {

    const timelineObj = [
        { left: false, date: '2019 - 2020', company: 'EXTINCTION REBELLION BCN', jobPosition: 'Dirección de Arte y Diseño Gráfico' },
        { left: true, date: '2019', company: 'CAZCARRA IMAGE GROUP', jobPosition: 'Diseño Gráfico y de Producto' },
        { left: false, date: '2018', company: 'FUENTES ADVOCATS', jobPosition: 'Diseño Gráfico, Branding' },
    ];

    return (
        <TimelineWrapper>
            {timelineObj.map(item =>
                <Item>
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
