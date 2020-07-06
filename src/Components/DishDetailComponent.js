import React, { Component } from "react";
import { CardBody, Card, CardText, CardImg, CardTitle } from "reactstrap";

class Dishdetail extends Component {
  constructor(props) {
    super(props);
  }
  renderDish(dish) {
    if (dish != null) {
      return (
        <div className="row col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  renderComments(comments) {
    const comnt = comments.map((comment) => {
      if (comments != null) {
        return (
          <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>
              --{comment.author}, &nbsp;
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                day: "2-digit",
                month: "long",
              }).format(new Date(comment.date))}
            </p>
          </li>
        );
      } else {
        return <div></div>;
      }
    });
    return (
      <div className="col-12 col-md-5 m-1">
        <h4> Comments </h4>
        <ul className="list-unstyled">{comnt}</ul>
      </div>
    );
  }
  render() {
    const dish = this.props.dish;
    if (dish == null) {
      return <div></div>;
    }
    const dishSection = this.renderDish(dish);
    const commentSection = this.renderComments(dish.comments);
    return (
      <div className="row">
        {dishSection}
        {commentSection}
      </div>
    );
  }
}
export default Dishdetail;
