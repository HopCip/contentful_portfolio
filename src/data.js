import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { nanoid } from 'nanoid';

const projects = [
  {
    title: 'spa-resort',
    url: 'https://spa-js.netlify.app/',
    image: './assets/spa-resort.png',
    tags: '[HTML, CSS, JAVASCRIPT]',
  },
  {
    title: 'chess-site',
    url: 'https://chess-site-react.netlify.app/',
    image: './assets/chess-site.png',
    tags: '[HTML, CSS, JAVASCRIPT, MATERIAL UI]',
  },
  {
    title: 'restaurant',
    url: 'https://restaurant-react-lh.netlify.app/',
    image: './assets/restaurant.png',
    tags: '[HTML, CSS, JAVASCRIPT,REACT]',
  },
  {
    title: 'night-club',
    url: 'https://ugly-flamingo.netlify.app/',
    image: './assets/night-club.png',
    tags: '[HTML, CSS, JAVASCRIPT]',
  },
  {
    title: 'furniture-store',
    url: 'https://furniture-js-api.netlify.app/',
    image: './assets/furniture-store.png',
    tags: '[HTML, CSS, JAVASCRIPT, REACT]',
  },
  {
    title: 'social-site',
    url: 'https://social-site-lh.netlify.app/',
    image: './assets/social-site.png',
    tags: '[HTML, CSS, JAVASCRIPT]',
  },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: '',
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: '',
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: '',
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];
