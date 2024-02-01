import { applyDecorators } from "@nestjs/common";
import { Type, ClassConstructor } from "class-transformer";
import { IsObject, ValidateNested } from "class-validator";

export function ValidateCompositeType(
  CompositeTypeDTO: ClassConstructor<object>,
  isArray = false
) {
  return applyDecorators(
    IsObject({ each: isArray }),
    ValidateNested({ each: isArray }),
    Type(() => CompositeTypeDTO)
  );
}
