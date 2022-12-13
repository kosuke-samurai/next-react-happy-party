import * as React from 'react';


//グロナビ
import { Glonavi } from 'src/components/Glonavi'
// タブ
import { SwiperTab } from 'src/components/SwiperTab'



export default function Home() {

  return (
    <div>
      {/* グロナビ */}
      <Glonavi />
      {/* タブ */}
      <SwiperTab />
    </div>
  )
}
