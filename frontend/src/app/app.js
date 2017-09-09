import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import './app.css';
import ContactInformationContainer from './contact-information/contact-information-container';
import EducationContainer from './education/education-container';
import WorkContainer from './work/work-container';

class App extends Component {
  render() {
    return (
      <div>
          <div className="App-header">
              <h1>Curriculum Vitae</h1>
          </div>
          <Grid>
              <div className="content-bulk">
                <ContactInformationContainer />
              </div>
              <div className="content-bulk">
                <EducationContainer />
              </div>
              <div className="content-bulk">
                <WorkContainer />
              </div>
          </Grid>
      </div>
    );
  }
}

export default App;
