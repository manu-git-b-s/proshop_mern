import { Col, Row } from "react-bootstrap";
// import Product from "../components/Product";
// import { useGetProductsQuery } from "../slices/productsApiSlice";
// import Loader from "../components/Loader";
// import Message from "../components/Message";
// import { Link, useParams } from "react-router-dom";
// import Paginate from "../components/Paginate";
// import ProductCarousel from "../components/ProductCarousel";
// import Meta from "../components/Meta";
import products from "../products";
import Product from "../components/Product";

const Home = () => {
  //   const { pageNumber, keyword } = useParams();
  //   const { data, isLoading, error } = useGetProductsQuery({
  //     keyword,
  //     pageNumber,
  //   });

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
