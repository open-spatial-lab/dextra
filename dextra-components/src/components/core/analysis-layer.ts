import { PropertyValueMap } from 'lit';
import { property } from 'lit/decorators.js';
import { AnalysisSchema, ColumnSchema } from '../../../../dextra-utils/src/schemas/interfaces';
import { DataLayer } from './worker-data-layer'


export abstract class AnalysisClass extends DataLayer {
    protected abstract shouldRunAnalysis: boolean;
    protected abstract columnSchema: ColumnSchema;
    protected abstract analysisSchema: AnalysisSchema;

    public abstract runAnalysis(): Promise<any>;
}

export class AnalysisLayer extends AnalysisClass {

    @property({ type: Boolean })
    protected shouldRunAnalysis: boolean = true;

    /**
       * Schema for column to access
       */
    @property({ type: Object })
    columnSchema: ColumnSchema = {
        column: "Capital city population (UN Urbanization Prospects, 2018)",
    }

    /**
     * Schema for analysis to run
     */
    @property({ type: Object })
    analysisSchema: AnalysisSchema = {
        type: "max"
    }

    @property({ type: Object })
    result: any = null;

    protected hasRunAnalysis = false;

    protected updateTriggers: Array<keyof AnalysisLayer> = [
        'dataSchema',
        'columnSchema',
        'analysisSchema',
    ]

    public async runAnalysis() {
        const table = await this.query(`SELECT * FROM "${this.dataSchema.url}"`);
        const data = JSON.parse(JSON.stringify(table.toArray())) as Array<Record<any, any>>;

        this.result = await this.analyst().runAnalysis(
            data,
            this.dataSchema,
            this.columnSchema,
            this.analysisSchema
        );
    }

    protected performUpdate(): void | Promise<unknown> {
        if (this.isInitialized && !this.hasRunAnalysis) {
            this.runAnalysis();
            this.hasRunAnalysis = true;
        }
        return super.performUpdate();
    }

    protected willUpdate(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        const dbActiveButNotAnalysis = this.store.db && !this.hasRunAnalysis;
        const updateTriggered = this.isInitialized && this.updateTriggers.some((trigger) => _changedProperties.has(trigger));
        if (dbActiveButNotAnalysis || updateTriggered){
            this.runAnalysis();
        }
        super.willUpdate(_changedProperties);
    }

}