import React from 'react'
import s from './home.module.sass'
import classNames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

const StickyHeader = () => {
    return (
        <div className={classNames(s.headerWrapper, s.blockWrapper, s.container)}>
            <h1 className={s.visuallyHidden}>
                NFT & blockchain projects development team
            </h1>
            <Link href='#'>
                <a href='#' className={s.logo}>
                    <Image
                        alt={"ANOTHER.DEV"}
                        src={'/logo.svg'}
                        height={89}
                        width={313}
                    />
                </a>
            </Link>
            <nav className={s.mainNav}>
                <ul className={s.mainNav__list}>
                    <li className={s.mainNav__item}>
                        <Link href='#development'>service</Link>
                    </li>
                    <li className={s.mainNav__item}>
                        <Link href='#projects'>projects</Link>
                    </li>
                    <li className={s.mainNav__item}>
                        <Link href="#footer">contact us</Link>
                    </li>
                    {/*<li className={s.mainNav__item}>*/}
                    {/*    <Link href="#">dao <span>soon</span></Link>*/}
                    {/*</li>*/}
                </ul>
            </nav>
            {/*<button className={s.connectButton} type="button">connect wallet</button>*/}
        </div>
    )
}

export default StickyHeader
