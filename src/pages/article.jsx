import * as React from 'react';
import Image from 'next/image';
import { Header } from 'src/components/Header';

import classes from 'src/styles/article.module.css'

import AssignmentIcon from '@mui/icons-material/Assignment';

export default function article() {

    return (
        <div>
            <Header />

            <main id="article_main" className={classes.article_main}>

                <article className={classes.article_detail}>
                    <div className={classes.image_container}>
                        <Image src="/img/ring_photo.jpg" alt="" layout="fill" className={classes.image} />
                    </div>

                    <div className=''>
                        <h1 className={classes.article_title}>浜辺美波が第一子女児を妊娠した</h1>
                        <p className={classes.topi_time}>11/17（金）17:29</p>
                    </div>

                </article>

                <div className={classes.article_lead}>
                    <p className={classes.article_detail_text}>
                        13日に行われる坂井田家の結婚披露宴（東京・帝国ホテル）のプログラムは、「列席の皆さまに楽しんでほしい」という思いで新郎新婦が共に考えたものだ。新郎新婦入場の際は、盛大な拍手と温かな手拍子で迎えたい。新郎が「ビックリするほどキレイだ」と太鼓判を押す新婦のお色直し後のドレスにも注目だ。披露宴は13日正午開始予定。
                    </p>
                </div>

                <div>

                    <div className={classes.kokopoi}>
                        <AssignmentIcon sx={{ my: -1, }} />
                    </div>

                    <div>
                        <dl className={classes.kokopoi_detail}>
                            <dt className={classes.dt}>Q.新郎はどんな人物？</dt>
                            <dd className={classes.kokopoi_detail_qa}>
                                <div>A.</div>
                                <div>
                                    東京都出身。高校時代はラグビー部の主将を務めた。東京都出身。高校時代はラグビー部の主将を務めた。東京都出身。高校時代はラグビー部の主将を務めた。東京都出身。高校時代はラグビー部の主将を務めた。
                                </div>
                            </dd>
                        </dl>



                        <dl className={classes.kokopoi_detail}>
                            <dt className={classes.dt}>二人の思い出の写真</dt>
                            <dd className={classes.img_center}>
                                <div className={classes.image_container}>
                                    <Image src="/img/holiday.jpg" alt="" layout="fill" className={classes.image} />
                                </div>
                            </dd>
                        </dl>


                    </div>

                </div>

            </main>

        </div>
    )
}