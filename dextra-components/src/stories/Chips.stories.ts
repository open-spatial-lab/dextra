import { Meta } from "@storybook/web-components";
import { html } from "lit";
import "../components/Chips/src/Chips.ts";

export default {
  title: "Interface",
};

export const Chips = () => {
  return html`
    <osl-chips
      data="http://localhost:6006/data/interaction.json"
      initialValue="[5,6,7,8]"
      title="Magnitude"
      option="morg"
      label="Enter a new magnitude value"
    >
    </osl-chips>
  `;
};

export const AutocompleteChips = () => {
  return html`
    <osl-chips
      data="https://d3lsdszfx9jqxt.cloudfront.net/data-query/6542775ca570c6000898f983"
      initialValue="[]"
      title="Product Name"
      option="product_in"
      label="Add Products To Query"
      options=${JSON.stringify(autocompleteOptions)}
      showAllOptions="true"
    >
    </osl-chips>
    <div style="width:100%;height:50vh;">
      <osl-data-table
        columns='["product_code","product_name"]'
        data="https://d3lsdszfx9jqxt.cloudfront.net/data-query/6542775ca570c6000898f983"
      ></osl-data-table>
    </div>
  `;
};

var productData = [
  [6681, "Mini Tabs"],
  [7095, "Grenadier"],
  [8225, "Cyncal 80%"],
  [12081, "Tac-San Plus"],
  [13522, "Ct 936l"],
  [13723, "Soda Ash"],
  [18745, "Do-It-All"],
  [19824, "Cytex"],
  [21155, "Extract-2"],
  [25016, "Drexel Captan 50w"],
  [46384, "Sonar Q"],
  [48299, "Gibgro 20% Powder"],
  [60804, "Exomite Pro"],
  [62146, "Ratimor Wax Block"],
  [62411, "Irgarol 1051"],
  [63354, "Headway G"],
  [63820, "Algae Guard"],
  [63872, "Acticide Ips 40"],
  [67925, "Contans Wg"],
  [68563, "Banter Wdg"],
  [68564, "Firepro"],
  [68726, "Topsin M Technical"],
  [69651, "Sterilex Ultra Step"],
  [69955, "Takedown Soft Bait"],
  [70218, "Master Label - Elf"],
  [70837, "Bifenamite 50 Wdg"],
  [71399, "Dexter Max Fungicide "],
  [141, "Jen-Sal Tic-Cide"],
  [-1, "Unknown"],
  [1, "Harris Famous Roach Tablets"],
  [2, "Mosquito Beater"],
  [3, "Sweeney'S Poison Wheat With Rozol"],
  [4, "Cabot'S Creosote Stains 0245 Smoke Gray"],
  [5, "Cabot'S Creosote Stains 0247 Dark Gray"],
  [6, "Cabot'S Creosote Stains 0238 Bungalow Brown"],
  [7, "Cabot'S Creosote Stains 0220 Tile Red"],
  [8, "Cabot'S Creosote Stains 0237 Bark Brown"],
  [9, "Cabot'S Creosote Stains 0222 Dark Brownish Red"],
  [10, "Cabot'S Creosote Stains 0230 Colorless Creosote"],
  [11, "Cabot'S Creosote Stains 0244 Silver Gray"],
  [12, "Cabot'S Creosote Stains 0239 Seal Brown"],
  [13, "Cabot'S Creosote Stains 0243 Medium Gray"],
  [14, "Cabot'S Creosote Stains 0260 Black"],
  [15, "Cabot'S Penta-Wood-Seal #3110"],
];
var autocompleteOptions = productData.map((f) => ({
  label: f[1],
  value: f[0],
}));
