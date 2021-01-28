import React, { useState, useEffect } from 'react';

import Gradient from '../components/Gradient';
import Menu from '../components/Menu';
import DescriptionText from '../components/DescriptionText';
import CategoriesMenu from '../components/CategoriesMenu';
import ContactUs from '../components/ContactUs';
import CategoriesContainer from '../components/CategoriesContainer';
import Separator from '../components/Separator';

import CatBranding from '../components/CatBranding';
import CatInspiracion from '../components/CatInspiracion';

import MusaIcon from '../icons/MusaIcon';

import firebase from '../firebase';


const HomePage = () => {

  const [category, setcategory] = useState(0);
  const [fireB, setfireB] = useState(0);

  useEffect(() => {
    firebase
      .firestore()
      .collection('times')
      .onSnapshot((snapshot) => {
        const recievedData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setfireB(recievedData);
      })
  }, []) 
  console.log("🚀 ~ file: HomePage.js ~ line 35 ~ HomePage ~ fireB", fireB)

  const clickOnCategory = (cat = 0) => {
    console.log(`entro en ${cat}`);
    cat === category ? setcategory(0) : setcategory(cat);
  }

  return (
    <>
      <Gradient>
        <Menu />
        <MusaIcon size={18} />
        <DescriptionText />
      </Gradient>

      <CategoriesMenu click={clickOnCategory} />

      {category !== 0 && <CategoriesContainer open>
        <p>{category}</p>
        {category === 1 && <CatBranding />}
        {category === 5 && <CatInspiracion />}
      </CategoriesContainer>}
      <Separator height={10} />

      <ContactUs />

    </>
  );
}

export default HomePage;
