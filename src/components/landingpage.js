import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: '250px'}}>
        <Grid className="landing-grid">
          <Cell col={12}>

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | Angular | NodeJS | Express | Postgress</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/palesa-sithebe-30357615b" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square"  />
          </a>

          {/* Github */}
          <a href="https://github.com/PearlSithebe" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square"  />
          </a>

          {/* Freecodecamp */}
          <a href="mailto:palesa.sithebe@umuzi.org"  rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp"  />
          </a>

          

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing