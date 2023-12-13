import { html } from "lit";

const USE_STATIC_OUTPUT = false;

// @ts-ignore
function simpleHtmlTemplate(strings, ...values) {
  let result = '';
  // @ts-ignore
  strings.forEach((string, i) => {
      result += string + (values[i] || '');
  });
  console.log(result)
  return result;
}

export const template = USE_STATIC_OUTPUT ? simpleHtmlTemplate : html;