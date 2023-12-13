import { html } from "lit";

// @ts-ignore
function myfunc(strings, ...values) {
  return strings[0];
}

export const template = process.env.STATIC_OUTPUT ? myfunc : html;