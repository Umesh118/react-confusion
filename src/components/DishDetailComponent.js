import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import CommentForm from "./CommentFormComponent";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderDish({ dish }) {


  if (dish != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <FadeTransform
          in
          transformProps={{
            exitTransform: 'scale(0.5) translateY(-50%)'
          }}>
          <Card>
            <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name}></CardImg>
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText> {dish.description} </CardText>
            </CardBody>
          </Card>
        </FadeTransform>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function RenderComments({ dish, comments, postComment, dishId }) {

  if (comments == null) {
    return <div></div>;
  }
  const cmnts =
    <Stagger in>
      {comments.map((comment) => {
        return (
          <Fade in>
            <li key={comment.id}>
              <p>{comment.comment}</p>
              <p>
                -- {comment.author}, &nbsp;
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(comment.date))}
              </p>
            </li>
          </Fade>
        );
      })}</Stagger>

  return (
    <div className="col-12 col-md-5 m-1">
      <h4>Comments</h4>
      <ul className="list-unstyled">{cmnts}</ul>
      <CommentForm dish={dish} dishId={dishId} postComment={postComment} comments={comments} />
    </div>
  );
}

const DishDetail = (props) => {
  // console.log("Receive Comments :", props.comments);
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  }
  else
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderDish dish={props.dish} />

          <RenderComments
            dish={props.dish}
            comments={props.comments}
            postComment={props.postComment}
            dishId={props.dish.id}
          />
        </div>
      </div>
    );
};

export default DishDetail;
