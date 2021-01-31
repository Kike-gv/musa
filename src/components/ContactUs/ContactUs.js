import React, { useState } from 'react';
import styled from 'styled-components';

import Gradient from '../Gradient';
import RRSS from '../RRSS';


const ContactUsWrapper = styled.div`
    display: flex;
    justify-content:center;
    width: 100%;
`;

const ContactUsComponent = styled.div`
    height: 50rem;
    width: 75vw;
    max-width: 45rem;
`;
const GridPart = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
@media (max-width: 650px) {
    display: block;
  }
`;

const Part = styled.div`
width: 50%;
padding: 1rem;
@media (max-width: 650px) {
    width: 100%;
  }
`;
const PartColumn = styled.div`
width: 50%;
padding: 1rem;
display: flex;
flex-direction: column;
justify-content: space-between;
@media (max-width: 650px) {
    width: 100%;
  }
`;
const PartInner = styled.div``;

const RRSSWrapper = styled.div`
padding: 1rem 0;
`;

const Title = styled.p`
font-size: ${props => props.theme.fontSizes.titleExtraSmall};
font-weight: bold;
color: ${props => props.theme.colors.textInverse2};
margin-bottom: 1rem;
`;

const Text = styled.p`
font-size: ${props => props.theme.fontSizes.medium};
line-height: 1.5;
color: ${props => props.theme.colors.text1};
margin-bottom: 1rem;
`;

const FlexLineBetween = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 1rem;
`;

const InputHalf = styled.input`
width: 49%;
padding: 1rem;
border: none;
`;

const InputFull = styled.input`
width: 100%;
margin-bottom: 1rem;
padding: 1rem;
border: none;
`;

const Textarea = styled.textarea`
width: 100%;
margin-bottom: 1rem;
padding: 1rem;
border: none;
`;

const SendButton = styled.button`
width: 100%;
padding: 1rem;
border: none;
background-color: ${props => props.theme.colors.black};
color: ${props => props.theme.colors.white};
opacity: 0.9;
letter-spacing: 3px;
font-size: ${props => props.theme.fontSizes.large};
font-weight: bold;
&:hover {
    opacity: 0.8;
    cursor: pointer;
}
&:active {
    opacity: 1;
}
`;

const ContactUs = ({ isMobile }) => {
    const [input1Response, setinput1Response] = useState();
    const [input2Response, setinput2Response] = useState();
    const [input3Response, setinput3Response] = useState();
    const [input4Response, setinput4Response] = useState();

    const sendMail = () => {
        // window.location = `mailto:musa.inspiram@gmail.com&subject=${input3Response}&body=${input4Response}`;

        const link = "mailto:" + contactUsInfo.emailAdmin
            + "&subject=" + encodeURIComponent(input3Response)
            + "&body=" + encodeURIComponent(input4Response)
            ;

        window.location.href = link;
    }

    const contactUsInfo = {
        title: 'CONTACTO',
        text: '¡Ponte en contacto con nosotrxs para hablar de lo que tu marca y/o negocio necesita!',
        text2: 'La creatividad hará el resto :)',
        input1Text: 'Nombre',
        input2Text: 'Email',
        input3Text: 'Asunto',
        input4Text: 'Mensaje',
        sendButtonText: '¡Vamos!',
        emailAdmin: 'musa.inspiram@gmail.com'
    };

    return (
        <ContactUsWrapper>
            <ContactUsComponent>
                <Gradient direction={'360deg'} height='auto'>
                    <GridPart>

                        <PartColumn>
                            <PartInner>
                                <Title>{contactUsInfo.title}</Title>
                                <Text>{contactUsInfo.text}</Text>
                                <Text>{contactUsInfo.text2}</Text>
                            </PartInner>
                            <RRSSWrapper>
                                <RRSS />
                            </RRSSWrapper>
                        </PartColumn>

                        <Part>
                            <FlexLineBetween>
                                <InputHalf placeholder={contactUsInfo.input1Text} onChange={event => setinput1Response(event.target.value)} />
                                <InputHalf placeholder={contactUsInfo.input2Text} onChange={event => setinput2Response(event.target.value)} type="email" />
                            </FlexLineBetween>
                            <InputFull placeholder={contactUsInfo.input3Text} onChange={event => setinput3Response(event.target.value)} />

                            <Textarea placeholder={contactUsInfo.input4Text} rows="8" onChange={event => setinput4Response(event.target.value)} />

                            <SendButton type="button" onclick={() => sendMail()} >{contactUsInfo.sendButtonText} </SendButton>
                        </Part>

                    </GridPart>
                </Gradient>
            </ContactUsComponent>
        </ContactUsWrapper>
    )
}

export default ContactUs;
