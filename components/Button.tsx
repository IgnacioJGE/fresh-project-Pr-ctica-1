

import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
export const recargarpagina = () => {
  location.reload();
  console.log("click")
};
export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button onClick={recargarpagina}{...props}>
      {props.children}
    </button>
  );
}
