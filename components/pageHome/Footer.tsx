import React from 'react'
import { observer } from 'mobx-react'
import { FC } from 'react'
import s from './home.module.sass'
import classNames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'

const Footer: FC = observer(({ }) => {
    return (
        <footer className={s.footer} id='footer'>
            <div className={cn(s.footer__container, s.footer__wrapper)}>
                <a className={s.bookConsulting} href="https://calendly.com/another-dev" target='_blank'>
                    Book your free consulting now!
                </a>
                <ul className={s.social__list}>
                    <li className={s.social__item}>
                        <a href='mailto:info@adev.co'>
                            <Image
                                alt={"contact us"}
                                src={'/mail.svg'}
                                height={45}
                                width={45}
                            />
                        </a>
                    </li>
                    <li className={s.social__item}>
                        <a href='https://twitter.com/adev_co' target='_blank'>
                            <Image
                                alt={"Another dev twitter account"}
                                src={'/twitter.svg'}
                                height={45}
                                width={45}
                            />
                        </a>
                    </li>
                    <li className={s.social__item}>
                        <a href='https://adev.co' target='_blank'>
                            <Image
                                alt={"Our website"}
                                src={'/website.svg'}
                                height={45}
                                width={45}
                            />
                        </a>
                    </li>
                </ul>
                <div className={s.footer__text}>
                    © another.dev, 2025.
                </div>
            </div>
        </footer>
    )
})

export default Footer