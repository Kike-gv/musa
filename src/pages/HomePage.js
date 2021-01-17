import React, { useState } from 'react';

import CategoriesMenu from '../components/CategoriesMenu';
import Timeline from '../components/Timeline';
import ContactUs from '../components/ContactUs';
import CategoriesContainer from '../components/CategoriesContainer';

import CatBranding from '../components/CatBranding';
import CatInspiracion from '../components/CatInspiracion';


const HomePage = () => {

  const [category, setcategory] = useState(0);

  const clickOnCategory = (cat = 0) => {
    console.log(`entro en ${cat}`);
    cat === category ? setcategory(0) : setcategory(cat);
  }

  return (
    <>

      <CategoriesMenu click={clickOnCategory} />

      {category !== 0 && <CategoriesContainer open>
        <p>{category}</p>
        {category === 1 && <CatBranding />}
        {category === 5 && <CatInspiracion />}
      </CategoriesContainer>}

      <Timeline />

      <ContactUs />

    </>
  );
}

export default HomePage;
