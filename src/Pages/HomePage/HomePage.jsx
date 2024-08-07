import React, { Fragment } from 'react'
import HeaderSlider from '../../Components/HeaderSlider/HeaderSlider'
import DiscoverSection from '../../Components/DiscoverSection/DiscoverSection'
import Tour from '../../Components/Tours/Tour'
import Count from '../../Components/Count/Count'
import Destination from '../../Components/Destination/Destination'
import Video from '../../Components/Video/Video'
import Popular from '../../Components/Popular/Popular'
import Travel from '../../Components/Travel/Travel'
import Testominals from '../../Components/Testominals/Testominals'
import IconSlider from '../../Components/IconSlider/IconSlider'
import { FormattedMessage } from 'react-intl'


export default function HomePage() {
  return (
    <Fragment>
      <HeaderSlider />
      <DiscoverSection test={<FormattedMessage id='bestTravelAgency' />} hint={<FormattedMessage id='discoverTheWorldWithOurGuide' />} description1={<FormattedMessage id='description1' />}
        description3={<FormattedMessage id='description3' />} />
      <Tour />
      <Count />
      <Destination />
      <Video />
      <Popular />
      <Travel />
      <Testominals />
      <IconSlider />
    </Fragment >
  )
}
