import { applyDecorators } from '@nestjs/common';
import { Transform } from 'class-transformer';

export function TransformStringToDate() {
  return applyDecorators(Transform(({ value }) => value && new Date(value)));
}
