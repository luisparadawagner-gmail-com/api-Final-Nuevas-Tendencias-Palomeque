import {Schema, model} from 'mongoose';

const schemaPasajero = new Schema({
    
    nombre: String,
    apellido: String,
    edad: Number,
    fechaDeNacimiento: Date

});

export let pasajeroSchema = model('Pasajero', schemaPasajero,'pasajero');