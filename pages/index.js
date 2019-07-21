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
                opacity: 0.02
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
              events: {
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
        <img
          className="zombie"
          src="https://i.imgur.com/kY2VdFf.png"
          width="800"
        />

        <Container className="icons">
          <img
            className="one icon"
            src="https://i.imgur.com/tV5pv3V.png"
            width=""
          />
          <img
            className="two icon"
            src="https://i.imgur.com/hLmggYd.png"
            width=""
          />
          <img
            className="three"
            src="https://i.imgur.com/eencXws.png"
            width=""
          />
          <img
            className="four icon"
            src="https://i.imgur.com/CPshYfM.png"
            width=""
          />
        </Container>
      </div>
    );
  }
}

export default Index;
