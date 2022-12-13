import * as React from 'react';


//ヘッダー
import { Header } from 'src/components/Header'
//グロナビ
import { Glonavi } from 'src/components/Glonavi'
// タブ
import { SwiperTab } from 'src/components/SwiperTab'





export default function Home() {

  return (
    <div>
      {/* ヘッダー */}
      <Header />
      {/* グロナビ */}
      <Glonavi />
      {/* タブ */}
      <SwiperTab />
    </div>
  )
}
