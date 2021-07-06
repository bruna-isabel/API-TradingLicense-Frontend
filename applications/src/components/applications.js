import React from 'react';
import { Col, Row } from 'antd';
import { status, json } from '../utilities/requestHandlers';
import appCard from './applicationCard';

class applicationGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      applications: []
    }
  }

  componentDidMount() {
    fetch('https://earth-almanac-3030.codio-box.uk/applications')
    .then(status)
    .then(json)
    .then(data => {
      this.setState({ applications: data })
    })
    .catch(err => console.log("Error fetching articles"));
  }

  render() {
    if (!this.state.applications.length) {
      return <h3>Loading posts...</h3>
    }
    const cardList = this.state.applications.map(application => {
      return (
        <div style={{padding:"10px"}} key={application.ID}>
          <Col span={6}>
			  <appCard {...application} />
          </Col>
        </div>
      )
    });
    return (
      <Row type="flex" justify="space-around">
        {cardList}
      </Row>
    );
  }
}

export default applicationGrid;