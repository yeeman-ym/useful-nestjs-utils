import { applyDecorators } from "@nestjs/common";
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiUnauthorizedResponse,
} from "@nestjs/swagger";

export function ApiGeneralErrorResponse() {
  return applyDecorators(
    ApiBadRequestResponse({ description: "Validation error" }),
    ApiUnauthorizedResponse({ description: "Unauthorized" }),
    ApiInternalServerErrorResponse({ description: "Unknown error" }),
  );
}
