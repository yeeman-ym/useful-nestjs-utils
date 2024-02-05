# Useful NestJS Utils

A collection of useful decorators for NestJS applications.

## Installation

```
npm install useful-nestjs-utils
```

or

```
yarn add useful-nestjs-utils
```

## Usage

### Importing

Import the decorators you need from the package:

```typescript
import {
  Trim,
  IsMongoIdArray,
  ValidateCompositeType,
} from "useful-nestjs-utils";
```

### Decorators

Below is the complete list of decorators provided by this package, organized by their respective folders:

#### Requests

- `Public`
- `User`
- `UUIDFromParam`

#### Transformation

- `TransformStringToDate`
- `TransformStringBoolean`
- `Trim`

#### Validation

- `DateIsAfter`
- `IsEmailArray`
- `IsInFuture`
- `IsMongoIdArray`
- `ValidateCompositeType`

#### Swagger

- `ApiGeneralCreateResponse`
- `ApiGeneralEditResponse`
- `ApiGeneralErrorResponse`
- `ApiGeneralGetResponse`
- `ApiGeneralOkResponse`

### Examples

The following examples demonstrate simple usages of some of the decorators.

#### User

Retrieves user document from request.

Example:

```typescript
import { User } from "useful-nestjs-utils";

@Controller("users")
export class UsersController {
  @Get("profile")
  getProfile(@User() user: UserEntity) {
    return user;
  }
}
```

#### UUIDFromParam

Example:

```typescript
import { UUIDFromParam } from "useful-nestjs-utils";

@Controller("items")
export class ItemsController {
  @Get(":id")
  getItem(@UUIDFromParam() itemId: string) {
    return `Retrieving item with ID: ${itemId}`;
  }
}
```

#### Trim

Removes leading and trailing whitespace from string inputs.

Example:

```typescript
import { Trim } from "useful-nestjs-utils";

export class CreateDto {
  @IsString()
  @Trim()
  name: string;
}
```

#### TransformStringToDate and DateIsAfter

Transforms and validates date inputs.

Example:

```typescript
import {
  Expose,
  IsDefined,
  IsDate,
  Transform,
  DateIsAfter,
  TransformStringToDate,
} from "useful-nestjs-utils";

export class DateRangeDto {
  @Expose()
  @IsDefined()
  @IsDate()
  @TransformStringToDate()
  startDate: Date;

  @Expose()
  @IsDefined()
  @IsDate()
  @TransformStringToDate()
  @DateIsAfter("startDate")
  endDate: Date;
}
```

#### ValidateCompositeType

Validates composite types.

Example:

```typescript
import { Expose, IsOptional, ValidateCompositeType } from "useful-nestjs-utils";

export class ReminderDto {
  @Expose()
  @IsOptional()
  @ValidateCompositeType(SomeOtherDto)
  reminder?: SomeOtherDto;
}
```

## Compatibility

This package is compatible with NestJS.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
