import { html } from "lit";
import { property } from "lit/decorators.js";
import { OslData } from "../../data/src/Data";
import { safeCustomElement } from "../../core/decorators/safeCustomElement";
import * as ss from "simple-statistics";
import "../../Table/src/Table";
import { getFormatter } from "../../core/utils/numberFormatter";
import { interpretFuncJsonOrString } from "../../core/utils/converters";

@safeCustomElement("osl-stat-table")
export class OslTable extends OslData {
  @property({ converter: interpretFuncJsonOrString })
  columns?: string[];

  @property({ type: Boolean })
  average: boolean = true;
  @property({ type: Boolean })
  min: boolean = true;
  @property({ type: Boolean })
  max: boolean = true;
  @property({ type: Boolean })
  iqr: boolean = false;
  @property({ type: Boolean })
  stdev: boolean = false;

  formatter?: Intl.NumberFormat;
  formatStat(stat: number) {
    try {
      return this.formatter ? this.formatter.format(stat) : stat;
    } catch {
      return stat;
    }
  }

  calculateStats(values: any[], stat: string) {
    switch (stat) {
      case "average":
        return ss.mean(values);
      case "min":
        return ss.min(values);
      case "max":
        return ss.max(values);
      case "iqr":
        return ss.interquartileRange(values);
      case "stdev":
        return ss.standardDeviation(values);
      default:
        return null;
    }
  }

  getValues(data: any, columns: string[]) {
    let values = columns.reduce((acc, property) => {
      acc[property] = Array.from(data.length).fill(undefined);
      return acc;
    }, {} as { [key: string]: any[] });
    for (let i = 0; i < data.length; i++) {
      for (const property of columns) {
        const val = data[i][property];
        if (typeof val === "number" && !isNaN(val) && val !== null) {
          values[property][i] = val;
        }
      }
    }
    return values;
  }

  getData() {
    if (!this.currentResults?.length) {
      return {
        data: [],
        columns: [],
      };
    }
    const columns = [
      this.average && "average",
      this.min && "min",
      this.max && "max",
      this.iqr && "iqr",
      this.stdev && "stdev",
    ].filter(Boolean) as string[];

    const properties = this.columns || Object.keys(this.currentResults[0]);
    const values = this.getValues(this.currentResults, properties);
    let output = properties.map((property) => {
      const stats = columns.reduce((acc, stat) => {
        acc[stat] = this.formatStat(
          // @ts-ignore
          this.calculateStats(values[property], stat)
        );
        return acc;
      }, {} as { [key: string]: any });
      return {
        property: property.split("_").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
        ...stats,
      };
    });
    return {
      data: output,
      columns: ["property", ...columns],
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.labelFormat && (this.formatter = getFormatter(this.labelFormat));
  }
  template() {
    const { data, columns } = this.getData();
    return html`
      <osl-table
        .data=${data}
        .columns=${columns}
        .title=${this.title}
      ></osl-table>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "osl-stat-table": OslTable;
  }
}
