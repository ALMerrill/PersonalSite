import React from "react";

import Layout from "../components/Layout";

import Sidebar from "../components/Sidebar";
import config from "../../config";
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <p className="lead mb-5">
            I am a senior in the computer science program at Brigham Young
            University. I have loved my time in school, and I love learning new
            programming technologies and practices. I graduate in April of 2020,
            and plan on starting a master's degree in computer science the
            following Fall. Currently, I am looking for an internship for the
            Summer of 2020. I'm interested in full stack development, and I have
            also had a recent fascination with the DevOps mindset, and the tools
            that are currently paired with that, including Docker, AWS, Jenkins,
            etc.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Computer Vision Research Assistant</h3>
              <div className="subheading mb-3">BYU, Provo, Utah</div>
              <p>
                Built and used a deployed system to gather video data. Now
                working on building models in Pytorch to be used for live
                detection and classification in an AI on the edge setting
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">April 2019 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Development Intern</h3>
              <div className="subheading mb-3">
                Facebook, Seattle, Washington
              </div>
              <p>
                Built an internal tool in React and 3D rendering libraries that
                will be used by a team of 50 developers and researchers to
                improve traffic quality on the Facebook app
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2019 - March 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Development Intern</h3>
              <div className="subheading mb-3">
                MasterControl, Salt Lake City, Utah
              </div>
              <p>
                Helped reach the beta software release deadline by adding and
                improving features using Java and Angular
              </p>
              <p>
                Increased the speed of code deployment by a factor of 10 by
                improving automated Selenium Webdriver tests in the pipeline
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2018 - August 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Computer Science TA</h3>
              <div className="subheading mb-3">
                BYU Independent Study, Provo, Utah
              </div>
              <p>
                Assisted the professor and course designer in improving the two
                online computer science courses and course projects, adding a
                new Sudoku validator to the final project options
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2017 - May 2018</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="projects"
      >
        <div className="w-100">
          <h2 className="mb-5">Projects</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Scrabble Definition Generator Web App</h3>
              {/* <div className="subheading mb-3">
                Finding verses of similar topic throughout the scriptures
              </div> */}
              <p>
                Used Natural Language Processing in Python to generate a fake
                word and definition given a player’s Scrabble letters. This was
                done inside a Flask server with an API
              </p>
              <p>
                Built a simple front-end in React for the user to input letters
                and receive a definition
              </p>
            </div>
            <div className="resume-date text-md-right">
              <a href={config.githubText.url}>
                <i className={`fab fa-github`}> Repo</i>
              </a>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Text analysis program</h3>
              <div className="subheading mb-3">
                Finding verses of similar topic throughout the scriptures
              </div>
              <p>
                Gathered and preprocessed full books of text in order to convert
                words and phrases to vector space
              </p>
              <p>
                Compared words as vectors in multidimensional space using
                Word2Vec and Numpy libraries in Python
              </p>
              <p>
                Implemented multidimensional clustering to find topic
                similarities throughout the tex
              </p>
            </div>
            <div className="resume-date text-md-right">
              <a href={config.githubText.url}>
                <i className={`fab fa-github`}> Repo</i>
              </a>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Personal Website - this one!</h3>
              <div className="subheading mb-3">
                Personal resume and project website
              </div>
              <p>
                Automatically built and deployed to AWS S3 on each commit using
                AWS CodePipeline. Built using GatsbyJS, a React framework.
              </p>
              <p>
                Started from a template, as I was more focused on learning about
                the CI/CD pipeline
              </p>
            </div>
            <div className="resume-date text-md-right">
              <a href={config.githubPS.url}>
                <i className={`fab fa-github`}> Repo</i>
              </a>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Dungeons and Dragons library program</h3>
              <div className="subheading mb-3">
                Quick access to any information about the game from the terminal
              </div>
              <p>
                Information loaded and sorted from XML files and formatted for
                convenience
              </p>
              <p>
                Print decorating to highlight important words and further format
                output
              </p>
            </div>
            <div className="resume-date text-md-right">
              <a href={config.githubDnD.url}>
                <i className={`fab fa-github`}> Repo</i>
              </a>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Web scraper script</h3>
              <div className="subheading mb-3">
                Automated script to grab and modify most recent class notes from
                the course website
              </div>
              <p>
                Automatically scraped plain text notes, formatted to HTML and
                imported into Apple Notes before class each day
              </p>
            </div>
            <div className="resume-date text-md-right">
              <a href={config.githubScraper.url}>
                <i className={`fab fa-github`}> Repo</i>
              </a>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Ticket To Ride</h3>
              <div className="subheading mb-3">
                Web app built in Angular and Node
              </div>
              <p>
                Worked in a group to build a full stack web app that emulated
                the Ticket To Ride board game
              </p>
              <p>
                Worked on the chat and player move history systems, along with
                many of the API endpoints and server logic
              </p>
              <p>
                Used technologies like Docker and Travis CI for integration and
                deployment
              </p>
            </div>
            <div className="resume-date text-md-right">
              <a href={config.githubTTR_Front.url}>
                <i className={`fab fa-github`}> Frontend</i>
              </a>
              <br />
              <a href={config.githubTTR_Back.url}>
                <i className={`fab fa-github`}> Backend</i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Brigham Young University</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Computer Science Major - Math Minor</div>
              <p>GPA: 3.94</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Graduating April 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">BYU Developers Club</h3>
              <div className="subheading mb-3">Vice President</div>
              <p>
                Helped organize and run a hackathon for three local nonprofits,
                building software for them to improve day to day activities and
                helping with their websites
              </p>
              <p>
                Created a Slack bot to automatically post job opportunities from
                local businesses
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2018 - January 2019</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Languages &amp; tools</h2>

          <div className="subheading mb-3">Primary languages &amp; tools</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-python"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-java"></i>
            </li>
          </ul>

          <div className="subheading mb-3">
            CI/CD tools I am currently learning
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-aws"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-docker"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-jenkins"></i>
            </li>
          </ul>

          {/* <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile-First, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul> */}
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a developer, I love all things music. I play
            guitar, go to concerts, and I'm always on the hunt for new music
          </p>
          <p>
            I enjoy trail running and hiking, and have run a couple half
            marathons
          </p>
          <p className="mb-0">
            I also enjoy video games like League of Legends, Rocket League,
            Zelda games, RPGs in general, and more
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
