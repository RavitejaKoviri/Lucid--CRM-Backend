import React, {FC} from 'react'
import {
  FeedsWidget2,
  FeedsWidget3,
  FeedsWidget4,
  FeedsWidget5,
  FeedsWidget6,
} from '../../../../../_metronic/partials/widgets'

const Feeds: FC = () => {
  return (
    <div className='row g-5 g-xl-8'>

      {/* begin::Col */}
      <div className='col-xl-6'>
        <div>
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fviewas%3D100000686899395%26id%3D100083231593711&tabs=timeline&width=600&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
          width="600" height="800" style={{border:"none", overflow:"hidden"}} scrolling="no" frameBorder="0" allowFullScreen={true} 
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
      </div>
      {/* end::Col */}

      {/* begin::Col */}
      <div className='col-xl-6'>
        <FeedsWidget2 className='mb-5 mb-xl-8' />

        <FeedsWidget3 className='mb-5 mb-xl-8' />

        <FeedsWidget4 className='mb-5 mb-xl-8' />
      </div>
      {/* end::Col */}

    </div>
  )
}

export {Feeds}
