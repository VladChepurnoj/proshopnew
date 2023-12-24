import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import { useGetProductsQuery } from "../slices/productsApiSlice";

const HomeScreen = () => {
	const { pageNumber, keyword } = useParams();

	const { data, isLoading, error } = useGetProductsQuery({
		keyword,
		pageNumber,
	});

	return (
		<Fragment>
			{isLoading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">
					{error?.data?.message || error.error}
				</Message>
			) : (
				<Fragment>
					<h1>Latest Products</h1>
					<Row>
						{data.products.map((product) => (
							<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
								<Product product={product} />
							</Col>
						))}
					</Row>
					<Paginate
						pages={data.pages}
						page={data.page}
						keyword={keyword ? keyword : ""}></Paginate>
				</Fragment>
			)}
		</Fragment>
	);
};

export default HomeScreen;
