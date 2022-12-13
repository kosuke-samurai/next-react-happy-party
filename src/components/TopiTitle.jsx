import Image from 'next/image'
import Link from 'next/link'
import classes from 'src/components/TopiTitle.module.css'

export function TopiTitle() {

    return (
        <>
            <Link className={classes.HlMidashi} href="/article">
                <article className={classes.article}>
                    <div>
                        <Image src="/img/article_photo.jpg" alt="" width={52} height={52} />
                    </div>

                    <div className={classes.topi}>
                        <h1 className={classes.topi_title}>W杯が開幕 がんばれ日本最後まで</h1>
                        <p className={classes.topi_time}>11/17（金）17:29</p>
                    </div>
                </article>
            </Link>


        </>

    )
}