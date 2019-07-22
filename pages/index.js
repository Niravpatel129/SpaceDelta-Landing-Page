import React from "react";
import BaseLayout from "../components/layouts/BaseLayout.js";
import Particles from "react-particles-js";
import "./index.scss";
import { Container, Row, Col } from "reactstrap";
import Head from "next/head";

class Human {
  talk() {
    console.log("i am talking");
  }

  static walk() {
    console.log("i am walking");
  }
}

const human = new Human();

class Index extends React.Component {
  static getInitialProps() {
    console.log("get inital props");
    return {};
  }
  constructor() {
    super();
  }
  componentDidMount() {
    human.talk();
    console.log("component did mount");
  }
  componentWillUnmount() {
    console.log("hello");
  }
  componentDidUpdate() {
    console.log("did unmount");
  }
  render() {
    return (
      <div>
        <Head>
          <title>Space Delta</title>
        </Head>
        <Particles
          params={{
            particles: {
              number: {
                value: 300,
                density: {
                  enable: true,
                  value_area: 1500
                }
              },
              line_linked: {
                enable: true,
                opacity: 0.001,
                value: 1
              },
              move: {
                direction: "right",
                speed: 0.05
              },
              size: {
                value: 1
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.05
                }
              }
            },
            interactivity: {
              enable: true,
              events: {
                onhover: {
                  enable: true
                },
                onclick: {
                  enable: true,
                  mode: "repulse"
                }
              },
              modes: {
                push: {
                  particles_nb: 1
                }
              }
            },
            retina_detect: true
          }}
        />
        <img className="banner" src="../static/logo.png" width="510px" />
        <img className="zombie" src="../static/Dude.png" width="800" />

        <div className="floattest">
          <a href="/">
            <img
              className="one icon grow"
              src="../static/Mercury.png"
              width=""
            />
          </a>
          <a href="/">
            <img className="two icon" src="../static/Venus.png" width="" />
          </a>
          <a href="/">
            <img
              className="three icon"
              src="../static/Earth.png"
              width="710px"
            />
          </a>
          <a href="/">
            <img className="four icon" src="../static/Mars.png" width="" />
          </a>
        </div>
      </div>
    );
  }
}

export default Index;
