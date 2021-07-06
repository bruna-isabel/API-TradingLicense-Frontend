import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

class appCard extends React.Component {

  constructor(props) {
    super(props);
    this.toggleLike = this.toggleLike.bind(this);
    this.togglePinned = this.togglePinned.bind(this);
  }

  toggleLike(isSelected) {
    console.log(`toggle LIKE on post ${this.props.ID}`);
    console.log(`new value ${isSelected}`);
    // code can be added here to update the API with new liked status
  }

  togglePinned(isSelected) {
    console.log(`toggle PINNED on post ${this.props.ID}`);
    console.log(`new value ${isSelected}`);
    // code can be added here to update the API with new pinned status
  }

  render() {
    const postID = this.props.ID;
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