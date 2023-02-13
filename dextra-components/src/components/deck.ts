import { html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { AnalysisLayer } from "./core/analysis-layer";
import { Deck } from "@deck.gl/core/typed";
import { ScatterplotLayer } from "@deck.gl/layers/typed";
import { MapboxOverlay as DeckOverlay } from "@deck.gl/mapbox/typed";
import maplibregl from "maplibre-gl";

@customElement("dextra-deck")
export class DextraDeck extends AnalysisLayer {
  @query("#map-canvas")
  // @ts-ignore
  mapCanvas: HTMLDivElement;

  map: maplibregl.Map | null = null;

  constructor() {
    super();
  }

  initializeDeck() {
    this.map = new maplibregl.Map({
      container: this.mapCanvas,
      style: "https://demotiles.maplibre.org/style.json", // stylesheet location
      center: [0, 0], // starting position [lng, lat]
      zoom: 4, // starting zoom
    });

    const deckOverlay = new DeckOverlay({
      layers: [
        new ScatterplotLayer({
          data: [
            [0, 0],
            [1, 1],
            [2, 2],
            [3, 3],
          ],
          id: `asdf1234`,
          getPosition: (d) => d,
          getFillColor: [255, 0, 0],
          getRadius: 1,
          radiusMinPixels: 10,
        }),
      ],
    });

    this.map.addControl(deckOverlay);
  }

  protected shouldRunAnalysis: boolean = false;

  firstUpdated() {
    this.initializeDeck();
  }

  render() {
    return html`
      <h1>Deck.gl</h1>
      <div style="position:relative; width:100%; height:300px;border:1px solid gray;">
      <div id="map-canvas" style="width:100%;height:100%;"/>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dextra-deck": DextraDeck;
  }
}
