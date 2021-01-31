import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, fas);


const FontAwesomeIcons = ({ icon, size = 'lg', color, isBrand = false }) => {
    const prefix = isBrand ? 'fab': 'fas';
    return (
        <FontAwesomeIcon icon={[prefix, icon]} size={size} color={color} />
    )
}

export default FontAwesomeIcons;
