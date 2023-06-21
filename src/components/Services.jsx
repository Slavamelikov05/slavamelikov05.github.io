import React from 'react';

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: 'Web Application Development',
      desc: 'Expert in crafting dynamic and interactive web applications using React, Node.js, and Express, integrating cutting-edge technologies for optimized user experiences.',
      icon: 'fas fa-desktop',
    },
    {
      name: 'Data Visualization',
      desc: 'Specialized in engineering and visualizing data analysis modules using Grafana, React, and Material UI, enhancing analytical capabilities through intuitive graphs and responsive design.',
      icon: 'fas fa-chart-area',
    },
    {
      name: 'Authentication & Security',
      desc: 'Implementing robust authentication systems using OAuth 2.0, JWT, and Bcrypt, ensuring the security and integrity of user data in web applications.',
      icon: 'fas fa-shield-alt',
    },
    {
      name: 'E-commerce Solutions',
      desc: 'Experienced in developing e-commerce applications complete with shopping carts and payment integration using Stripe, tailored to streamline the online shopping experience.',
      icon: 'fas fa-shopping-cart',
    },
    {
      name: 'Continuous Integration/Deployment',
      desc: 'Leveraging CI/CD tools like GitHub Actions, Docker, and AWS to enhance development workflows, reduce deployment times, and ensure the reliability of web applications.',
      icon: 'fas fa-infinity',
    },
    {
      name: 'Real-time Data Processing',
      desc: 'Proficient in developing event-driven applications utilizing Kafka for real-time data tracking, analysis, and task management, increasing productivity and operational efficiency.',
      icon: 'fas fa-database',
    },
  ];

  return (
    <section
      id='services'
      className={'section ' + (darkTheme ? 'bg-dark-2' : 'bg-light')}
    >
      <div className={'container ' + (classicHeader ? '' : 'px-lg-5')}>
        {/* Heading */}
        <div className='position-relative d-flex text-center mb-5'>
          <h2
            className={
              'text-24  text-uppercase fw-600 w-100 mb-0 ' +
              (darkTheme ? 'text-white-50  opacity-1' : 'text-light  opacity-4')
            }
          >
            Services
          </h2>
          <p
            className={
              'text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 ' +
              (darkTheme ? 'text-white' : 'text-dark')
            }
          >
            What I Do?
            <span className='heading-separator-line border-bottom border-3 border-primary d-block mx-auto' />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className='row'>
          <div className='col-lg-11 mx-auto'>
            <div className='row'>
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className='col-md-6' key={index}>
                    <div className='featured-box style-3 mb-5'>
                      <div
                        className={
                          'featured-box-icon text-primary  shadow-sm rounded ' +
                          (darkTheme ? 'bg-dark-1' : 'bg-white')
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? 'text-white' : ''}>
                        {service.name}
                      </h3>
                      <p
                        className={'mb-0 ' + (darkTheme ? 'text-white-50' : '')}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
