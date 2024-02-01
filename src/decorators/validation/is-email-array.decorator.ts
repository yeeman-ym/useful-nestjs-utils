import { applyDecorators } from "@nestjs/common";
import { ArrayNotEmpty, IsArray, IsEmail } from "class-validator";

export function IsEmailArray() {
  return applyDecorators(
    ArrayNotEmpty(),
    IsArray(),
    IsEmail({}, { each: true }),
  );
}
