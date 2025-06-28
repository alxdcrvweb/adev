import React from 'react'
import s from './home.module.sass'
import classNames from 'classnames'
import Link from "next/link"

const Development = () => {
    return (
        <section className={classNames(s.development, s.container)} id='development'>
            <div className={s.infoBlockWrapper}>
                <div className={s.development__text}>
                    <h2 className={s.development__title}>
                        <b>End-to-end</b> development
                    </h2>
                    <p className={s.development__description}>
                        Development of different scaled decentralized
                        applications (DApp), cryptocurrency, NFTs and whatever
                        you can dream of.
                        <strong> Even catgirls.</strong> Last but not least:
                        production capacity <s>over 9000h</s> over 2000h - gotta
                        go fast.
                    </p>
                </div>
                <Link href="#customerFocus">
                    <a className={s.downLink}></a>
                </Link>
            </div>
        </section>
    )
}

export default Development
