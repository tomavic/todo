export class BaseTodoDto {
  title: string;
  description?: string;
}

export class CreateTodoDto extends BaseTodoDto {}

export class UpdateTodoDto extends BaseTodoDto {
  completedAt: Date;
}
