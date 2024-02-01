import { applyDecorators } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import { ClassConstructor } from "class-transformer";
import { ApiGeneralErrorResponse } from "./general-error-responses.decorator";

export function ApiGeneralEditResponse(type: ClassConstructor<unknown>) {
  return applyDecorators(
    ApiOkResponse({ description: "Success", type }),
    ApiGeneralErrorResponse(),
  );
}
