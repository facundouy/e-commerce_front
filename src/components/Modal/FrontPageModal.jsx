import { Modal, Button } from "react-bootstrap";
import "./frontPageModal.css";
import axios from "axios";
import { useState } from "react";

function FrontPageModal({ show, setShow }) {
	const [loading, setLoading] = useState(null);
	const handleClose = () => setShow(false);
	const resetDataBase = async () => {
		const response = await axios.post(
			`${process.env.REACT_APP_BACKEND_URL}/reset`
		);
		setLoading(response.data);
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
					<Modal.Title
						className='modal-title'
						id='contained-modal-title-vcenter'>
						Welcome!
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className='text-center'>
					<p>For a better experience you may want to reset the database.</p>
				</Modal.Body>
				<Modal.Footer className='justify-content-center'>
					<Button
						className='modal-btn'
						onClick={() => {
							resetDataBase();
							loading ? handleClose() : <span></span>;
						}}>
						Reset
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default FrontPageModal;
