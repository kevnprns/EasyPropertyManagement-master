import * as express from 'express';

import { PropertyService } from './property.service';

const propertyService = new PropertyService();

const controller = express.Router();

controller.post('/', async (req, res) => {
  const query = req.body;
  const properties = await propertyService.listProperties(query, req.query.offset, req.query.limit);
  res.send(properties);
});

controller.put('/', async (req, res) => {
  const query = req.body;
  const propertyId = await propertyService.updateProperty(query);
  res.send({propertyId: propertyId});
});

export { controller as PropertyController };
