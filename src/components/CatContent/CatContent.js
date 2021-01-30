import React from 'react';
import styled from 'styled-components';



const ContentnWrapper = styled.div`
width: 90%;
margin-left: 5%;
`;

const Text = styled.p`
margin-bottom: 2rem;
`;

const Image = styled.img`
object-fit: cover;
width: 100%;
`;


const CatContent = ({ obj }) => {
console.log("🚀 ~ file: CatContent.js ~ line 22 ~ CatContent ~ obj", obj)
const obj_exists = obj && obj[0];

    return (
        <ContentnWrapper>
            <Text>{obj_exists && obj[0].text1 && obj[0].text1}</Text>
            <Text>{obj_exists && obj[0].text2 && obj[0].text2}</Text>
            <Text>{obj_exists && obj[0].text3 && obj[0].text3}</Text>
            <Text>{obj_exists && obj[0].text4 && obj[0].text4}</Text>
            <Text>{obj_exists && obj[0].text5 && obj[0].text5}</Text>
            <Text>{obj_exists && obj[0].text6 && obj[0].text6}</Text>
            <Text>{obj_exists && obj[0].text7 && obj[0].text7}</Text>
            <Text>{obj_exists && obj[0].text8 && obj[0].text8}</Text>
            <Image src={obj_exists && obj[0].image && obj[0].image} />
            <Text>{obj_exists && obj[0].text9 && obj[0].text9}</Text>
            <Text>{obj_exists && obj[0].text10 && obj[0].text10}</Text>
        </ContentnWrapper>
    )
}

export default CatContent;
