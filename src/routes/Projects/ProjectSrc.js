import nextJSImg from '../../img/next-js-landing-page.png';
import reactModalImg from '../../img/React_modal-window.png';
import topQualityPaintImg from '../../img/top_quality_paint.png';

const ProjectSrc = [
  {
    projectTitle: 'Next JS Landing Page',
    projectImg: { imgSrc: nextJSImg, altText: 'next js landing page' },
    projectDescription:
      'Project converted from standard HTML/CSS and optimized for Next JS. Posts are linked to articles written in .md files. Files are then parsed and compiled using Marked and gray-matter packages.',
    projectButtons: [
      {
        label: 'Source Code',
        link: 'https://github.com/kwalorz/landing_page',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        label: 'Visit Site',
        link: 'https://landingpage-nextjs.netlify.app/',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
    ],
  },
  {
    projectTitle: 'React JS: Email Capture Window',
    projectImg: { imgSrc: reactModalImg, altText: 'modal pop up window' },
    projectDescription:
      "Modal appears when user's mouse leaves the main content area. Cookies are also used to prevent the modal from popping upagain for a preset amount of time if they decide they are not interested in the offer.",
    projectButtons: [
      {
        label: 'Source Code',
        link: 'https://github.com/kwalorz/email_capture-react',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        label: 'Visit Site',
        link: 'https://kwalorz.github.io/email_capture-react/',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
    ],
  },
  {
    projectTitle: 'Top Quality Painting Co',
    projectImg: {
      imgSrc: topQualityPaintImg,
      altText: 'wordpress website',
    },
    projectDescription:
      'Responsive 5-page website layout made with WordPress using the Divi design tool.Project consists of custom CSS used for styling.',
    projectButtons: [
      {
        label: 'Visit Site',
        link: 'https://topqualitypaintco.com/',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
    ],
  },
  //   {
  //     projectTitle: 'Work Out Tracking App',
  //     projectImg: { imgSrc: maptyImg, altText: 'leaflet api map' },
  //     projectDescription:
  //       'Made with HTML, CSS, and JavaScript. Project utilizes Leaflet API for geolocation services totrack workouts.',
  //   },
];

export default ProjectSrc;
