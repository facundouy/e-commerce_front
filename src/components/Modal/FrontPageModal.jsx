import { Modal, Button } from "react-bootstrap";
import axios from "axios";

function FrontPageModal({ show, setShow }) {
	const handleClose = () => setShow(false);
	const resetDataBase = async () => {
		await axios.post(`${process.env.REACT_APP_BACKEND_URL}/reset`);
	};
	return (
		<div>
			{" "}
			<Modal
				show={show}
				size='lg'
				aria-labelledby='contained-modal-title-vcenter'
				centered>
				<Modal.Header closeButton onClick={handleClose}>
					<Modal.Title id='contained-modal-title-vcenter'>Welcome!</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>For a better expirience you may want to reset the database</p>
				</Modal.Body>
				<Modal.Footer>
					<Button
						onClick={() => {
							resetDataBase();
							handleClose();
						}}>
						Reset
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default FrontPageModal;
