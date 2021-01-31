import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import FontAwesomeIcons from '../FontAwesomeIcons';


const RRSSWrapper = styled.div`
 display: flex;
 align-items: center;
 flex-wrap: wrap;
`;
const IconWrapper = styled.a`
margin-right: 1rem;
`;

const RRSS = () => {
    const themeContext = useContext(ThemeContext);
    const socialMedia = [
        {
            name: 'facebook',
            icon: 'facebook-f',
            url: 'https://www.facebook.com',
        }, {
            name: 'youtube',
            icon: 'youtube',
            url: 'https://www.youtube.com',
        }, {
            name: 'twitter',
            icon: 'twitter',
            url: 'https://www.twitter.com',
        }
    ]


    return (
        <RRSSWrapper>
            {socialMedia.map(media => (
                <IconWrapper key={media.name} href={media.url} target="_blank">
                    <FontAwesomeIcons icon={media.icon} color={themeContext.colors.textInverse} isBrand/>
                </IconWrapper>
            ))}
        </RRSSWrapper>
    )
}

export default RRSS;
