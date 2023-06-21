import React from 'react';
import resumeFile from '../documents/SlavaMelResume.pdf';

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      title: 'B.S. in Accounting',
      place: 'CUNY Brooklyn College, Brooklyn, New York',
      desc: 'Completed a Bachelor of Science degree in Accounting, acquiring strong analytical skills and a solid foundation in financial principles.',
    },
  ];

  const experienceDetails = [
    {
      yearRange: '2016 - 2022',
      title: 'Software Engineer (Full Stack)',
      place: 'M’NY Flowers',
      desc: 'Built an e-commerce platform with shopping cart features and Stripe integration for payments. Developed an admin dashboard using React.js, and managed order data with MongoDB through Node.js/Express.js RESTful API. Deployed the application on AWS, serving thousands of monthly users.',
    },
    {
      yearRange: '2023 - Present',
      title: 'Fullstack Engineer',
      place: 'Orbital',
      desc: 'Developed an event-driven data tracking application using Kafka. Engineered data visualization for Kafka cluster metrics utilizing React and Material UI. Integrated OAuth 2.0 with JSON web tokens, Bcrypt, and a NoSQL database for custom cluster monitoring. Utilized CI/CD tools, Github Actions, Docker, and AWS to improve deployment time by 25%. Implemented real-time data visualization using Chart.js, React, and Material UI.',
    },
  ];

  const skills = [
    {
      name: 'JavaScript',
    },
    {
      name: 'React',
    },
    {
      name: 'Next.js',
    },
    {
      name: 'Node.js',
    },
    {
      name: 'Express.js',
    },
    {
      name: 'HTML5',
    },
    {
      name: 'CSS3/SCSS/SASS',
    },
    {
      name: 'Material UI',
    },
    {
      name: 'Bootstrap',
    },
    {
      name: 'MongoDB',
    },
    {
      name: 'Docker',
    },
    {
      name: 'AWS',
    },
    {
      name: 'Git',
    },
    {
      name: 'RESTful API',
    },
    {
      name: 'CI/CD',
    },
  ];

  return (
    <section
      id='resume'
      className={'section ' + (darkTheme ? 'bg-dark-1' : '')}
    >
      <div className={'container ' + (classicHeader ? '' : 'px-lg-5')}>
        {/* Heading */}
        <div className='position-relative d-flex text-center mb-5'>
          <h2
            className={
              'text-24  text-uppercase fw-600 w-100 mb-0 ' +
              (darkTheme ? 'text-muted opacity-1' : 'text-light opacity-4')
            }
          >
            Summary
          </h2>
          <p
            className={
              'text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 ' +
              (darkTheme ? 'text-white' : 'text-dark')
            }
          >
            {' '}
            Resume
            <span className='heading-separator-line border-bottom border-3 border-primary d-block mx-auto' />
          </p>
        </div>
        {/* Heading end*/}
        <div className='row gx-5'>
          {/* My Education */}
          <div className='col-md-6'>
            <h2
              className={
                'text-6 fw-600 mb-4 ' + (darkTheme ? 'text-white' : '')
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    'bg-white  rounded p-4 mb-4 ' +
                    (darkTheme ? 'bg-dark' : 'bg-white border')
                  }
                >
                  <p className='badge bg-primary text-2 fw-400'>
                    {value.yearRange}
                  </p>
                  <h3 className={'text-5 ' + (darkTheme ? 'text-white' : '')}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? 'text-primary' : 'text-danger'}>
                    {value.place}
                  </p>
                  <p className={'mb-0 ' + (darkTheme ? 'text-white-50' : '')}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className='col-md-6'>
            <h2
              className={
                'text-6 fw-600 mb-4 ' + (darkTheme ? 'text-white' : '')
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    'bg-white  rounded p-4 mb-4 ' +
                    (darkTheme ? 'bg-dark' : 'bg-white border')
                  }
                >
                  <p className='badge bg-primary text-2 fw-400'>
                    {value.yearRange}
                  </p>
                  <h3 className={'text-5 ' + (darkTheme ? 'text-white' : '')}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? 'text-primary' : 'text-danger'}>
                    {value.place}
                  </p>
                  <p className={'mb-0 ' + (darkTheme ? 'text-white-50' : '')}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        <h2
          className={
            'text-8 fw-600 mt-4 mb-4 ' + (darkTheme ? 'text-white' : '')
          }
        >
          My Skills
        </h2>
        <div className='row gx-5'>
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className='col-md-6'>
                <p
                  className={
                    'text-5 fw-650 text-start mb-2 ' +
                    (darkTheme ? 'text-light' : 'text-dark')
                  }
                >
                  {skill.name}{' '}
                </p>
              </div>
            ))}
        </div>
        <div className='text-center mt-5'>
          <a
            className='btn btn-outline-secondary rounded-pill shadow-none'
            href={resumeFile}
            download
          >
            Download CV
            <span className='ms-1'>
              <i className='fas fa-download' />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
