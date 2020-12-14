import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import theme from './theme';

import Gradient from './components/Gradient';
import Menu from './components/Menu';
import DescriptionText from './components/DescriptionText';
import CategoriesMenu from './components/CategoriesMenu';
import Timeline from './components/Timeline';
import ContactUs from './components/ContactUs';
import CategoriesContainer from './components/CategoriesContainer';

import CatBranding from './components/CatBranding';

import MusaIcon from './icons/MusaIcon';

function App() {

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

      <CategoriesMenu click={clickOnCategory} />

      {category !== 0 && <CategoriesContainer open>
        <p>{category}</p>
        {category === 1 && <CatBranding />}
      </CategoriesContainer>}

      <Timeline />

      <ContactUs />

    </ThemeProvider>
  );
}

export default App;
