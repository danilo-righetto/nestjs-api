import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDTO } from './dto/create-todo.dto';
import { Todo } from './entity/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  );

  async findAll(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async findOne(id: string): Promise<Todo> {
    return await this.todoRepository.findOne(id);
  }

  async create(todo: CreateTodoDTO): Promise<Todo> {
    return await this.todoRepository.save(todo);
  }
}
