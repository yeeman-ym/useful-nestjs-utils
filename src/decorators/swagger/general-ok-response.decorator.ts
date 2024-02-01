import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { ApiGeneralErrorResponse } from './general-error-responses.decorator';

export function ApiGeneralOkResponse() {
  return applyDecorators(
    ApiOkResponse({ description: 'Success' }),
    ApiGeneralErrorResponse(),
  );
}
