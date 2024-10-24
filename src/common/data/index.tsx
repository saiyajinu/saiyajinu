import envato from '../assets/clients/envato.png';
import evernote from '../assets/clients/evernote.png';
import forbes from '../assets/clients/forbes.png';
import geekwire from '../assets/clients/geekwire.png';
import slack from '../assets/clients/slack.png';
import usaToday from '../assets/clients/usa-today.png';

import angular from '../assets/tech-stack/angular.png';
import nestjs from '../assets/tech-stack/nestjs.png';
import nodejs from '../assets/tech-stack/nodejs.png';
import socketio from '../assets/tech-stack/socketio.png';
import stripe from '../assets/tech-stack/stripe.png';
import mongodb from '../assets/tech-stack/mongodb.png';

// import angular-js from '../assets/tech-stack/angular-js-lockup.svg'

export const clients = [envato, evernote, forbes, geekwire, slack, usaToday];

export const techStack = [{src: angular, height: 50}, {src: nestjs, height: 50}, {src: nodejs, height: 50}, {src: socketio, height: 50}, {src: stripe, height: 50}, {src: mongodb, height: 50}];

export const footer = {
    about: {
    //   logo: siteLogo,
      text: `We run Advanced Search reports on the criteria you care about to see how work is progressing and where to focus your effort.`,
    },
    widgets: [
      {
        id: 2,
        title: 'About Us',
        list: [
          {
            id: 1,
            title: 'Support Center',
            link: '#',
          },
          {
            id: 2,
            title: 'Customer Support',
            link: '#',
          },
          {
            id: 3,
            title: 'About Us',
            link: '#',
          },
          {
            id: 4,
            title: 'Copyright',
            link: '#',
          },
        ],
      },
      {
        id: 3,
        title: 'Our Information',
        list: [
          {
            id: 1,
            title: 'Return Policy ',
            link: '#',
          },
          {
            id: 2,
            title: 'Privacy Policy',
            link: '#',
          },
          {
            id: 3,
            title: 'Terms & Conditions',
            link: '#',
          },
          {
            id: 4,
            title: 'Site Map',
            link: '#',
          },
        ],
      },
    ],
    contactInfo: {
      title: 'Contact info',
      address: `Bucharest, Romania`,
      phone: `+40 740 123 456`,
      openingTime: `7 Days - 8am - 10pm`,
      email: `info@redqteam.com`,
    },
  };
  
