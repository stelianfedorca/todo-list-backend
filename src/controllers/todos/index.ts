import { Request, Response } from 'express';
import Todo from '../../models/todo.model';
import { ITodo } from '../../types/todo';

/**
 *
 
 * @returns {Promise} all the todos from PostgreSQL database
 */
export const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: ITodo[] = await Todo.find();

    if (!todos) {
      res.status(404).json({ message: 'Todos not found' });
    }
    res.status(200).json({ data: todos });
  } catch (error) {
    throw error;
  }
};

export const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<ITodo, 'name' | 'description' | 'status'>;

    const todo: ITodo = new Todo({
      name: body.name,
      description: body.description,
      status: body.status,
    });

    const newTodo: ITodo = await todo.save();
    const allTodos: ITodo[] = await Todo.find();

    res.status(201).json({ message: 'Todo added', todos: allTodos });
  } catch (error) {
    throw error;
  }
};

export const updateTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const updatedTodo: ITodo | null = await Todo.findByIdAndUpdate(id, body);

    const allTodos: ITodo[] = await Todo.find();

    res.status(200).json({
      message: 'Todo updated',
      todo: updatedTodo,
      todos: allTodos,
    });
  } catch (error) {
    throw error;
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;
    const deletedTodo: ITodo | null = await Todo.findByIdAndDelete(id);

    const allTodos: ITodo[] = await Todo.find();

    res.status(200).json({
      message: 'Todo deleted',
      todos: allTodos,
    });
  } catch (error) {
    throw error;
  }
};
