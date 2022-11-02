import Spinner from "react-bootstrap/Spinner";
function SpinnerComponent(props) {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">{props.text}</span>
    </Spinner>
  );
}

export default SpinnerComponent;
