export const interpretFuncJsonOrString = (value: string | null, _type: unknown) => {
  if (value === null) {
    return value;
  }
  // regex to check if string contians (*)=>
  const isArrowFunction = /\(\w+\)\s*=>/g.test(value);
  // regex to check if arrow function with no parenthesis
  const isArrowFunctionNoParenthesis = /\w+\s*=>/g.test(value);
  // regex to check if string is stringified function
  const isNormalFunction = /^function\s*\([^\)]*\)\s*\{.*\}$/s.test(value);
  if (isArrowFunction || isArrowFunctionNoParenthesis) {
    const splitArrowSimpleParts = value.split("=>")
    const parts = isArrowFunctionNoParenthesis
      ? [null, null, splitArrowSimpleParts[0], splitArrowSimpleParts[1]]
      : /^\s*([^\(]*)?\s*\(?([^\)]*)\)?\s*=>\s*{?([\s\S]*)}?/.exec(value);

    if (parts?.length && parts.length > 3) {
      const p = parts as RegExpExecArray;
      let body = p[3];
      // check if implicit return
      if (!body.includes("return")) {
        body = "return " + body;
      }
      // check if last character is } and slice
      if (body[body.length - 1] === "}") {
        body = body.slice(0, -1);
      }
      return new Function(p[2], body);
    } else {
      return (d: any) => d;
    }
  }
  if (isNormalFunction) {
    const parts = /function\s*([^\(]*)\s*\(([^\)]*)\)\s*\{([\s\S]*)\}/.exec(
      value
    );
    if (parts) {
      return new Function(parts[2], parts[3]);
    } else {
      return (d: any) => d;
    }
  }
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
};