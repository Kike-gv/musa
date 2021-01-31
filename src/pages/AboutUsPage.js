import React, { useState, useEffect } from 'react';

import { ThemeProvider } from 'styled-components';
import theme from '../theme';

import Gradient from '../components/Gradient';
import Menu from '../components/Menu';
import DescriptionText from '../components/DescriptionText';

import Title from '../components/Title';
import People from '../components/People';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';

import MusaIcon from '../icons/MusaIcon';

import firebase from '../firebase';

const AboutUsPage = ({ isMobile }) => {

  const [navigation, setNavigation] = useState();
  const [intro, setIntro] = useState();
  const [objTimeline, setObjTimeline] = useState();
  const [objPeople, setObjPeople] = useState();
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
      .collection('intro')
      .onSnapshot((snapshot) => {
        const recievedData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setIntro(recievedData);
      });


    firebase
      .firestore()
      .collection('timeline')
      .onSnapshot((snapshot) => {
        const recievedData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setObjTimeline(recievedData);
      });


    firebase
      .firestore()
      .collection('people')
      .onSnapshot((snapshot) => {
        const recievedData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setObjPeople(recievedData);
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


  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Gradient height='auto'>
        <Menu isMobile={isMobile} navigation={navigation} />
        <MusaIcon isMobile={isMobile} size={18} />
        <DescriptionText intro={intro} />
      </Gradient>

      <Title text='Quiénes somos' />
      <People obj={objPeople} />

      <div id="timeline" />
      <Title text='Trayectoria' />
      <Timeline obj={objTimeline} />


      <Footer footer={footer} />
    </ThemeProvider>
  );
}

export default AboutUsPage;
