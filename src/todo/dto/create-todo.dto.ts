import { IsNotEmpty } from 'class-validator';
import { Todo } from '../entity/todo.entity';
import { DefaultResponseDTO } from './default-response.dto';

export class CreateTodoDTO {
  @IsNotEmpty({ message: 'Required field' })
  name: string;

  @IsNotEmpty({ message: 'Required field' })
  description: string;
}

export class CreateTodoResponseDTO extends DefaultResponseDTO<Todo[]> {};
