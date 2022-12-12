import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import classes from 'src/styles/Top.module.css'

import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

{/* グロナビのロゴ*/ }
import EventSeatIcon from '@mui/icons-material/EventSeat';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WcIcon from '@mui/icons-material/Wc';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import TrainIcon from '@mui/icons-material/Train';
import { pink } from '@mui/material/colors';


function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 0,
        m: 0,
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {

  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function Home() {
  return (
    <div>

      <header className={classes.header}>

        <div className={classes.search_container}>
          <input type="text" size="25" value="{{ \Auth::user()->name }}" readonly />
          <input type="submit" value="さまへ" disabled />
        </div>

        <div className={classes.home}>
          <a href="/" className={classes.home_back_button}>
            <Image src="/img/header/home16.jpg" alt="" width={50} height={50} />
            <p className={classes.home_back}> ホーム </p>
          </a>
        </div>

        <form action="{{ route('logout') }}" method="POST">
          {/* @csrf */}
          <button type="submit" className={classes.logout_button}>
            <Image src="/img/header/logout16.jpg" alt="" width={72} height={16} />
            <p classNames={classes.logout}> ログアウト </p>
          </button>
        </form>
      </header>


      {/* グロナビ */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& > *': {
            m: 1,
          },

        }
        }
      >

        <ButtonGroup variant="text" color='inherit' aria-label="text button group" fullWidth={true}>
          <Button><Box sx={{ flexDirection: 'column' }}><Item><EventSeatIcon sx={{ color: pink[500] }} /></Item><Item>席次表</Item></Box></Button>
          <Button><Box sx={{ flexDirection: 'column' }}><Item><RestaurantIcon sx={{ color: pink[500] }} /></Item><Item>メニュー</Item></Box></Button>
          <Button><Box sx={{ flexDirection: 'column' }}><Item><WcIcon sx={{ color: pink[500] }} /></Item><Item>トイレ</Item></Box></Button>
          <Button><Box sx={{ flexDirection: 'column' }}><Item><ChildCareIcon sx={{ color: pink[500] }} /></Item><Item>授乳</Item></Box></Button>
        </ButtonGroup>

        <ButtonGroup variant="text" color='inherit' aria-label="text button group" fullWidth={true}>
          <Button><Box sx={{ flexDirection: 'column' }}><Item><SmokingRoomsIcon sx={{ color: pink[500] }} /></Item><Item>喫煙所</Item></Box></Button>
          <Button><Box sx={{ flexDirection: 'column' }}><Item><WbSunnyIcon sx={{ color: pink[500] }} /></Item><Item>天気</Item></Box></Button>
          <Button><Box sx={{ flexDirection: 'column' }}><Item><LocalBarIcon sx={{ color: pink[500] }} /></Item><Item>二次会</Item></Box></Button>
          <Button><Link href='https://transit.yahoo.co.jp/?from=%E8%A5%BF%E9%89%84%E7%A6%8F%E5%B2%A1&to=&fromgid=&togid=&flatlon=%2C%2C28273&tlatlon=&via=&viacode=&y=2022&m=12&d=12&hh=17&m1=2&m2=3&type=1&ticket=ic&expkind=1&userpass=1&ws=3&s=0&al=1&shin=1&ex=1&hb=1&lb=1&sr=1'><Box sx={{ flexDirection: 'column' }}><Item><TrainIcon sx={{ color: pink[500] }} /></Item><Item>帰路</Item></Box></Link></Button>
        </ButtonGroup>

      </Box>

      {/* ↑グロナビ↑ */}

      {/* タブ */}

      <div className="tab_container">
        <input id="tab1" type="radio" name="tab_item" checked />
        <label className="tab_item" for="tab1">トピックス</label>
        <input id="tab2" type="radio" name="tab_item" />
        <label className="tab_item" for="tab2">思い出</label>
        <input id="tab3" type="radio" name="tab_item" />
        <label className="tab_item" for="tab3">未来</label>


        <div className="tab_content" id="tab1_content">
          <div className="tab_content_description">


            <Link className="hl-midashi" href="/article/atama">
              <article className="wide_article">
                <div>
                  <Image src="/img/ring_photo.jpg" width={72} height={16} alt="" className="wide_article_img" />
                </div>

                <div className="wide_topi">
                  <h1 className="topi_title">浜辺美波が第一子女児を妊娠した</h1>
                  <p className="topi_time">11/17（金）17:29</p>
                </div>
              </article>
            </Link>


            <Link className="hl-midashi" href="">
              <article className="article">
                <div>
                  <Image src="/img/article_photo.jpg" width={72} height={16} alt="" className="article_img" />
                </div>

                <div className="topi">
                  <h1 className="topi_title">W杯が開幕 がんばれ日本最後まで</h1>
                  <p className="topi_time">11/17（金）17:29</p>
                </div>
              </article>
            </Link>

            <Link className="hl-midashi" href="">
              <article className="article">
                <div>
                  <Image src="/img/article_photo.jpg" width={72} height={16} alt="" className="article_img" />
                </div>

                <div className="topi">
                  <h1 className="topi_title">W杯が開幕 がんばれ日本最後まで</h1>
                  <p className="topi_time">11/17（金）17:29</p>
                </div>
              </article>
            </Link>

            <Link className="hl-midashi" href="">
              <article className="article">
                <div>
                  <Image src="/img/article_photo.jpg" width={72} height={16} alt="" className="article_img" />
                </div>

                <div className="topi">
                  <h1 className="topi_title">W杯が開幕 がんばれ日本最後まで</h1>
                  <p className="topi_time">11/17（金）17:29</p>
                </div>
              </article>
            </Link>

            <Link className="hl-midashi" href="">
              <article className="article">
                <div>
                  <Image src="/img/article_photo.jpg" width={72} height={16} alt="" className="article_img" />
                </div>

                <div className="topi">
                  <h1 className="topi_title">W杯が開幕 がんばれ日本最後まで</h1>
                  <p className="topi_time">11/17（金）17:29</p>
                </div>
              </article>
            </Link>

            <Link className="hl-midashi" href="">
              <article className="article">
                <div>
                  <Image src="/img/article_photo.jpg" width={72} height={16} alt="" className="article_img" />
                </div>

                <div className="topi">
                  <h1 className="topi_title">W杯が開幕 がんばれ日本最後まで</h1>
                  <p className="topi_time">11/17（金）17:29</p>
                </div>
              </article>
            </Link>

            {/* <Link className="hl-midashi" href="/article/special">
                      <article className="article">
                        <div>
                          <Image src="{{ asset('storage/' . \Auth::user()->hl_image) }}" alt=""
                            className="article_img" />
                        </div>

                        <div className="topi">
                          <h1 className="topi_title">{{ \Auth::user()->title }}</h1>
                          <p className="topi_time_special">11/17（金）17:29</p>
                        </div>
                      </article>
                    </Link> */}

          </div>
        </div>



        <div className="tab_content" id="tab2_content">
          <div className="tab_content_description">
            @include('tab.timelinetest')
          </div>
        </div>
        <div className="tab_content" id="tab3_content">
          <div className="tab_content_description">
            @include('tab.texttest')
          </div>
        </div>
      </div>



    </div>
  )
}
