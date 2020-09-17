import { CSSProperties } from "react";

export function getAnimDelayStyle(time: number, offset=25): CSSProperties {
  return { animationDelay: `${time * offset}ms` }
}