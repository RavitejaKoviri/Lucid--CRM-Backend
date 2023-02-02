import { Column } from "react-table";
import { CompanyInfoCell } from "./CompanyInfoCell";
import { CompanyLastLoginCell } from "./CompanyLastLoginCell";
import { CompanyTwoStepsCell } from "./CompanyTwoStepsCell";
import { CompanyActionsCell } from "./CompanyActionsCell";
import { CompanySelectionCell } from "./CompanySelectionCell";
import { CompanyCustomHeader } from "./CompanyCustomHeader";
import { CompanySelectionHeader } from "./CompanySelectionHeader";
import { Lead } from "../../core/_models";

const CompanyColumns: ReadonlyArray<Column<Lead>> = [
  {
    Header: (props) => <CompanySelectionHeader tableProps={props} />,
    id: "selection",
    Cell: ({ ...props }) => (
      <CompanySelectionCell id={props.data[props.row.index].id} />
    ),
  },
  // {
  //   Header: (props) => <LeadCustomHeader tableProps={props} title='leadEmail' className='min-w-125px' />,
  //   id: 'leadEmail',
  //   Cell: ({ ...props }) => <LeadInfoCell lead={props.data[props.row.index]} />,
  // },
  {
    Header: (props) => (
      <CompanyCustomHeader
        tableProps={props}
        title="companyName"
        className="min-w-125px"
      />
    ),
    accessor: "companyName",
  },
  {
    Header: (props) => (
      <CompanyCustomHeader
        tableProps={props}
        title="companyGSTNumber"
        className="min-w-125px"
      />
    ),
    accessor: "companyGSTNumber",
  },
  {
    Header: (props) => (
      <CompanyCustomHeader
        tableProps={props}
        title="companyPANNumber"
        className="min-w-125px"
      />
    ),
    accessor: "companyPANNumber",
  },
  {
    Header: (props) => (
      <CompanyCustomHeader
        tableProps={props}
        title="companyTANNumber"
        className="min-w-125px"
      />
    ),
    accessor: "companyTANNumber",
  },
  // {
  //   Header: (props) => <CompanyCustomHeader tableProps={props} title='companyWebsocCRMUniqueID' className='min-w-125px' />,
  //   accessor: 'companyWebsocCRMUniqueID',
  // },
  // {
  //   Header: (props) => <CompanyCustomHeader tableProps={props} title='companyIndustry' className='min-w-125px' />,
  //   accessor: 'companyIndustry',
  // },
  // {
  //   Header: (props) => <CompanyCustomHeader tableProps={props} title='Phonenumber' className='min-w-125px' />,
  //   accessor: 'leadPhonenumber',
  // },
  // {
  //   Header: (props) => (
  //     <CompanyCustomHeader tableProps={props} title='campaignSource' className='min-w-125px' />
  //   ),
  //   id: 'campaignSource',
  //   Cell: ({ ...props }) => <CompanyLastLoginCell campaignSource={props.data[props.row.index].campaignName} />,
  // },
  // {
  //   Header: (props) => (
  //     <LeadCustomHeader tableProps={props} title='Owner' className='min-w-125px' />
  //   ),
  //   id: 'leadOwner',
  //   Cell: ({ ...props }) => <LeadLastLoginCell campaignSource={props.data[props.row.index].leadOwner} />,
  // },
  // {
  //   Header: (props) => (
  //     <LeadCustomHeader tableProps={props} title='campaignSource' className='min-w-125px' />
  //   ),
  //   id: 'campaignSource',
  //   Cell: ({ ...props }) => <LeadLastLoginCell campaignSource={props.data[props.row.index].campaignName} />,
  // },
  // {
  //   Header: (props) => (
  //     <LeadCustomHeader tableProps={props} title='campaignSource' className='min-w-125px' />
  //   ),
  //   id: 'campaignSource',
  //   Cell: ({ ...props }) => <LeadLastLoginCell campaignSource={props.data[props.row.index].campaignName} />,
  // },
  // {
  //   Header: (props) => (
  //     <LeadCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({ ...props }) => <LeadTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  // {
  //   Header: (props) => (
  //     <LeadCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
  //   ),
  //   accessor: 'joined_day',
  // },
  {
    Header: (props) => (
      <CompanyCustomHeader
        tableProps={props}
        title="Actions"
        className="text-end min-w-100px"
      />
    ),
    id: "actions",
    Cell: ({ ...props }) => (
      <CompanyActionsCell id={props.data[props.row.index].id} />
    ),
  },
];

export { CompanyColumns };
