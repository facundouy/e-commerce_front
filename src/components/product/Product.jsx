import "./product.css";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import Axios from "axios";

function Product() {
	const [productList, setProductList] = useState([]);
	useEffect(() => {
		const getProducts = async () => {
			try {
				const response = await Axios.get("http://localhost:3001/api/products");
				setProductList(response.data);
				console.log("-------", productList);
			} catch (error) {
				console.log(error);
			}
		};
		getProducts();
	}, []);
	return (
		<div className='product-container'>
			<ListGroup>
				{productList &&
					productList.map((product) => {
						return (
							<ListGroup.Item>
								<Card style={{ width: "18rem" }}>
									<Card.Img
										variant='top'
										src={`http://localhost:3001/images/${product.image}`}
									/>
									<Card.Body>
										<Card.Title>{product.name}</Card.Title>
										<Card.Text>{product.description}</Card.Text>
									</Card.Body>
								</Card>
							</ListGroup.Item>
						);
					})}
			</ListGroup>
		</div>
	);
}

export default Product;
