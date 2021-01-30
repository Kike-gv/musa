import React from 'react';
import styled from 'styled-components';


const logoSize = 17;
const peopleSizeHeight = logoSize - 7;
const peopleSizeWidth = peopleSizeHeight - 1;


const PeopleWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`;

const PersonWrapper = styled.div`
width: ${logoSize}rem;
`;

const LogoWrapper = styled.div`
width: ${logoSize}rem;
height: ${logoSize}rem;
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`;

const BgImage = styled.img`
position: absolute;
top: 0;
left: 0;
width: ${logoSize}rem;
height: ${logoSize}rem;
`;

const PeopleImage = styled.img`
position: relative;
top: 0;
left: 0;
width: ${peopleSizeWidth}rem;
height: ${peopleSizeHeight}rem;
object-fit: cover;
`;

const Name = styled.p`
padding: 0rem 4rem;
font-size: ${props => props.theme.fontSizes.medium};
font-weight: 700;
letter-spacing: 3px;
color: ${props => props.theme.colors.text1};
margin-top: -2rem;
`;

const Job = styled.p`
padding: 0rem 4rem;
font-size: ${props => props.theme.fontSizes.medium};
color: ${props => props.theme.colors.text1};
`;

const Quote = styled.p`
padding: 0rem 4rem;
font-size: ${props => props.theme.fontSizes.small};
color: ${props => props.color};
`;

const People = ({ obj }) => {

    const peopleObj = obj;


    return (
        <PeopleWrapper>
            {peopleObj && peopleObj.map(item =>
                <PersonWrapper>
                    <LogoWrapper>
                        <BgImage src={item.bg} />
                        <PeopleImage src={item.image} />
                    </LogoWrapper>
                    <Name>{item.name}</Name>
                    <Job>{item.job}</Job>
                    <Quote color={item.color}>{item.quote}</Quote>
                </PersonWrapper>
            )}
        </PeopleWrapper>
    )
}

export default People;
