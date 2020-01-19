import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
  
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'fff', height: '210px', background: 'url(https://i.ibb.co/ZWrNP8r/js.jpg) center / cover'}} >PayCard</CardTitle>
            <CardText>
            This is a smart pay card that allows users to pay with different cards and verifys the card
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/PearlSithebe/Paycard" target="_blank">GitHub</Button>
              <Button colored href="https://www.behance.net/gallery/90489557/PayCard" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '210px', background: 'url(https://i.ibb.co/SwdpTWP/vanillajs.jpg) center / cover'}} >Memory Game</CardTitle>
            <CardText>
            This is a game to test your memory, matching pictures
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/PearlSithebe/memoryGame" target="_blank">GitHub</Button>
              <Button colored href="https://www.behance.net/gallery/90490857/Memory-game" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '210px', background: 'url(https://i.ibb.co/2twx7LG/Screenshot-from-2020-01-19-21-12-24.png) center / cover'}} >Appointment System</CardTitle>
            <CardText>
            This project contains wire frames of a doctor appointment booking system. The system allows both doctors and patients to manage their appointments.
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/PearlSithebe/Appointment-system" target="_blank">GitHub</Button>
              <Button colored href="https://www.behance.net/gallery/90493081/Dr-FixMyPain" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#000', height: '210px', background: 'url(https://i.ibb.co/CQVtLwc/angular.png) center / cover'}} >Album Store Product Page</CardTitle>
          <CardText>
          Online Album Store Product Page
          </CardText>
          <CardActions border>
            <Button colored href="https://github.com/PearlSithebe/Angular-AlbumStoreProductPage" target="_blank">GitHub</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
  
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#000', height: '210px', background: 'url(https://i.ibb.co/ZWrNP8r/js.jpg) center / cover'}} >Banking Portal</CardTitle>
          <CardText>
            A Banking Portal that allows you to view the account statement and also make transfers from different accounts.
          </CardText>
          <CardActions border>
            <Button colored href="https://github.com/PearlSithebe/NodeExpress-BankingPortal" target="_blank">GitHub</Button>
            <Button colored href="https://github.com/PearlSithebe/Angular-AlbumStoreProductPage" target="_blank">Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '210px', background: 'url(https://i.ibb.co/mBQjvGt/log.jpg) center / cover'}} >Visitor's log</CardTitle>
          <CardText>
            A system that allows you to keep track of visitors and also capture their details.
          </CardText>
          <CardActions border>
            <Button colored href="https://github.com/PearlSithebe/Node-Postgres" target="_blank">GitHub</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Vanilla JS</Tab>
          <Tab>Angular</Tab>
          <Tab>Express| Node</Tab>
          <Tab>Node| Postgres</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;