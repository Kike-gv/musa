import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import theme from '../theme';

import Gradient from '../components/Gradient';
import Menu from '../components/Menu';
import DescriptionText from '../components/DescriptionText';
import MusaIcon from '../icons/MusaIcon';

const AboutUsPage = () => {

  const [category, setcategory] = useState(0);

  const clickOnCategory = (cat = 0) => {
    console.log(`entro en ${cat}`);
    cat === category ? setcategory(0) : setcategory(cat);
  }

  return (
    <ThemeProvider theme={theme}>
      <Gradient>
        <Menu />
        <MusaIcon size={18} />
        <DescriptionText />
      </Gradient>



    </ThemeProvider>
  );
}

export default AboutUsPage;
