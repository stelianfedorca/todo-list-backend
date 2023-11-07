import * as todosController from '../index';
import { Request, Response } from 'express';

describe('Test getTodos', () => {
  it('should return the todos from database', async () => {
    const req = {
      query: {},
    } as unknown as Request;

    const res = {
      json: jest.fn(),
    } as unknown as Response;

    jest.spyOn(todosController, 'getTodos');

    const expectedResult = {
      data: [
        {
          _id: '63e14df8d98acfa5947cd48e',
          name: 'todo1',
          description: 'desc1',
          status: false,
          createdAt: '2023-02-06T18:59:04.556Z',
          updatedAt: '2023-02-06T18:59:04.556Z',
          __v: 0,
        },
        {
          _id: '63fb7cf6a7a54507e574334d',
          name: 'Todo 2',
          description: 'Description todo 2',
          status: false,
          createdAt: '2023-02-26T15:38:30.650Z',
          updatedAt: '2023-02-26T15:38:30.650Z',
          __v: 0,
        },
      ],
    };

    await todosController.getTodos(req, res);

    expect(res.json).toHaveBeenCalledWith(expectedResult);
  });
});
