const componentDir = "dextra-components/src/components/";
const storiesDir = "dextra-components/src/stories/";

const elementTypes = [
  {
    name: "Root Component",
    description: "A Basic Lit Element",
    plopDir: "root"
  },
  {
    name: "Interface Component",
    description: "An element to modify parameters, like forms or inputs",
    plopDir: "interface"
  },
  {
    name: "Data Component",
    description: "An element to display data, like tables, charts, or maps",
    plopDir: "data"
  }
]

export default function (plop) {
  elementTypes.forEach((type) => {

    plop.setGenerator(type.name, {
      description: type.description,
      prompts: [
        {
          type: "input",
          name: "name",
          message: "Name your component",
        },
      ],
      actions: [
        {
          type: "addMany",
          base: `plop-templates/${type.plopDir}`,
          destination: `${componentDir}/{{name}}`,
          templateFiles: `plop-templates/${type.plopDir}/**/*`
        },
        {
          type: "addMany",
          base: `plop-templates/${type.plopDir}Story`,
          destination: `${storiesDir}/`,
          templateFiles: `plop-templates/${type.plopDir}Story/**/*`,
        },
      ],
    });
  });
}
