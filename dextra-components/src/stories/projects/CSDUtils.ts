import { innerTemplate as html } from "../../utils/templateFunction";
export const tractJoined =
  "https://dcoszmf9no5hj.cloudfront.net/data-query/657cbb22b1dd2900083e1194";
export const zipJoined = "https://dcoszmf9no5hj.cloudfront.net/data-query/657cbfdc4e9cef0008f1bfe1"
export const raw311 =
  "https://dcoszmf9no5hj.cloudfront.net/data-query/653be6b05ff01600085e5eef";
export const walkAudits =
  "https://dcoszmf9no5hj.cloudfront.net/data-query/657a2f5c898e0a0008358b11";

export const lineData =
  "https://dcoszmf9no5hj.cloudfront.net/data-query/653bf6dbc5ea2b0008cd63c0";

export const summary311 =
  "https://dcoszmf9no5hj.cloudfront.net/data-query/657b69306628570008f282f6";

export const complaintsOptions = {
  url: "https://dcoszmf9no5hj.cloudfront.net/data-query/657a34763429c300089e1592",
  column: "service_name",
};
export const specificComplaintOptions = {
  url: "https://dcoszmf9no5hj.cloudfront.net/data-query/657b5a101c31230008e5d1ea",
  column: "service_name_detail",
};

export const walkAuditOptions = {
  url: "https://dcoszmf9no5hj.cloudfront.net/data-query/657a2f8d898e0a0008358b12",
  column: "New Issue Name",
};

export const year311Options = {
  url: "https://dcoszmf9no5hj.cloudfront.net/data-query/657b259a0315ac0008d98571",
  column: "year",
};

export const monthyear311Options = {
  url: "https://dcoszmf9no5hj.cloudfront.net/data-query/657b25bb0315ac0008d98572",
  column: "month",
};

export const zipCodeOptions = {
  url: "https://dcoszmf9no5hj.cloudfront.net/data-query/657b62b86628570008f282f2",
  column: "ZIP_CODE",
};

export const districtOptions = {
  url: "https://dcoszmf9no5hj.cloudfront.net/data-query/657b65816628570008f282f3",
  column: "district",
};

export const cpCodeOptions = {
  url: "https://dcoszmf9no5hj.cloudfront.net/data-query/657b65c96628570008f282f4",
  column: "cpcode",
};

type FilterData = {
  monthDataToFilter: string[];
  yearDataToFilter: string[];
  complatintOptionsToFilter: string[];
  serviceDetailOptionsToFilter: string[];
  zipcodeDataToFilter: string[];
  cpcodeDataToFilter: string[];
  districtDataToFilter: string[];
  showWalkAuditFilter?: boolean;
};
export const filterRow = (filterData: FilterData) => {
  const {
    monthDataToFilter,
    yearDataToFilter,
    complatintOptionsToFilter,
    serviceDetailOptionsToFilter,
    zipcodeDataToFilter,
    cpcodeDataToFilter,
    districtDataToFilter,
    showWalkAuditFilter = false,
  } = filterData;

  return html` <div style="padding-bottom:30px;">
      <osl-eq-grid breakpoint="md">
        <div>
          <osl-eq-grid breakpoint="md">
            <osl-select-control
              data=${JSON.stringify(monthDataToFilter)}
              option="month"
              optionsData="${monthyear311Options.url}"
              optionsDataValueColumn="${monthyear311Options.column}"
              title="311 Complaints Month"
              initialValue="*"
              multipleSelect
            ></osl-select-control>
            <osl-select-control
              data=${JSON.stringify(yearDataToFilter)}
              option="year"
              optionsData="${year311Options.url}"
              optionsDataValueColumn="${year311Options.column}"
              title="311 Complaints Year"
              initialValue="2023"
              multipleSelect
            ></osl-select-control>
          </osl-eq-grid>
        </div>
        <div>
          <osl-select-control
            data=${JSON.stringify(complatintOptionsToFilter)}
            option="service"
            optionsData="${complaintsOptions.url}"
            optionsDataValueColumn="${complaintsOptions.column}"
            title="311 Complaints Type"
            initialValue="${JSON.stringify([
              "Bicycle-Related Issue",
              "Parking Violation",
              "Sidewalk Repair Issue",
              "Street Light Maintenance",
              "Traffic Engineering",
              "Vegetation Encroachment",
            ])}"
            showAny
          ></osl-select-control>
          <osl-select-control
            data=${JSON.stringify(serviceDetailOptionsToFilter)}
            option="servicedetail"
            optionsData="${specificComplaintOptions.url}"
            optionsDataValueColumn="${specificComplaintOptions.column}"
            title="Detailed 311 Complaints Type"
            initialValue="*"
            showAny
          ></osl-select-control>
          ${showWalkAuditFilter
            ? html`<osl-select-control
                data=${JSON.stringify([walkAudits])}
                option="walkaudit_name"
                optionsData="${walkAuditOptions.url}"
                optionsDataValueColumn="${walkAuditOptions.column}"
                title="Walk Audit Issue Type"
                showAny
              ></osl-select-control>`
            : ""}
        </div>
        <div>
          <osl-chips
            data=${JSON.stringify(zipcodeDataToFilter)}
            option="zip"
            optionsData="${zipCodeOptions.url}"
            optionsDataValueColumn="${zipCodeOptions.column}"
            title="Zip Code"
            initialValue="*"
            showAny
            multipleSelect
          ></osl-chips>
          <osl-eq-grid breakpoint="md">
            <div>
              <osl-select-control
                data=${JSON.stringify(districtDataToFilter)}
                option="district"
                optionsData="${districtOptions.url}"
                optionsDataValueColumn="${districtOptions.column}"
                title="District"
                initialValue="*"
                showAny
              ></osl-select-control>
            </div>
            <div>
              <osl-select-control
                data=${JSON.stringify(cpcodeDataToFilter)}
                option="cpcode"
                optionsData="${cpCodeOptions.url}"
                optionsDataValueColumn="${cpCodeOptions.column}"
                title="CP Code"
                initialValue="*"
                showAny
              ></osl-select-control>
            </div>
          </osl-eq-grid>
        </div>
      </osl-eq-grid>
    </div>
    &nbsp;`;
};

export const keyStatBlock = () => {
  return html`
    &nbsp;
    <div>
      <osl-eq-grid breakpoint="xl">
        <osl-stat
          data=${summary311}
          title="Bicycle-Related Issues"
          property="Bicycle-Related Issue"
        ></osl-stat>
        <osl-stat
          data=${summary311}
          title="Parking Violations"
          property="Parking Violation"
        ></osl-stat>
        <osl-stat
          data=${summary311}
          title="Sidewalk Repair Issues"
          property="Sidewalk Repair Issue"
        ></osl-stat>
      </osl-eq-grid>
    </div>
    &nbsp;
    <div>
      <osl-eq-grid breakpoint="xl">
        <osl-stat
          data=${summary311}
          title="Street Light Maintenance"
          property="Street Light Maintenance"
        ></osl-stat>
        <osl-stat
          data=${summary311}
          title="Traffic Engineering"
          property="Traffic Engineering"
        ></osl-stat>
        <osl-stat
          data=${summary311}
          title="Vegetation Encroachment"
          property="Vegetation Encroachment"
        ></osl-stat>
      </osl-eq-grid>
    </div>
    &nbsp;
  `;
};
