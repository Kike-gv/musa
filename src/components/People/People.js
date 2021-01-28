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



const People = ({ click }) => {


    const imgBG = [require('../../icons/lila1.png'), require('../../icons/turquesa1.png'), require('../../icons/verd1.png'), require('../../icons/groc1.png'), require('../../icons/rosa1.png')];
    const peopleImg = 'https://static3.abc.es/media/cultura/2018/08/07/rosalia-k98G--620x349@abc.jpg';

    const peopleObj = [{ bg: imgBG[1], image: peopleImg }, { bg: imgBG[3], image: peopleImg }]

    return (
        <PeopleWrapper>
            {peopleObj.map(item =>
                <LogoWrapper onClick={() => click(1)}>
                    <BgImage src={item.bg} />
                    <PeopleImage src={item.image} />
                </LogoWrapper>
            )}

        </PeopleWrapper>
    )
}

export default People;
