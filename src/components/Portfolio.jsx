import React, { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import ProjectDetailsModal from './ProjectDetailsModal';
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState('*');
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    DATA: 'Data',
    AI: 'AI',
  };

  const projectsData = [
    {
      title: 'Orbital',
      projectInfo:
        'Orbital is an open-source tool for visualizing and monitoring Kafka clusters. It is designed to help developers save time and improve efficiency by providing a real-time view of their Kafka clusters.',
      client: 'Open Source',
      technologies: 'React.js, MaterialUI, Node.js, MongoDB, Prometheus',
      industry: 'Data Visualization Technology',
      date: 'February, 2023',
      url: {
        name: 'GitHub Repo',
        link: 'https://github.com/oslabs-beta/orbital',
      },
      medium: {
        name: 'Medium Article',
        link: 'https://medium.com/@victg932/introducing-orbital-the-open-source-kafka-cluster-visualizer-and-monitoring-tool-b8db08ddc5a8',
      },

      thumbImage: 'images/projects/project-orbital.png',

      categories: [filters.DATA],
    },
    {
      title: 'RecipeAI',
      projectInfo:
        'RecipeAI is a web application that generates unique recipes based on user input ingredients. The application utilizes the OpenAI API to create these recipes and allows users to save their favorite creations to a "My Recipes" page. Built using Node.js, React, MongoDB, Express, Material-UI, CSS/HTML, and Webpack, this app is both visually appealing and user-friendly.',
      client: 'Personal',
      technologies:
        'React.js, Express.js, OpenAI API, MaterialUI, MongoDB, Webpack',
      industry: 'Food & AI',
      date: 'N/A',
      url: {
        name: 'GitHub Repo',
        link: 'https://github.com/Slavamelikov05/RecipeAI',
      },

      thumbImage: 'images/projects/project-recipeai-1.png',

      categories: [filters.AI],
    },
    {
      title: 'Promptopia',
      projectInfo:
        "Promptopia is a versatile and interactive app designed for writers and literary enthusiasts seeking inspiration and a thriving community. The app stands as a treasure trove of writing prompts that span a broad spectrum of genres and themes, ensuring that users never face writer's block. Through its filtering and sorting capabilities, Promptopia empowers users to effortlessly pinpoint prompts based on genres, themes, or keywords, and even sort them according to popularity or the date they were added.",
      client: 'Personal',
      technologies:
        'Next.js, React, Node.js, MongoDB, Tailwind CSS, Axios, JWT',
      industry: 'AI',
      date: 'N/A',
      url: {
        name: 'GitHub Repo',
        link: 'https://github.com/Slavamelikov05/Promptopia',
      },

      thumbImage: 'images/projects/project-promptopia.png',

      categories: [filters.AI],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope('.portfolio-filter', {
      itemSelector: '.filter-item',
      layoutMode: 'masonry',
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === '*'
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id='portfolio'
        className={'section ' + (darkTheme ? 'bg-dark-2' : 'bg-light')}
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
              Portfolio
            </h2>
            <p
              className={
                'text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 ' +
                (darkTheme ? 'text-white' : 'text-dark')
              }
            >
              {' '}
              My Work
              <span className='heading-separator-line border-bottom border-3 border-primary d-block mx-auto' />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              'portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 ' +
              (darkTheme ? 'nav-light' : '')
            }
          >
            <li className='nav-item'>
              <button
                className={'nav-link ' + (filterKey === '*' ? 'active' : '')}
                onClick={handleFilterKeyChange('*')}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className='nav-item' key={i}>
                <button
                  className={
                    'nav-link ' +
                    (filterKey === filters[oneKey] ? 'active' : '')
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className='portfolio popup-ajax-gallery'>
            <div className='row portfolio-filter filter-container g-4'>
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      'col-sm-6 col-lg-4 filter-item ' +
                      project.categories.join(' ')
                    }
                    key={index}
                  >
                    <div className='portfolio-box rounded'>
                      <div className='portfolio-img rounded'>
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className='img-fluid d-block portfolio-image'
                          src={project.thumbImage}
                          alt=''
                        />
                        <div className='portfolio-overlay'>
                          <a
                            className='popup-ajax stretched-link'
                            href=''
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle='modal'
                            data-bs-target='#exampleModal'
                          />
                          <div className='portfolio-overlay-details'>
                            <h5 className='text-white fw-400'>
                              {project.title}
                            </h5>
                            <span className='text-light'>Category</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className='project-details-modal'>
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
