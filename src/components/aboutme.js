import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
    render() {
      return(
        <div className="contact-body">
          <Grid className="contact-grid">
            <Cell col={6}>
              <h2>Palesa Pearl Sithebe</h2>
              <img
                src="https://i.ibb.co/gdx9X3K/56197363-486745525193665-6552733031039516854-n.jpg"
                alt="avatar"
                style={{width: '40%', height : '40%'}}
                 />
               <p style={{ width: '85%', margin: 'auto', paddingTop: '1em',}}>I’m a junior web developer with a love for the aesthetically pleasing. I also believe that true beauty is in seamless user-friendly design. I have a keen interest for back-end development, because I understand what it means to be in the background but of great importance. My interest is in complexity, my skill is in simplicity and my passion in functionality. </p>
  
            </Cell>

            </Grid>
      </div>
    )
  }
}

export default About;