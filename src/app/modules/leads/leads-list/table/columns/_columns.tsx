import { Column } from "react-table";
import { LeadInfoCell } from "./LeadInfoCell";
import { LeadLastLoginCell } from "./LeadLastLoginCell";
import { LeadTwoStepsCell } from "./LeadTwoStepsCell";
import { LeadActionsCell } from "./LeadActionsCell";
import { LeadSelectionCell } from "./LeadSelectionCell";
import { LeadCustomHeader } from "./LeadCustomHeader";
import { LeadSelectionHeader } from "./LeadSelectionHeader";
import { Lead } from "../../core/_models";

const LeadsColumns: ReadonlyArray<Column<Lead>> = [
  {
    Header: (props) => <LeadSelectionHeader tableProps={props} />,
    id: "selection",
    Cell: ({ ...props }) => (
      <LeadSelectionCell id={props.data[props.row.index].id} />
    ),
  },
  // {
  //   Header: (props) => <LeadCustomHeader tableProps={props} title='leadEmail' className='min-w-125px' />,
  //   id: 'leadEmail',
  //   Cell: ({ ...props }) => <LeadInfoCell lead={props.data[props.row.index]} />,
  // },
  {
    Header: (props) => (
      <LeadCustomHeader
        tableProps={props}
        title="Appointment Date"
        className="min-w-125px"
      />
    ),
    accessor: "date",
  },
  {
    Header: (props) => (
      <LeadCustomHeader
        tableProps={props}
        title="Location"
        className="min-w-125px"
      />
    ),
    accessor: "leadLocation",
  },
   
  {
    Header: (props) => (
      <LeadCustomHeader
        tableProps={props}
        title="Tests"
        className="min-w-125px"
      />
    ),
    accessor: "description",
  },
  {
    Header: (props) => (
      <LeadCustomHeader
        tableProps={props}
        title="Mobile Number"
        className="min-w-125px"
      />
    ),
    accessor: "leadMobileNumber",
  },
  {
    Header: (props) => (
      <LeadCustomHeader
        tableProps={props}
        title="Full Name"
        className="min-w-125px"
      />
    ),
    accessor: "leadFirstName",
  },
  // {
  //   Header: (props) => (
  //     <LeadCustomHeader
  //       tableProps={props}
  //       title="LastName"
  //       className="min-w-125px"
  //     />
  //   ),
  //   accessor: "leadLastName",
  // },
  {
    Header: (props) => (
      <LeadCustomHeader
        tableProps={props}
        title="Email"
        className="min-w-125px"
      />
    ),
    accessor: "leadEmail",
  },
 
  {
    Header: (props) => (
      <LeadCustomHeader
        tableProps={props}
        title="Lead Source"
        className="min-w-125px"
      />
    ),
    accessor: "leadDigitalMediaSource",
  },
  // {
  //   Header: (props) => (
  //     <LeadCustomHeader
  //       tableProps={props}
  //       title="Bill Number"
  //       className="min-w-125px"
  //     />
  //   ),
  //   accessor: "leadBillNumber",
  // },
 
  // {
  //   Header: (props) => (
  //     <LeadCustomHeader
  //       tableProps={props}
  //       title="Time"
  //       className="min-w-125px"
  //     />
  //   ),
  //   accessor: "leadTime",
  // },
  // {
  //   Header: (props) => (
  //     <LeadCustomHeader
  //       tableProps={props}
  //       title="Customer Status"
  //       className="min-w-125px"
  //     />
  //   ),
  //   accessor: "leadStatusName",
  // },
  // {
  //   Header: (props) => (
  //     <LeadCustomHeader
  //       tableProps={props}
  //       title="Company"
  //       className="min-w-125px"
  //     />
  //   ),
  //   accessor: "leadCompanyName",
  // },
  {
    Header: (props) => (
      <LeadCustomHeader
        tableProps={props}
        title="Revenue"
        className="min-w-125px"
      />
    ),
    accessor: "revenue",
  },
  // {
  //   Header: (props) => (
  //     <LeadCustomHeader
  //       tableProps={props}
  //       title="Industry"
  //       className="min-w-125px"
  //     />
  //   ),
  //   accessor: "leadIndustry",
  // },
  
  // {
  //   Header: (props) => (
  //     <LeadCustomHeader
  //       tableProps={props}
  //       title="Digital Media Source"
  //       className="min-w-125px"
  //     />
  //   ),
  //   id: "campaignSource",
  //   Cell: ({ ...props }) => (
  //     <LeadLastLoginCell
  //       campaignSource={props.data[props.row.index].campaignName}
  //     />
  //   ),
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
      <LeadCustomHeader
        tableProps={props}
        title="Actions"
        className="text-end min-w-100px"
      />
    ),
    id: "actions",
    Cell: ({ ...props }) => (
      <LeadActionsCell id={props.data[props.row.index].id} />
    ),
  },
];

export { LeadsColumns };
