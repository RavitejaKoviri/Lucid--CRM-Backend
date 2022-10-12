import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import { CampaignsListWrapper } from './campaigns-list/CampaignsList'

const campaignsBreadcrumbs: Array<PageLink> = [
  {
    title: 'Campaign ',
    path: 'Campaigns',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const CampaignsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='campaigns'
          element={
            <>
              <PageTitle> Campaigns List </PageTitle>
              <CampaignsListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='campaigns' />} />
    </Routes>
  )
}

export default CampaignsPage
