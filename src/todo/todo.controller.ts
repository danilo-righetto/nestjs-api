import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTodoDTO } from './dto/create-todo.dto';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService);

  @Get()
  async index() {
    return await this.todoService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return this.todoService.findOne(id);
  }

  @Post()
  async create(@Body() todo: CreateTodoDTO) {
    return this.todoService.create(todo);
  }
}
