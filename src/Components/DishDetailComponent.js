import React from "react";
import { CardBody, Card, CardText, CardImg, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <div className="row col-12 col-md-5 m-1">
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
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

function RenderComments({ comments }) {
  const comnt = comments.map((comment) => {
    if (comments != null) {
      return (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <p>
            --{comment.author}, &nbsp;
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(new Date(Date.parse(comment.date)))}
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
const Dishdetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={props.dish} />;
          <RenderComments comments={props.dish.comments} />;
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Dishdetail;
