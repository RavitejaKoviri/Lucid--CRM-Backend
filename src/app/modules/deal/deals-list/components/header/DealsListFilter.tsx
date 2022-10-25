import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MenuComponent } from '../../../../../../_metronic/assets/ts/components'
import { initialQueryState, KTSVG } from '../../../../../../_metronic/helpers'
import { useQueryRequest } from '../../core/QueryRequestProvider'
import { useQueryResponse } from '../../core/QueryResponseProvider'
import DealContext from '../../table/columns/context'
import { getcampaigns } from '../../_redux/dealAction'

const DealsListFilter = () => {
  const { updateState } = useQueryRequest()
  const { isLoading } = useQueryResponse()
  const token = useSelector((state: any) => state?.auth?.authToken);
  const campaign = useSelector((state: any) => state?.deal?.campaigns);
  const dispatch = useDispatch();
  const [role, setRole] = useState<string | undefined>()
  const [lastLogin, setLastLogin] = useState<string | undefined>()

  // useEffect(() => {
  //   MenuComponent.reinitialization()
  // }, [])

  // const resetData = () => {
  //   updateState({ filter: undefined, ...initialQueryState })
  // }

  // const filterData = () => {
  //   updateState({
  //     filter: { role, last_login: lastLogin },
  //     ...initialQueryState,
  //   })
  // }
  const { searchTerm, setSearchTerm } = useContext(DealContext);
  useEffect(() => {
    dispatch(getcampaigns(token));
  }, []);
  return (
    <>
      {/* begin::Filter Button */}
      <button
        disabled={isLoading}
        type='button'
        className='btn btn-light-primary me-3'
        data-kt-menu-trigger='click'
        data-kt-menu-placement='bottom-end'
      // cursor="pointer"
      >
        <KTSVG path='/media/icons/duotune/general/gen031.svg' className='svg-icon-2' />
        Filter
      </button>
      {/* end::Filter Button */}
      {/* begin::SubMenu */}
      <div className='menu menu-sub menu-sub-dropdown w-300px w-md-325px' data-kt-menu='true'>
        {/* begin::Header */}
        <div className='px-7 py-5'>
          <div className='fs-5 text-dark fw-bolder'>Filter Options</div>
        </div>
        {/* end::Header */}

        {/* begin::Separator */}
        <div className='separator border-gray-200'></div>
        {/* end::Separator */}

        {/* begin::Content */}
        <div className='px-7 py-5' data-kt-user-table-filter='form'>
          {/* begin::Input group */}
          <div className='mb-10'>
            <label className='form-label fs-6 fw-bold'>Deal Type:</label>
            <select
              className='form-select form-select-solid fw-bolder'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              data-kt-user-table-filter='role'
              data-hide-search='true'
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            >
              <option value=''></option>
              <option value="ExistingBusiness">Existing Business</option>
              <option value="NewBusiness">New Business </option>
            </select>
          </div>
          {/* end::Input group */}

          {/* begin::Input group */}
          <div className='mb-10'>
            <label className='form-label fs-6 fw-bold'>Campaign Source</label>
            <select
              className='form-select form-select-solid fw-bolder'
              data-kt-select2='true'
              data-placeholder='Select option'
              data-allow-clear='true'
              data-kt-user-table-filter='two-step'
              data-hide-search='true'
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            >
              <option value=''></option>
              {campaign?.map((item: any) => (
                <option value={item?.campaignName}>{item?.campaignName}</option>
              ))}
            </select>
          </div>
          {/* end::Input group */}

          {/* begin::Actions */}
          <div className='d-flex justify-content-end'>
            <button
              type='button'
              disabled={isLoading}
              // onClick={filterData}
              className='btn btn-light btn-active-light-primary fw-bold me-2 px-6'
              data-kt-menu-dismiss='true'
              data-kt-user-table-filter='reset'
            >
              Reset
            </button>
            <button
              disabled={isLoading}
              type='button'
              // onClick={resetData}
              className='btn btn-primary fw-bold px-6'
              data-kt-menu-dismiss='true'
              data-kt-user-table-filter='filter'
            >
              Apply
            </button>
          </div>
          {/* end::Actions */}
        </div>
        {/* end::Content */}
      </div>
      {/* end::SubMenu */}
    </>
  )
}

export { DealsListFilter }
