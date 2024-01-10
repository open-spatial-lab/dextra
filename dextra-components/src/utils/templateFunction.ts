import { html } from "lit";

const USE_STATIC_OUTPUT = true;

// @ts-ignore
function simpleHtmlTemplate(strings, ...values) {
  let result = '';
  // @ts-ignore
  strings.forEach((string, i) => {
      result += string + (values[i] || '');
  });
  return result;
}

// @ts-ignore
function wrappedPreTemplate(strings, ...values){
  const result = simpleHtmlTemplate(strings, ...values);
  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = result;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Copied to clipboard');
  }
  return html`
    <button @click=${copyToClipboard}>Copy to clipboard</button>
    <br/>
    <code>${result}</code>
  `;
}
export const innerTemplate = USE_STATIC_OUTPUT  ? simpleHtmlTemplate : html
export const template = USE_STATIC_OUTPUT ? wrappedPreTemplate : html;