import React from 'react';
import styled from 'styled-components';

import Gradient from '../Gradient';
import RRSS from '../RRSS';


const ContactUsWrapper = styled.div`
    display: flex;
    justify-content:center;
    width: 100vw;
`;
const ContactUsComponent = styled.div`
    height: 50rem;
    width: 75vw;
    max-width: 65rem;
`;
const GridPart = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`;
const Part = styled.div`
width: 50%;
padding: 1rem;
`;
const Title = styled.p``;
const Text = styled.p``;

const ContactUs = () => {

    const contactUsInfo = {
        title: 'Contacto',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget commodo quam. Sed ex eros, ornare id arcu a, gravida efficitur ante. Proin ornare id magna et elementum. Sed non lacinia dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin vestibulum massa eu enim semper feugiat. Nullam accumsan est in orci pellentesque, sit amet pellentesque ex ultrices.',

    };

    return (
        <ContactUsWrapper>
            <ContactUsComponent>
                <Gradient direction={'360deg'}>
                    <GridPart>
                        <Part>
                            <Title>{contactUsInfo.title}</Title>
                            <Text>{contactUsInfo.text}</Text>
                            <RRSS />
                        </Part>
                        <Part></Part>
                    </GridPart>
                </Gradient>
            </ContactUsComponent>
        </ContactUsWrapper>
    )
}

export default ContactUs;
