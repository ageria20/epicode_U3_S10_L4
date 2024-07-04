import { Button, Card } from "react-bootstrap";

const SingleBook = props => {
  // state = {
  //   isSelected: false,
  // };

  return (
    <>
      <Card
        data-testId="card"
        onClick={() => {
          props.changeAsin(props.book.asin);
        }}
        style={{ border: props.book.asin === props.asin ? "3px solid red" : "3px solid transparent" }}
      >
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>
        </Card.Body>
        <Button as="button">Compra</Button>
      </Card>
    </>
  );
};

export default SingleBook;
