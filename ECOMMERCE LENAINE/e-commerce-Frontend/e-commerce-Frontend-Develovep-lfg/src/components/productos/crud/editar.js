import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import '../productos.css';
import { request } from '../../helper/helper';
import Loading from '../../loading/loading';
import MessagePrompt from '../../prompts/message';
import ConfirmationPromprs from '../../prompts/confirmation';

export default class ProductosEditar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idProducto: this.props.getIdProducto(),
            rediret: false,
            message: {
                text: "",
                show: false
            },
            confirmation: {
                title: 'Modificar producto',
                text: '¿Desea modificar el producto?',
                show: false,
            },
            loading: false,
            producto: {
                nombre: "",
                cantidad: "",
                precio: "",
            },
        };
        this.onExitedMessage = this.onExitedMessage.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
    }
    componentDidMount() {
        this.getProducto();
    }

    getProducto() {
        this.setState({ loading: true });
        request
            .get(`/productos/${this.state.idProducto}`)
            .then((response) => {
                this.setState({
                    producto: response.data,
                    loading: false,
                });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
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
            .put(`/productos/${this.state.idProducto}`, this.state.producto)
            .then((response) => {
                if (response.data.exito) {
                    this.setState({
                        rediret: response.data.exito,
                        message: {
                            text: response.data.msg,
                            show: true,
                        },
                    });
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
    onCancel() {
        this.setState({
            confirmation: {
                ...this.state.confirmation,
                show: false,
            },
        })
    }
    onConfirm() {
        this.setState({
            confirmation:{
                ...this.state.confirmation,
                show: false,
            },
        },
        this.guardarProductos()
        );
    }
    render() {
        return (
            <Container id="productos-crear-container">
                <MessagePrompt text={this.state.message.text}
                    show={this.state.message.show}
                    duration={2500}
                    onExited={this.onExitedMessage} />
                <ConfirmationPromprs
                    show={this.state.confirmation.show}
                    title={this.state.confirmation.title}
                    text={this.state.confirmation.text}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}
                />
                <Loading show={this.state.loading} />
                <Row>
                    <h1>Editar Productos</h1>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                value={this.state.producto.nombre}
                                onChange={(e) => this.setValue('nombre', e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Cantidad</Form.Label>
                            <Form.Control
                                value={this.state.producto.cantidad}
                                onChange={(e) => this.setValue('cantidad', e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                value={this.state.producto.precio}
                                onChange={(e) => this.setValue('precio', e.target.value)} />
                        </Form.Group>
                        
                        <Button variant="primary"
                            onClick={() => this.setState({
                                confirmation: { ...this.state.confirmation, show: true },
                            })
                            }
                        >
                            Guardar Producto
                        </Button>
                    </Form>
                </Row>
            </Container>
        );
    }
}



