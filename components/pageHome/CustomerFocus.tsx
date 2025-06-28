import React from 'react'
import s from './home.module.sass'
import classNames from 'classnames'
import Link from "next/link";

const CustomerFocus = () => {
    return (
        <section className={classNames(s.customerFocus, s.container)} id="customerFocus">
            <div className={s.infoBlockWrapper}>
                <div className={s.customerFocus__text}>
                    <h2 className={s.customerFocus__title}>
                        <b>Customer</b> focus
                    </h2>
                    <p className={s.customerFocus__description}>
                        Clear, open and{' '}
                        <strong>
                            honest regular communication with our customers{' '}
                        </strong>
                        and transparent pricing model. No jokes here - we are
                        super serious about that. Free consulting and project
                        estimation, personal project manager and guaranteed
                        result,&nbsp;confirmed by specification.
                    </p>
                </div>
                <Link href="#team">
                    <a className={s.downLink}></a>
                </Link>
            </div>
        </section>
    )
}

export default CustomerFocus
