import React from 'react'
import s from './home.module.sass'
import classNames from 'classnames'
import Link from "next/link"

const MainScreen = () => {
    return (
        <section className={classNames(s.mainScreen, s.container)}>
            <div className={s.blockWrapper}>
                <div className={s.mainScreen__text}>
                    <h2 className={s.mainScreen__title}>
                        Otherworldly <b>good</b>
                    </h2>
                    <p className={s.mainScreen__description}>
                        <b>ANOTHER.DEV</b> is <s>another</s> another level blockchain
                        development studio with deep expertise in technology and
                        design/art. Summon an experienced international
                        full-stack multidisciplinary team to push your custom
                        project from scratch to the stars.
                    </p>
                </div>
                <Link href="#development"><a className={s.togetherLink}>let&lsquo;s build together</a></Link>
            </div>
        </section>
    )
}

export default MainScreen
