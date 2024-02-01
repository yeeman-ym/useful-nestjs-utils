import { applyDecorators } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { ClassConstructor } from 'class-transformer';
import { ApiGeneralErrorResponse } from './general-error-responses.decorator';

export function ApiGeneralCreateResponse(type: ClassConstructor<unknown>) {
  return applyDecorators(
    ApiCreatedResponse({ description: 'Created', type }),
    ApiGeneralErrorResponse(),
  );
}
