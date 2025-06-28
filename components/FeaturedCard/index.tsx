import React from 'react'
import s from './featuredCard.module.sass'
import classNames from 'classnames'
interface props {
    headingBold: string
    heading: string
    description: string
    tags: string[]
}

const FeaturedCard = ({ headingBold, heading, description, tags }: props) => {
    return (
        <div className={s.featuredCard}>
            <h3 className={s.featuredCard__heading}>
                <b>{headingBold}</b>
                {heading}
            </h3>
            <p className={s.featuredCard__description}>{description}</p>
            <div className={s.tags}>
                {tags.map((el, index) => {
                    return (
                        <div key={index} className={s.tag}>
                            {el}
                            {index < tags.length ? <div /> : ''}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FeaturedCard
