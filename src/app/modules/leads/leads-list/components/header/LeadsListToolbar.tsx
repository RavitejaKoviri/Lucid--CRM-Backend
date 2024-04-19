import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { KTSVG } from "../../../../../../_metronic/helpers";
import { useListView } from "../../core/ListViewProvider";
import { LeadsListFilter } from "./LeadsListFilter";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

const LeadsListToolbar = () => {
  const user = useSelector((state: any) => state?.auth?.user);
  const rolePermissionsByUser = useSelector(
    (state: any) => state?.Dashboard?.RolePermissionsById
  );
  const { setItemIdForUpdate } = useListView();
  const openAddUserModal = () => {
    setItemIdForUpdate(null);
  };
  const navigation = useNavigate();

  const LeadData = useSelector((state: any) => state?.LeadData?.Leads);
  console.log(LeadData, "LeadData");
  const lead = LeadData.map((item: any) => ({
    id: item?.id,
    campaignSource: item?.campaignSource?.campaignName,
    company: item?.company?.companyName,
    AnnualRevenueContribution: item?.revenue,
    CompanyName: item?.leadCompanyName,
    Email: item?.leadEmail,
    EmailOptOut: item?.leadEmailOptOut,
    FirstName: item?.leadFirstName,
    Industry: item?.leadIndustry,
    LastName: item?.leadLastName,
    Phonenumber: item?.leadMobileNumber,
    Source: item?.leadDigitalMediaSource,
    Status: item?.leadStatus?.leadStatusName,
    Website: item?.leadWebsite,
    TestName: item?.description,
    Date: item?.date,
    OrderID: item?.leadId,
    Location: item?.leadLocation,
  }));
  const exportToCSV = (csvData: any, fileName: any) => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, {
      bookType: "xlsx",
      type: "array",
    });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <div
      className="d-flex justify-content-end"
      data-kt-user-table-toolbar="base"
    >
      <LeadsListFilter />

      {/* begin::Export */}
      <button
        type="button"
        className="btn btn-light-primary me-3"
        onClick={() => {
          exportToCSV(lead, "LEADS DATA");
        }}
      >
        <KTSVG
          path="/media/icons/duotune/arrows/arr078.svg"
          className="svg-icon-2"
        />
        Export
      </button>
      {/* end::Export */}

      {/* begin::Add user */}
      {user?.isSuperAdmin === true ? (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            navigation("leadadduser");
          }}
        >
          <KTSVG
            path="/media/icons/duotune/arrows/arr075.svg"
            className="svg-icon-2"
          />
          Add Leads
        </button>
      ) : (
        <>
          {rolePermissionsByUser?.filter(
            (item: any) =>
              item?.allmodule?.name === "Leads" && item?.Create === true
          )?.length > 0 && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                navigation("leadadduser");
              }}
            >
              <KTSVG
                path="/media/icons/duotune/arrows/arr075.svg"
                className="svg-icon-2"
              />
              Add Leads
            </button>
          )}
        </>
      )}

      {/* end::Add user */}
    </div>
  );
};

export { LeadsListToolbar };
