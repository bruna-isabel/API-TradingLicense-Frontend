import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

class appCard extends React.Component {

  render() {
				return (
				  <Card
					style={{ width: 320 }}
					hoverable={true}>
		<Meta title={this.props.title} description={this.props.summary} />
	 </Card>
	);
  }
}

export default appCard; 