import React from 'react';
import resumeFile from '../documents/SlavaMelResume.pdf';
const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id='about' className={'section ' + (darkTheme ? 'bg-dark-1' : '')}>
      <div className={'container ' + (classicHeader ? '' : 'px-lg-5')}>
        {/* Heading */}
        <div className='position-relative d-flex text-center mb-5'>
          <h2
            className={
              'text-24  text-uppercase fw-600 w-100 mb-0 ' +
              (darkTheme ? 'text-muted opacity-1' : 'text-light opacity-4')
            }
          >
            About Me
          </h2>
          <p
            className={
              'text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 ' +
              (darkTheme ? 'text-white' : 'text-dark')
            }
          >
            Know Me More
            <span className='heading-separator-line border-bottom border-3 border-primary d-block mx-auto' />
          </p>
        </div>
        {/* Heading end*/}
        <div className='row gy-5'>
          {/* About me content start */}
          <div className='col-lg-7 col-xl-8 text-center text-lg-start'>
            <h2
              className={
                'text-7 fw-600 mb-3 ' + (darkTheme ? 'text-white' : '')
              }
            >
              I'm <span className='text-primary'>Slava,</span> a Fullstack
              Software Engineer
            </h2>
            <p className={darkTheme ? 'text-white-50' : ''}>
              With over 5 years of experience specializing in web application
              development using React. My passion for coding is not just a
              career, but a calling. I take pride in crafting tailor-made
              solutions that not only breathe life into brands but also fit
              snugly into your business objectives.
            </p>
            <p className={darkTheme ? 'text-white-50' : ''}>
              My affinity for meticulous attention to detail, coupled with an
              unwavering commitment to deliver high-quality projects, has been
              the cornerstone of my career. I’ve had the privilege to
              collaborate with a diverse array of clients, creating exceptional
              results through dedication and innovation.
            </p>
            <p className={darkTheme ? 'text-white-50' : ''}>
              Allow me to bring your ideas to the forefront with elegance and
              efficiency as we embark on a journey to create something
              remarkable together.
            </p>
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className='col-lg-5 col-xl-4'>
            <div className='ps-lg-4'>
              <ul
                className={
                  'list-style-2 ' +
                  (darkTheme ? 'list-style-light text-light' : '')
                }
              >
                <li>
                  <span className='fw-600 me-2'>Name:</span>Slava Melikov
                </li>
                <li>
                  <span className='fw-600 me-2'>Email:</span>
                  <a href='slava.melikovswe@gmail.com'>
                    slava.melikovswe@gmail.com
                  </a>
                </li>
                <li>
                  <span className='fw-600 me-2'>Age:</span>26
                </li>
                <li className='border-0'>
                  <span className='fw-600 me-2'>From:</span>New York, NY
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className='btn btn-primary rounded-pill'
              >
                Download CV
              </a>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
        {/* projects rewards counting start */}
        <div
          className={
            'brands-grid separator-border mt-5 ' +
            (darkTheme ? 'separator-border-light' : '')
          }
        >
          <div className='row'>
            <div className='col-6 col-md-3'>
              <div className='featured-box text-center'>
                <h4
                  className={
                    'text-12  mb-0 ' +
                    (darkTheme ? 'text-white-50' : 'text-muted')
                  }
                >
                  <span>5</span>+
                </h4>
                <p className={'mb-0 ' + (darkTheme ? 'text-light' : '')}>
                  Years Experience
                </p>
              </div>
            </div>
            <div className='col-6 col-md-3'>
              <div className='featured-box text-center'>
                <h4
                  className={
                    'text-12  mb-0 ' +
                    (darkTheme ? 'text-white-50' : 'text-muted')
                  }
                >
                  <span>10</span>+
                </h4>
                <p className={'mb-0 ' + (darkTheme ? 'text-light' : '')}>
                  Open Source Contributions
                </p>
              </div>
            </div>
            <div className='col-6 col-md-3'>
              <div className='featured-box text-center'>
                <h4
                  className={
                    'text-12  mb-0 ' +
                    (darkTheme ? 'text-white-50' : 'text-muted')
                  }
                >
                  <span>30</span>+
                </h4>
                <p className={'mb-0 ' + (darkTheme ? 'text-light' : '')}>
                  Projects Done
                </p>
              </div>
            </div>
            <div className='col-6 col-md-3'>
              <div className='featured-box text-center'>
                <h4
                  className={
                    'text-12  mb-0 ' +
                    (darkTheme ? 'text-white-50' : 'text-muted')
                  }
                >
                  <span>2</span>
                </h4>
                <p className={'mb-0 ' + (darkTheme ? 'text-light' : '')}>
                  Tech Talks
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* projects rewards counting end */}
      </div>
    </section>
  );
};

export default AboutUs;
