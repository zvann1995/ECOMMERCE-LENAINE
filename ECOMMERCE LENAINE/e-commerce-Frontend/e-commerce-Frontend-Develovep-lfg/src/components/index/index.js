import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import tienda1 from '../../assets/closet_clothes.jpg';
import tienda2 from '../../assets/Tienda-2.jpg';
import tienda3 from '../../assets/Tienda-3.jpg';
import tienda4 from '../../assets/Tienda-4.jpg';
import item1 from '../../assets/Items/Items-1.jpeg';
import Card from 'react-bootstrap/Card';
import './index.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={{ backgroundColor: 'rgb(255 245 255)' }}>
                <Carousel style={{ marginTop: 55 }}>
                    <Carousel.Item interval={1000}>
                        <img
                            className="styleImage"
                            src={tienda1}
                            alt="Stylo Lenanie"
                        />
                        <Carousel.Caption>
                            <h3 style={{ color: 'white' }} className=" titleCarousel titleCarousel-background">Stylo Lenanie</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="styleImage"
                            src={tienda2}
                            alt="Stylo Lenanie"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="styleImage"
                            src={tienda3}
                            alt="Stylo Lenanie"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className='subTitle ms-6 mt-5'><h4  style={{color: ' rgb(79 3 104)'}}>Descubre lo que la gente está comprando
                </h4>
                    <h5 style={{color: 'rgb(102 2 135)'}}>Inspírate y se parte de Stylo Lenanie</h5>
                </div>

                <div className='ms-5 me-5 mt-3'>
                    <Row className='ms-5 me-5'>
                        <Col><Card className='max-card'>
                            <Card.Img src={item1} alt="Card image" className='cardImage' />
                            <Card.Body>
                                <Card.Title>Hombre MC-79</Card.Title>
                                <Card.Text>
                                    Dr. Martens Bonny Chukka Boot
                                    <p>Desde 1000$</p>
                                </Card.Text>
                                <Button variant="primary">Adquirir</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col><Card className='max-card'>
                            <Card.Img src={item1} alt="Card image" className='cardImage' />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col><Card className='max-card'>
                            <Card.Img src={item1} alt="Card image" className='cardImage' />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col><Card className='max-card'>
                            <Card.Img src={item1} alt="Card image" className='cardImage' />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card></Col>
                    </Row>


                </div>
            </div>
        );
    }
}
