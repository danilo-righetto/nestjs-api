export class DefaultResponseDTO<T> {
  status: string;
  code: number;
  errors: { [key: string]: any };
  result: T;
}
