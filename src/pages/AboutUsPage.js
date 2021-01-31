import React, { useState, useEffect } from 'react';

import { ThemeProvider } from 'styled-components';
import theme from '../theme';

import Gradient from '../components/Gradient';
import Menu from '../components/Menu';
import DescriptionText from '../components/DescriptionText';

import Title from '../components/Title';
import People from '../components/People';
import Timeline from '../components/Timeline';

import MusaIcon from '../icons/MusaIcon';

import firebase from '../firebase';

const AboutUsPage = ({ isMobile }) => {

  const [objTimeline, setObjTimeline] = useState();
  const [objPeople, setObjPeople] = useState();

  useEffect(() => {
    firebase
      .firestore()
      .collection('timeline')
      .onSnapshot((snapshot) => {
        const recievedData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setObjTimeline(recievedData);
      })
  }, [])

  useEffect(() => {
    firebase
      .firestore()
      .collection('people')
      .onSnapshot((snapshot) => {
        const recievedData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setObjPeople(recievedData);
      })
  }, [])


  return (
    <ThemeProvider theme={theme}>
      <Gradient height='auto'>
        <Menu isMobile={isMobile} />
        <MusaIcon isMobile={isMobile} size={18} />
        <DescriptionText />
      </Gradient>

      <Title text='Quiénes somos'/>
      <People obj={objPeople} />

      <Title text='Trayectoria' />
      <Timeline obj={objTimeline} />



    </ThemeProvider>
  );
}

export default AboutUsPage;
