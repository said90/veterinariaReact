import React, { Component } from 'react';
import Header from './Components/Header';
import FormCita from './Components/FormCita';
import ListCita from './Components/ListCitas';


class App extends Component {
  state = {
    citas: []
  }

  componentDidMount() {
    console.log('Esta listo!');
    const citasLS = localStorage.getItem('citas');
      if(citasLS){
        this.setState({
          citas: JSON.parse(citasLS)
        })
      }
  }

  componentWillMount() {
    console.log('Me ejecuto primero!');


  }

  componentWillUnmount() {
    console.log('Yo me ejecuto hasta que se cierra el componente');

  }

  componentDidUpdate() {
    console.log('Me ejecute porque algo cambio en el componente');
    localStorage.setItem(
      'citas',
      JSON.stringify(this.state.citas)
    )

  }


  agregarCita = (nuevaCita) => {
    const citas = [...this.state.citas, nuevaCita];
    console.log('citas')


    this.setState({
      citas
    })
  }

  borrarCita = id => {
    //copiar state
    console.log(id);
    const citasActuales = [...this.state.citas];

    //borrar el elemento del state
    const citas = citasActuales.filter(cita => cita.id !== id);
    //Actualizar el state
    this.setState({
      citas
    })

  }


  render() {
    return (
      <div className="container">
        <Header
          title={'Administracion de Veterinaria'}
        />
        <div className="row">
          <div className="col-md-6">
            <FormCita agregarCita={this.agregarCita}
            />
          </div>
          <div className="col-md-6">
            <ListCita citas={this.state.citas}
              borrarCita={this.borrarCita}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
