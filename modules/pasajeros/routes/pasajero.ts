import * as express from 'express';
import { pasajeroSchema } from '../schemas/pasajero';

const router = express.Router();

router.get('/pasajero', async (req, res) => {
	try {
		let pasajero = await pasajeroSchema.find();
		res.send(pasajero);
	} catch (err) {
		throw err;
	}
});

router.get('/pasajeroId/:id', async (req, res) => {
	let idPasajero = req.params.id;
	try {
		let pasajeros = await pasajeroSchema.findById(idPasajero);
		res.send(pasajeros);
	} catch (err) {
		throw err;
	}
});

router.post('/pasajero', async (req, res) => {
	try {
		const pasajero = new pasajeroSchema(req.body);
		let pasajeroNuevo = await pasajero.save();

		res.send(pasajeroNuevo);
	} catch (err) {
		throw err;
	}
});

router.put('/pasajero/:id', async (req, res, next) => {
	try {
		let pasajero = await pasajeroSchema.findByIdAndUpdate(req.params.id, req.body);

		res.send(pasajero);
	} catch (err) {
		throw err;
	}
});
router.delete('/pasajero/:_id', async (req, res, next) => {
	
	pasajeroSchema.findByIdAndRemove(req.params._id, (err, curso) => {
	  if (err) {
		console.log('Error: ', err);
	  }
	  console.log('Pasajero eliminado: ', curso);
	});
  });
  export = router;