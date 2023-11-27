export function renderTemplateAsString(data: any) {
  const {strings, values} = data;
  const value_list = [...values, ''];  // + last empty part
  let output = '';
  for (let i = 0; i < strings.length; i++) {
      let v = value_list[i];
      if (v._$litType$ !== undefined) {
          v = template_as_string(v);  // embedded Template
      } else if (v instanceof Array) {
          // array of strings or templates.
          let new_v = '';
          for (const inner_v of [...v]) {
              new_v += template_as_string(inner_v);
          }
          v = new_v;
      }
      output += strings[i] + v;
  }
  return output;
}