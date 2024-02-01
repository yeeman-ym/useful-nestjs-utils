import { Transform } from "class-transformer";

export const TransformStringBoolean = () =>
  Transform(({ value }) => {
    if (value === "true") return true;
    if (value === "false") return false;
    return value;
  });
