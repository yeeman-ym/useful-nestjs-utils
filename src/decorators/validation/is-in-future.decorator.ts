import { applyDecorators } from "@nestjs/common";
import { IsDate, MinDate } from "class-validator";
import { TransformStringToDate } from "../transformation";

export function IsInFuture() {
  return applyDecorators(
    IsDate(),
    MinDate(new Date()),
    TransformStringToDate(),
  );
}
