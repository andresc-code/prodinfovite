
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import "bootstrap/dist/css/bootstrap.min.css";


const CardProduct = ({ img, title, code, reference, color, group, category, subcategory, gender, status, collection, brand, style, provide, line, rotation, days_in_store, prevPrice, newPrice  }) => {
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
                <ListGroup.Item>Cod : {code}</ListGroup.Item>
                <ListGroup.Item>Ref : {reference}</ListGroup.Item>
                <ListGroup.Item>Color : {color}</ListGroup.Item>
                <ListGroup.Item>Group : {group}</ListGroup.Item>
                <ListGroup.Item>Category : {category}</ListGroup.Item>
                <ListGroup.Item>Subcategory : {subcategory}</ListGroup.Item>
                <ListGroup.Item>Gender : {gender}</ListGroup.Item>
                <ListGroup.Item>Status : {status}</ListGroup.Item>
                <ListGroup.Item>Collection : {collection}</ListGroup.Item>
                <ListGroup.Item>Brand : {brand}</ListGroup.Item>
                <ListGroup.Item>Style : {style}</ListGroup.Item>
                <ListGroup.Item>Provide : {provide}</ListGroup.Item>
                <ListGroup.Item>Rotacion : {rotation}</ListGroup.Item>
                <ListGroup.Item>Days Store : {days_in_store}</ListGroup.Item>
                <ListGroup.Item>Price : {newPrice}</ListGroup.Item>
                
            </ListGroup>
        </Tab>
        <Tab eventKey="contact" title="Rotation" >

        <Table striped bordered hover size="sm">
        <tr>
                                          <td>Price: 59900</td>
                                          <td>% Des: 12.82%</td>
                                            </tr>
                                            <tr>
                                          <td>Income: 2017</td>
                                          <td>Days: 122</td>
                                            </tr>
                                            <tr>
                                          <td>Goal: 2015</td>
                                          <td>Sales: 1353</td>
                                            </tr>
                                            <tr>
                                          <td>Stock T: 664</td>
                                          <td>Stock B: 71</td>
                                            </tr>
                                            <tr>
                                          <td>%Rot: 67.08%</td>
                                          <td>%Rot Deb: 100.00%</td>
                                            </tr>

            </Table>

            <>&nbsp;&nbsp;&nbsp;&nbsp;</>
            <Table striped bordered hover size="sm">
            <tr>
                                    <th scope="row" id="titulo">COLOR</th>
                                    <th id="titulo">Sale</th>
                                    <th id="titulo">Inv</th>
                                    <th id="titulo">Rot</th>
                                        </tr>
                                        <tr>
                                    <th>Blue</th>
                                    <td>1042</td>
                                    <td>738</td>
                                    <td>70,83%</td>
                                        </tr>
                                        <tr>
                                    <th>White</th>
                                    <td>120</td>
                                    <td>107</td>
                                    <td>89,17%</td>
                                        </tr>
                                        <tr>
                                    <th>Green</th>
                                    <td>782</td>
                                    <td>508</td>
                                    <td>64,96%</td>
                                        </tr>
            </Table>
            <>&nbsp;&nbsp;&nbsp;&nbsp;</>
            <Table striped bordered hover size="sm">
            <tr>
                                          <th scope="row" id="titulo">Section</th>
                                          <th id="titulo">Goal</th>
                                          <th id="titulo">Sale</th>
                                          <th id="titulo">Comp</th>
                                            </tr>
                                            <tr>
                                          <th>Stores</th>
                                          <td>1042</td>
                                          <td>738</td>
                                          <td>59,83%</td>
                                            </tr>
                                            <tr>
                                          <th>E-Commerce</th>
                                          <td>120</td>
                                          <td>107</td>
                                          <td>70,17%</td>
                                            </tr>
                                            <tr>
                                          <th>Franchise</th>
                                          <td>782</td>
                                          <td>508</td>
                                          <td>38,96%</td>
                                            </tr>
            </Table>

        </Tab>
      </Tabs> 
     
      </section>
     
    </>
  );
};

export default CardProduct;