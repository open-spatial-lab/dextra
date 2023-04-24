# OSL Components

## Quickstart
1. Install [NodeJS](https://nodejs.org/en). Use your relevant package manager, like Brew on MacOS, if that's how you like to install stuff. Node gives access to Node Package Manager, or *npm*, which allows you to install and manage packages/libraries that we're calling in our code.
2. Install Pnpm-- a *slightly more different Javascript package manager* that has better features than "npm". Do this in your command line terminal of choice with `npm i -g pnpm`.
3. Clone this repo, either through Github desktop or via `git clone https://github.com/open-spatial-lab/dextra.git`.
4. Open the repo folder in your terminal of choice, and run `pnpm install`. This will download the relevant packages and make them available.
5. Run `pnpm dev:components` in your terminal to start the playground environment. By default, this will be available in your browser at `http://localhost:6006`. To stop the playground environment, press Control + C on your keyboard from the terminal to interrupt the process.

## Tech Stack
- Base framework: [Lit](https://lit.dev/)
- UI Kit: [Spectrum Web Components](https://opensource.adobe.com/spectrum-web-components/)
- State Management: [Valtio](https://valtio.pmnd.rs/)
- Visualization: [Observable Plot](https://observablehq.com/@observablehq/plot), [DeckGL](https://deck.gl/)
- Dev Playground: [Storybook](https://storybook.js.org/)

## Repo Structure
```
|-dextra-components: Web components 
|--src: Main source directory
|---components: Main folder of components. Each component has its own folder
|----core: Some shared components parts
|----data: Data layer to visualization compoents
|---stories: Playground mockups and tests of components, usually titled "Component.stories.ts"
|--.storybook: Playground configuration
|--public: Public files for the playground
|
|- dextra-utils: Coming soon - in-browser analytics
|
|- plop-templates: templates for bootstraping different types of components, like "data" or "interface" or "mark" for plots
|
|- workflows: github action workflows, currently not used
|
|- node-modules: installed dependencies, ignore
|
| config and miscellany (package.json, plopfile.mjs, pnpm-workspace.yaml, etc.)

```
## Making New Components
The fastest way to create a new component is to run `pnpm plop`, which allows you to choose one of the four templates to get started:
1. Root component - the most low-level component
2. Interface component - a component to control an interface element like a control
3. Data component - a component that displays data in some way
4. Mark component - a mark using the Observable Plot library

Running `pnpm plop` will prompt you to name your component and then create a folder under `dextra-components > src > components` (`Marks` subfolder for marks). Additionally, it will configure a default story under `dextra-components > src > stories`.

## About Components
Every component is a class function, with a variety of methods attached. All components at their root at LitElements, with some baked in convenience methods. Here's more information about [Javascript classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

## Key Methods and Properties

### Rendering
Each component has a `.render()` method which is the main function to return html. However, we wrap some context around each out and so use `.template()` as the higher level output. See `Table.ts` as an example.

For Marks, the getter `plot()` is the main rendering method to transform data into visualization. See `Dot.ts` as an example.

### Data

`currentResults` is the main way to access data filtered on current conditions and controls. Each dataset is loaded in and stored in the global state (using the library Valtio). For more on the state structure, see `dextra-components > src > components > core > state`.

### Subscribing to state changes

The low-level `ValtioElement` layer implements a method called `subscribe`, which takes in a selector, callback, and condition to remove the subscription. The selector is used to select a smaller part of the state to listen for changes, like a particular dataset or parameter. The callback updates the component state based on the global state. The condition is optional, but can be used to set a state to remove the listener, and is checked when state updates occur. 

The underlying state object can be accessed under `this.store`.

### Interface-Specific Methods
The following properties and methods are available on interface components specifically:

- `option`: A property to change in the global store. Usually, this should align with the query parameter for the API when using components in a client-server configuration.
- `eventValueAccessor`: A method to access the value of an event. This can be overridden if your interface/input component has an event that is different. 
- `handleChange`: A method to update the state with a value from an event. See `Interface.ts` for more info on these.