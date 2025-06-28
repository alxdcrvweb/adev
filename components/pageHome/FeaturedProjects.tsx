import React from 'react'
import s from './home.module.sass'
import classNames from 'classnames'
import FeaturedCard from '../FeaturedCard'

const FeaturedProjects = () => {
    return (
        <section className={classNames(s.featuredProjects, s.container)} id='projects'>
            <div className={s.blockWrapper}>
                <div className={s.featuredProjects__text}>
                    <h2 className={s.featuredProjects__title}>
                        Featured <b>projects</b>
                    </h2>
                    <p className={s.featuredProjects__description}>
                        Last night I had a dream about all kinds of projects.
                        Then I woke up and realized – that’s our website.
                    </p>
                </div>
            </div>
            <div className={s.featuredProjects__cards}>
                <FeaturedCard
                    headingBold="Morpheus"
                    heading=""
                    description="Long term immersive NFT project, developed from scratch to final product. Deep lore and specific artstyle wrapped in original communicative strategy with ARG-elements and &#8220;choose your adventure&#8221; kinda vibe. "
                    tags={['NFT', 'Smartcontracts', 'Full cycle', 'Marketing']}
                />
                <FeaturedCard
                    headingBold="Liminal "
                    heading="space"
                    description="Space P2E strategy with built-in marketplace, using NFT mechanics in full spectrum. Mint your own spaceship, equip with engines and weapons of your choice and conquer the outer space!"
                    tags={['NFT', 'P2E', 'Staking', 'Merging', 'Marketplace']}
                />
            </div>
        </section>
    )
}

export default FeaturedProjects
