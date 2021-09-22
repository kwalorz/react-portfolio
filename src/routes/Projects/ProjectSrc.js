import nextJSImg from '../../img/next-js-landing-page.png';
import reactModalImg from '../../img/React_modal-window.png';
import topQualityPaintImg from '../../img/top_quality_paint.png';

const projectSrc = [
  {
    projTitle: 'Next JS Landing Page',
    projImg: {
      imgSrc: nextJSImg,
      altText: 'next js landing page',
      width: '350px',
    },
    projDescription:
      'Project converted from standard HTML/CSS and optimized for Next JS. Posts are linked to articles written in .md files. Files are then parsed and compiled using Marked and gray-matter packages.',
    projButtons: [
      {
        label: 'Source Code',
        link: 'https://github.com/kwalorz/landing_page',
      },
      {
        label: 'Visit Site',
        link: 'https://landingpage-nextjs.netlify.app/',
      },
    ],
  },
  {
    projTitle: 'React JS: Email Capture Window',
    projImg: {
      imgSrc: reactModalImg,
      altText: 'modal pop up window',
      width: '350px',
    },
    projDescription:
      "Modal appears when user's mouse leaves the main content area. Cookies are also used to prevent the modal from popping upagain for a preset amount of time if they decide they are not interested in the offer.",
    projButtons: [
      {
        label: 'Source Code',
        link: 'https://github.com/kwalorz/email_capture-react',
      },
      {
        label: 'Visit Site',
        link: 'https://kwalorz.github.io/email_capture-react/',
      },
    ],
  },
  {
    projTitle: 'Top Quality Painting Co',
    projImg: {
      imgSrc: topQualityPaintImg,
      altText: 'wordpress website',
      width: '350px',
    },
    projDescription:
      'Responsive 5-page website layout made with WordPress using the Divi design tool.proj consists of custom CSS used for styling.',
    projButtons: [
      {
        label: 'Visit Site',
        link: 'https://topqualitypaintco.com/',
      },
    ],
  },
  // {
  //   projTitle: 'Next JS Landing Page',
  //   projImg: { imgSrc: nextJSImg, altText: 'next js landing page' },
  //   projDescription:
  //     'Project converted from standard HTML/CSS and optimized for Next JS. Posts are linked to articles written in .md files. Files are then parsed and compiled using Marked and gray-matter packages.',
  //   projButtons: [
  //     {
  //       label: 'Source Code',
  //       link: 'https://github.com/kwalorz/landing_page',
  //       target: '_blank',
  //       rel: 'noopener noreferrer',
  //     },
  //     {
  //       label: 'Visit Site',
  //       link: 'https://landingpage-nextjs.netlify.app/',
  //       target: '_blank',
  //       rel: 'noopener noreferrer',
  //     },
  //   ],
  // },
  // {
  //   projTitle: 'React JS: Email Capture Window',
  //   projImg: { imgSrc: reactModalImg, altText: 'modal pop up window' },
  //   projDescription:
  //     "Modal appears when user's mouse leaves the main content area. Cookies are also used to prevent the modal from popping upagain for a preset amount of time if they decide they are not interested in the offer.",
  //   projButtons: [
  //     {
  //       label: 'Source Code',
  //       link: 'https://github.com/kwalorz/email_capture-react',
  //       target: '_blank',
  //       rel: 'noopener noreferrer',
  //     },
  //     {
  //       label: 'Visit Site',
  //       link: 'https://kwalorz.github.io/email_capture-react/',
  //       target: '_blank',
  //       rel: 'noopener noreferrer',
  //     },
  //   ],
  // },
  // {
  //   projTitle: 'Top Quality Painting Co',
  //   projImg: {
  //     imgSrc: topQualityPaintImg,
  //     altText: 'wordpress website',
  //   },
  //   projDescription:
  //     'Responsive 5-page website layout made with WordPress using the Divi design tool.proj consists of custom CSS used for styling.',
  //   projButtons: [
  //     {
  //       label: 'Visit Site',
  //       link: 'https://topqualitypaintco.com/',
  //       target: '_blank',
  //       rel: 'noopener noreferrer',
  //     },
  //   ],
  // },
];

export default projectSrc;
