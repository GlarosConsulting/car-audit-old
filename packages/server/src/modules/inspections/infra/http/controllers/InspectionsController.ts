import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateInspectionService from '@modules/inspections/services/CreateInspectionService';

export default class InspectionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { files } = request;

    console.log(files);

    const createInspection = container.resolve(CreateInspectionService);

    const user = await createInspection.execute({
      filenames: {
        forward: '',
        croup: '',
        left_side: '',
        right_side: '',
        motor: '',
        chassi: '',
        document: '',
        panel: '',
      },
    });

    return response.json(classToClass(user));
  }
}
