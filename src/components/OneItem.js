import React from 'react';
import { connect } from 'react-redux';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';

const OneItem = (props) => {
    console.log('props from OneItem: ', props)
  let { name, description, price, image } = props.item
  return (
    <div className="itemContainer">
      <Row>
        <Col sm="6">
          <Card className="blogCard">
            <CardImg top width="100%" src={image} alt="Blog Image" />
            {/* <CardBody>
              <CardTitle></CardTitle>
              <CardText></CardText>
              <Button>Read More</Button>
            </CardBody> */}
          </Card>
        </Col>
        <Col sm="6">
          <Card className="blogContent" body>
            <CardTitle>{name}</CardTitle>
            <CardText>{description}</CardText>
          </Card>
        </Col>
      </Row>
        
      </div>
  )
}

function mapStateToProps(state, props) {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps, null)(OneItem)