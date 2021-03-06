import { useState } from "react";
import { Modal } from "react-bootstrap";

const Pizza = ({ pizza }) => {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState("small");

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="m-5 shadow-lg p-3 mb-5 bg-white rounded">
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img
          src={pizza.image}
          alt=""
          className="img-fluid"
          style={{ height: 200, width: 200, objectFit: "contain" }}
        />
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Variants:</p>
          <select
            className="form-control"
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
          >
            {pizza.varients.map((variant) => {
              return (
                <option key={variant} value={variant}>
                  {variant}
                </option>
              );
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity:</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys()].map((value, index) => {
              return (
                <option key={index} value={value + 1}>
                  {value + 1}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <h1 className="mt-1">
            Price: ${pizza.prices[0][variant] * quantity}
          </h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn"> ADD TO CART</button>
        </div>
      </div>

      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={pizza.image}
            alt=""
            className="img-fluid"
            style={{ height: 300, width: 300 }}
          />
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            {" "}
            close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Pizza;
