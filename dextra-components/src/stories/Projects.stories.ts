import { html } from "lit";
import "../components/GlMap/src/GlMap.ts";
import "../components/GlMap/src/GlMapLayer.ts";
import "../components/Slider/src/Slider.ts";
import "../components/Select/src/SelectControl.ts";
import "../components/Checkbox/src/Checkbox.ts";
import "../components/FlexBox/src/FlexBox.ts";
import "../components/StatTable/src/StatTable.ts";
import "../components/DataTable/src/DataTable.ts";
import "../components/Download/src/Download.ts";
import "../components/Stat/src/Stat.ts";
import "../components/marks/Line/src/Line.ts";
import "../components/marks/Axis/src/Axis.ts";
import "../components/Plot/src/Plot.ts";
import "../components/Modal/src/Modal.ts";
import "../components/Radio/src/Radio.ts";
import "../components/ParamView/src/ParamView.ts";
import "../components/Stat/src/Stat.ts";
import "../components/FlexBox/src/FlexBox.ts";
import "../components/Tabs/src/Tabs.ts";
import "../components/marks/Axis/src/Axis.ts";

export default {
  title: "Projects",
};
import {PreventBlindness as _PreventBlindness} from './projects/PreventBlindness'
import {EECRC as _EECRC} from './projects/EECRC'
import { CPR as _CPR} from './projects/CPR1';
import { CPR2 as _CPR2} from './projects/CPR2';
import { CPR3 as _CPR3} from './projects/CPR3';
import { CirculateSanDiego as _CirculateSanDiego } from './projects/CSD1'
import { CirculateSanDiego2 as _CirculateSanDiego2 } from './projects/CSD2'
import { CirculateSanDiego3 as _CirculateSanDiego3 } from './projects/CSD3'
import { Wisconsin as _Wisconsin } from './projects/Wisconsin'
import {Equiticity as _Equiticity} from './projects/Equiticity'
import {m3 as _M3} from './projects/M3'
import {GWBP1, GWBP2} from './projects/GWBP'

export const PreventBlindness = () => _PreventBlindness()
export const EECRC = () => _EECRC();
export const Equiticity = () => _Equiticity();
export const CPR1 = () => _CPR();
export const CPR2 = () => _CPR2();
export const CPR3 = () => _CPR3();
export const CirculateSanDiego = () => _CirculateSanDiego();
export const CirculateSanDiego2 = () => _CirculateSanDiego2();
export const CirculateSanDiego3 = () => _CirculateSanDiego3();
export const Wisconsin = () => _Wisconsin();
export const M3 = () => _M3();
export const GroundworkBridgeportView1 = () => GWBP1();
export const GroundworkBridgeportView2 = () => GWBP2();