import { applyDecorators } from "@nestjs/common";
import { IsArray, IsMongoId, IsString } from "class-validator";

export function IsMongoIdArray() {
  return applyDecorators(
    IsArray(),
    IsString({ each: true }),
    IsMongoId({ each: true }),
  );
}
