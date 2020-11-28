import React from 'react';

const Cat4Text = ({ size = 2 }) => {

  const height = size + 'rem';
  const width = size + 'rem';

  const styles = {
    fill:'none',
    stroke:'#000000', 
    strokeWidth:'0.4118',
  }

  return (
    <svg
      width={width}
      height={height}
      version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      viewBox="0 0 200 200" xmlSpace="preserve">

      <path id="XMLID_6_" d="M101.2,75.9v8.7c0,2-0.6,3.6-1.9,4.7c-1.2,1.2-2.9,1.8-5,1.8c-2.1,0-3.8-0.6-5.1-1.8
			c-1.3-1.2-1.9-2.8-1.9-4.7v-8.7h3.8v8.7c0,1,0.3,1.8,0.9,2.4s1.3,0.9,2.3,0.9c0.9,0,1.7-0.3,2.2-0.9c0.6-0.6,0.8-1.4,0.8-2.4v-8.7
			H101.2z"/>
      <path id="XMLID_8_" d="M112.7,83.1l5.4,7.9h-4.6l-3.2-4.8l-3.3,4.8h-4.5l5.4-7.7l-5-7.4h4.5l2.9,4.4l2.9-4.4h4.5L112.7,83.1z" />

      <path id="XMLID_2_" style={styles} d="M102.6,93.7v14.7c0,3.4-1,6-3.1,8c-2.1,2-4.9,3-8.4,3c-3.6,0-6.4-1-8.5-3c-2.1-2-3.2-4.6-3.2-8
			V93.7h6.4v14.7c0,1.7,0.5,3,1.5,4c1,1,2.3,1.5,3.8,1.5c1.5,0,2.8-0.5,3.7-1.5c0.9-1,1.4-2.3,1.4-4.1V93.7H102.6z"/>
      <path id="XMLID_4_" style={styles} d="M113.6,119h-6.4V93.7h6.4V119z" />

    </svg>
  );
};

export default Cat4Text;

