
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import "bootstrap/dist/css/bootstrap.min.css";

const CardProduct = ({ img, title, code, reference, brand, family, type, prevPrice, newPrice  }) => {
  return (
    <>
    <section className="card">
      
        <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
        <Tab eventKey="home" title="Image">
            <Card.Title>{title}</Card.Title>
            <Card.Img variant="top" src={img} className="imgCard" />
        </Tab>
        <Tab eventKey="profile" title="Info">
            <ListGroup variant="flush">
                <ListGroup.Item>{title}</ListGroup.Item>
                <ListGroup.Item>Cod :{code}</ListGroup.Item>
                <ListGroup.Item>Ref :{reference}</ListGroup.Item>
                <ListGroup.Item>Brand : {brand}</ListGroup.Item>
                <ListGroup.Item>Family : {family}</ListGroup.Item>
                <ListGroup.Item>Line :{type}</ListGroup.Item>
            </ListGroup>
        </Tab>
        <Tab eventKey="contact" title="Rotation" >
            <Table striped bordered hover size="sm">
                <thead><tr><th>Color</th></tr></thead>
                <tbody>
                    <tr><td>010-Blue</td></tr>
                    <tr><td>325-Yellow</td></tr>
                </tbody>
            </Table>
        </Tab>
      </Tabs> 
     
      </section>
     
    </>
  );
};

export default CardProduct;