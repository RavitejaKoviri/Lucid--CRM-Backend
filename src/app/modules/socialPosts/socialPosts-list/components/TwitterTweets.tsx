/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import {
  FeedsWidget2,
  FeedsWidget3,
  FeedsWidget4,
} from '../../../../../_metronic/partials/widgets'

export function TwitterTweets() {

  useEffect(() => {
    const anchor = document.createElement("a");
    anchor.setAttribute("class", "twitter-timeline");
    anchor.setAttribute("data-width", "600");
    anchor.setAttribute("data-height", "800");
    anchor.setAttribute("href", "https://twitter.com/Websoc_studio?ref_src=twsrc%5Etfw");
    document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);

    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);
 
  return (
    <div className='row g-5 g-xl-8'>

      {/* begin::Col */}
      <div className='col-xl-6'>
        <section className="twitterContainer">
          <div className="twitter-embed"></div>
        </section>
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
