import { Card, Row, Col } from 'antd';
const { Meta } = Card;

const grid = (
  <>
  <Row type="flex" justify="space-around">
    <Col span={6}>
      <Card cover={<img alt="test" src="https://picsum.photos/id/1024/400"/>}>
        <Meta title="First Post" description="This is about something" />
      </Card>
    </Col>
    <Col span={6}>
      <Card cover={<img alt="test" src="https://picsum.photos/id/1025/400"/>}>
        <Meta title="Second Post" description="This is about something" />
      </Card>
    </Col>
  </Row>  
  </>
);

function PostGrid(props) {
  return grid;
}

export default PostGrid;