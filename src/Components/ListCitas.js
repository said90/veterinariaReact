import React, { Component } from 'react'
import Cita from './Cita'
export class ListCita extends Component {


    render() {
        const citas = this.props.citas;
        const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra tus Citas Aqui';
        return (


            <div className="card mt-5">
                <div class-name="card-body">
                    <h2 className="card-title text-center">{mensaje}</h2>

                    <div className="lista-citas">
                        {Object.keys(this.props.citas).map(cita => (
                            <Cita
                                key={cita}
                                info={this.props.citas[cita]} 
                                borrarCita={this.props.borrarCita}
                            />
                        ))}
                    </div>
                </div>

            </div>
        );
    }
}

export default ListCita;
