import "@emotion/react";
import { AppTheme } from "./theme";

declare module "@emotion/react" {
  type Theme = AppTheme;
}
