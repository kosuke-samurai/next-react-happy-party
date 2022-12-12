import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import classes from 'src/styles/Top.module.css'
import { useState } from 'react'

import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

//ヘッダー
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';

//グロナビのロゴ
import EventSeatIcon from '@mui/icons-material/EventSeat';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import WcIcon from '@mui/icons-material/Wc';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import TrainIcon from '@mui/icons-material/Train';
import { pink } from '@mui/material/colors';

// タブ
import { SwiperTab } from 'src/components/SwiperTab'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



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

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }


  return (
    <div>

      <header className={classes.header}>

        <div className={classes.search_container}>
          <input type="text" size="25" value="{{ \Auth::user()->name }}" readonly />
          <input type="submit" value="さまへ" disabled />
        </div>

        <Typography component="div">
          <ButtonGroup variant='' color='inherit' >
            <Button sx={{ p: 0.5, m: 0, }}><Box sx={{ flexDirection: 'column' }}><Item><HomeIcon /></Item><Item sx={{ fontSize: 10 }}>ホーム</Item></Box></Button>
            <Button sx={{ p: 0.5, m: 0, }}><Box sx={{ flexDirection: 'column' }}><Item><LogoutIcon /></Item><Item sx={{ fontSize: 10 }}>ログアウト</Item></Box></Button>
          </ButtonGroup>
        </Typography>

        {/* <form action="{{ route('logout') }}" method="POST">
          @csrf 
          <button type="submit" className={classes.logout_button}>
            <Image src="/img/header/logout16.jpg" alt="" width={72} height={16} />
            <p classNames={classes.logout}> ログアウト </p>
          </button>
        </form> */}
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
      <SwiperTab />



    </div>
  )
}
