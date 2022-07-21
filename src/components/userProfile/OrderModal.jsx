import { Modal, Button, Table } from "react-bootstrap";

function OrderModal({ currentOrder, setCurrentOrder }) {
  if (currentOrder) {
    return (
      <Modal show={currentOrder} onHide={() => setCurrentOrder(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table>
            <thead>
              <tr className="table-row">
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {currentOrder.products.map((product) => {
                return (
                  <tr key={currentOrder._id} className="table-row">
                    <td>{product.name}</td>
                    <td>{product.quantity}</td>
                    <td>${product.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setCurrentOrder(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default OrderModal;
