import { gsap } from "gsap";
import barba from '@barba/core';
import { homeHero } from './home/home-hero.js';
import { homeButtons } from './home/home-buttons.js';
import { navigation } from './navigation.js';

barba.init({
  transitions: [{
    name: 'default-transition',
    leave(data) {
      return gsap.to(data.current.container, {
        opacity: 0,
        x: 200
      })
    },
    enter(data) {
      return gsap.from(data.next.container, {
        opacity: 0,
        x: 200,
        duration: 1
      })
    }
  }],
  views: [{
    namespace: 'home',
    beforeEnter() {
      homeHero();
      homeButtons();
    },
    afterEnter() {

    }
  }]
})
barba.hooks.after( (data) => {
  navigation();
})
navigation();