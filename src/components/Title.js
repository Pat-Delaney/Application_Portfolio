import { useEffect, useState, useRef } from 'react';
import React from 'react';
import '../styles/Title.css';
import anime from 'animejs';




function Title() {
  const ref = useRef(true)
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    const firstRender = ref.current;

    if (firstRender) {
      ref.current = false;
        initialRender();

    } else {
      console.log('Not a first Render');
    }
  })

function initialRender(){
anime({
    targets: '.animatedTitle',
    keyframes: [
      {opacity: 0, duration: 0, delay:0},
      {duration: 1000},
      {opacity: 1, duration: 1, delay: 1400},
      {},
      {},
      {},
      {opacity: 1}
    ],
    duration: 3000,
    easing: 	'easeOutElastic',
    complete:function() {
      setRendered(true);
    }
  });
anime({
    targets: '#nameBlock',
    keyframes: [
      {width: '0px', height: '0px', left: '90%', duration: 0, delay: 0},
      {width: '0px', height: '33px', duration: 550},
      {width: '300px', height: '33px', duration: 1000, delay: 1000, left: '10%', borderRadius: '0%'},
      {width: '33px', height: '33px', borderRadius: '100%'},
      {width: '33px', height: '33px', translateX:'0'},
      {translateX:'-150px', opacity:'1'},
      {opacity:'0'}
    ],
    duration: 3000,
    easing: 'easeInOutCirc'
  });
  
anime({
    targets: '#roleBlock',
    keyframes: [
      {width: '0px', height: '0px', left: '9%', duration: 0},
      {width: '0px', height: '18px', duration: 500},
      {width: '308px', height: '18px', duration: 1000, delay: 1000},
      {width: '18px', height: '18px', left: '86%'},
      {width: '18px', height: '18px'},
      {width: '18px', height: '0px'},
      {width: '0px', height: '0px'}
    ],
    duration: 3000,
    easing: 'easeInOutCirc'
  })
}

  return (
<div className="box" >

<div className="title">
    <span id='nameBlock' className="block animate"></span>
    <h1 className='animatedTitle'>Patrick Delaney<span></span></h1>
</div>

<div className="role">
    <div id='roleBlock' className="block animate"></div>
    <p className='animatedTitle'>Web Development, Media, Visual Arts</p>
</div>

</div>
  );
}

export default Title;
