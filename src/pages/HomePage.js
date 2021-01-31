import React, { useState, useEffect } from 'react';

import Gradient from '../components/Gradient';
import Menu from '../components/Menu';
import DescriptionText from '../components/DescriptionText';
import CategoriesMenu from '../components/CategoriesMenu';
import ContactUs from '../components/ContactUs';
import CategoriesContainer from '../components/CategoriesContainer';
import Separator from '../components/Separator';

import CatBranding from '../components/CatBranding';
import CatContent from '../components/CatContent';
import Footer from '../components/Footer';

import MusaIcon from '../icons/MusaIcon';

import firebase from '../firebase';


const HomePage = ({ isMobile }) => {

  const [category, setcategory] = useState(0);
  const [navigation, setNavigation] = useState();
  const [categoriesMenu, setCategoriesMenu] = useState();
  const [categoriesContent, setCategoriesContent] = useState();
  const [singleCategory, setsingleCategory] = useState();
  const [rrss, setRrss] = useState();
  const [footer, setFooter] = useState();

  useEffect(() => {
    firebase
      .firestore()
      .collection('navigation')
      .onSnapshot((snapshot) => {
        const recievedData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setNavigation(recievedData);
      });


    firebase
      .firestore()
      .collection('categoriesMenu')
      .onSnapshot((snapshot) => {
        const recievedData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setCategoriesMenu(recievedData);
      });


    firebase
      .firestore()
      .collection('categoriesContent')
      .onSnapshot((snapshot) => {
        const recievedData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setCategoriesContent(recievedData);
      });


    firebase
      .firestore()
      .collection('RRSS')
      .onSnapshot((snapshot) => {
        const recievedData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setRrss(recievedData);
      });


    firebase
      .firestore()
      .collection('footer')
      .onSnapshot((snapshot) => {
        const recievedData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setFooter(recievedData);
      });

  }, []);


  useEffect(() => {
    if (category !== 0) {
      const chosenCategory = categoriesContent.filter(item => item.category === category);
      setsingleCategory(chosenCategory);
    }
  }, [category]);




  const clickOnCategory = (cat = 0) => {
    cat === category ? setcategory(0) : setcategory(cat);
  }

  return (
    <>
      <Gradient height='auto'>
        <Menu isMobile={isMobile} navigation={navigation} />
        <MusaIcon isMobile={isMobile} size={18} />
        <DescriptionText />
      </Gradient>

      <CategoriesMenu isMobile={isMobile} obj={categoriesMenu} category={category} click={clickOnCategory} />

      {category !== 0 && <CategoriesContainer open>
        <CatContent obj={singleCategory} />
      </CategoriesContainer>}
      <Separator height={10} />

      <ContactUs rrss={rrss} />

      <Footer footer={footer} />
    </>
  );
}

export default HomePage;
