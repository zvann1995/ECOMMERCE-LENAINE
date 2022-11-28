import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import '../productos.css';
import { request } from '../../helper/helper';
import Loading from '../../loading/loading';
import MessagePrompt from '../../prompts/message';


export default class ProductosCrear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rediret: false,
            message: {
                text: "",
                show: false
            },
            loading: false,
            producto: {
                nombre: "",
                cantidad: "",
                precio: "",
            },
        };
        this.onExitedMessage = this.onExitedMessage.bind(this);
    }
    setValue(inicioe, value) {
        this.setState({
            producto: {
                ...this.state.producto,
                [inicioe]: value,
            },
        });
    }
    guardarProductos() {
        this.setState({ loading: true });
        request
            .post('/productos', this.state.producto)
            .then((response) => {
                if (response.data.exito) {
                    this.setState({
                        rediret: response.data.exito,
                        message: {
                            text: response.data.msg,
                            show: true,
                        },
                    })
                }
                this.setState({ loading: false });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: true });
            })
    }

    onExitedMessage() {
        if (this.state.rediret) this.props.changeTab('buscar');
    }
    render() {
        return (
            <Container id="productos-crear-container">
                <MessagePrompt text={this.state.message.text}
                    show={this.state.message.show}
                    duration={2500}
                    onExited={this.onExitedMessage} />
                <Loading show={this.state.loading} />
                <Row>
                    <h1>Crear Productos</h1>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control onChange={(e) => this.setValue('nombre', e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Cantidad</Form.Label>
                            <Form.Control onChange={(e) => this.setValue('cantidad', e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control onChange={(e) => this.setValue('precio', e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" onClick={() => console.log(this.guardarProductos())}>
                            Guardar Producto
                        </Button>
                    </Form>
                </Row>
            </Container>
        );
    }
}



