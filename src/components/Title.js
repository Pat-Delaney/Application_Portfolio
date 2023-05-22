import React from 'react';
import '../styles/Title.css';
import anime from 'animejs';
const styles = {
    strokeStyle: {
        stroke:"#000",
        strokeWidth:"0.25mm",
        fill:"#000"
    },
  };

function Title() {
    anime({
        targets: '.animateTitle',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
      });
  return (
<svg viewBox="0 0 960 300" className='animateTitle'>
  <symbol id="s-text">
    <text text-anchor="middle" x="50%" y="80%">Patrick Delaney</text>
  </symbol>
  <g>
  <use xlinkHref="#s-text" class="text-copy"></use>
  </g>
</svg>
  );
}

export default Title;
