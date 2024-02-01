import { applyDecorators } from "@nestjs/common";
import { IsDate, MinDate } from "class-validator";
import { TransformStringToDate } from "../transformation/transform-date-string.decorator";

export function IsInFuture() {
  return applyDecorators(
    IsDate(),
    MinDate(new Date()),
    TransformStringToDate()
  );
}
