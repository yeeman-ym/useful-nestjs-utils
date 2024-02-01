import {
  createParamDecorator,
  ExecutionContext,
  Paramtype,
  ParseUUIDPipe,
} from "@nestjs/common";

export const UuidFromParam = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const { id } = request.params;

    return new ParseUUIDPipe().transform(id, {
      type: "param" as Paramtype,
      data,
    });
  },
);
