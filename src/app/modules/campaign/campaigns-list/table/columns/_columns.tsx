import { Column } from 'react-table'
import { UserInfoCell } from './CampaignInfoCell'
import { CampaignLastLoginCell } from './CampaignLastLoginCell'
import { CampaignTwoStepsCell } from './CampaignTwoStepsCell'
import { CampaignActionsCell } from './CampaignActionsCell'
import { CampaignSelectionCell } from './CampaignSelectionCell'
import { CampaignCustomHeader } from './CampaignCustomHeader'
import { CampaignSelectionHeader } from './CampaignSelectionHeader'
import { Campaign } from '../../core/_models'

const usersColumns: ReadonlyArray<Column<Campaign>> = [
  {
    Header: (props) => <CampaignSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({ ...props }) => <CampaignSelectionCell id={props.data[props.row.index].id} />,
  },
  // {
  //   Header: (props) => <UserCustomHeader tableProps={props} title='username' className='min-w-125px' />,
  //   id: 'username',
  //   Cell: ({ ...props }) => <UserInfoCell user={props.data[props.row.index]} />,
  // },
  {
    Header: (props) => <CampaignCustomHeader tableProps={props} title='campaignName' className='min-w-125px' />,
    accessor: 'campaignName',
  },
  // {
  //   Header: (props) => <CampaignCustomHeader tableProps={props} title='campaignStatus' className='min-w-125px' />,
  //   accessor: 'campaignStatus',
  // },
  // {
  //   Header: (props) => <CampaignCustomHeader tableProps={props} title='company' className='min-w-125px' />,
  //   accessor: 'company',
  // },
  // {
  //   Header: (props) => (
  //     <UserCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <UserLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <UserCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <UserTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  // {
  //   Header: (props) => (
  //     <UserCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
  //   ),
  //   accessor: 'joined_day',
  // },
  {
    Header: (props) => (
      <CampaignCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({ ...props }) => <CampaignActionsCell id={props.data[props.row.index].id} />,
  },
]

export { usersColumns }
