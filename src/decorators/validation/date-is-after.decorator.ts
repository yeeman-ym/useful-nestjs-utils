import {
  ValidationArguments,
  ValidationOptions,
  registerDecorator,
} from "class-validator";
import { isAfter } from "date-fns";

/**
 * DateIsAfter decorator to validate if a date is after another date.
 * Both dates must be in provided to do the checking.
 * @param property
 * @param validationOptions
 * @returns
 */
export function DateIsAfter(
  property: string,
  validationOptions?: ValidationOptions
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: "DateIsAfter",
      target: object.constructor,
      propertyName,
      constraints: [property],
      options: {
        message: `${propertyName} should not be earlier than ${property}`,
        ...validationOptions,
      },
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];

          return (
            value &&
            relatedValue &&
            isAfter(new Date(value), new Date(relatedValue))
          ); // you can return a Promise<boolean> here as well, if you want to make async validation
        },
      },
    });
  };
}
