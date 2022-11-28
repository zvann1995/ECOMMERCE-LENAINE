import React from "react";
import { Container, Row } from "react-bootstrap";
import '../productos.css';
import DataGrid from "../../grid/grid";
import ConfirmationPromprs from "../../prompts/confirmation";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessagePrompt from "../../prompts/message";



const columns = [{
  dataField: '_id',
  text: 'ID',
  hidden: true,
}, {
  dataField: 'nombre',
  text: 'Nombre'
}, {
  dataField: 'cantidad',
  text: 'Cantidad'
}, {
  dataField: 'precio',
  text: 'Precio'
}];


export default class ProductosBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      idProducto: null,
      confirmation: {
        title: 'Eliminar el producto',
        text: '¿Deseas eliminar el producto?',
        show: false,
      },
      message: {
        text: '',
        show: false,
      },
    };

    this.onClickEditButton = this.onClickEditButton.bind(this);
    this.onClickDeleteButton = this.onClickDeleteButton.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);

  }

  onClickEditButton(row) {
    this.props.setIdProducto(row._id);

    this.props.changeTab('editar');
  }

  onClickDeleteButton(row) {
    this.setState({
      idProducto: row._id,
      confirmation: {
        ...this.state.confirmation,
        show: true,
      },
    });
  }

  onCancel() {
    this.setState({
      confirmation: {
        ...this.state.confirmation,
        show: false,
      },
    });
  }

  onConfirm() {
    this.setState({
      confirmation: {
        ...this.state.confirmation,
        show: false,
      },
    },
      this.eliminarProducto()
    );
  }
  eliminarProducto() {
    this.setState({ loading: true });
    request
      .delete(`/productos/${this.state.idProducto}`)
      .then((response) => {
        this.setState({
          loading: false,
          message: {
            text: response.data.msg,
            show: true,
          },
        });
        if (response.data.exito) window.location.reload();
      })
      .catch((err) => {
        console.error(err);
        this.setState({ loading: false });
      });
  }

  reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  }

  render() {

    return (
      <Container id="producto-buscar-container">

        <ConfirmationPromprs
          show={this.state.confirmation.show}
          title={this.state.confirmation.title}
          text={this.state.confirmation.text}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
        />
        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
        />
        <Loading show={this.state.loading} />
        <Row>
          <h1>Buscar Productos</h1>
        </Row>
        <Row>
          <DataGrid
            url="/productos"
            columns={columns}
            showEditButton={true}
            showDeleteButton={true}
            onClickEditButton={this.onClickEditButton}
            onClickDeleteButton={this.onClickDeleteButton}
          />

        </Row>
      </Container>
    );
  }
}