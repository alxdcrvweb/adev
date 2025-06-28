import { useInjection } from 'inversify-react'
import { observer } from 'mobx-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { UserStore } from '../../stores/UserStore'
const projects = [
    {
        name1: 'NCW PIXAILS',
        img: 'img/NERP 3.png',
        date: '20.11.2021',
        link: '/project/0',
        tags: ['end-to end development', 'web3', 'concept'],
    },
    {
        name1: 'MORPHEUS NTF',
        img: 'img/prog2.png',
        date: '11.03.2021',
        link: '/project/5',
        tags: ['end-to end development', 'web3', 'concept'],
    },
    {
        name1: 'BIT HOTEL NTF',
        img: 'img/proj3.png',
        date: '25.11.2021',
        link: '/project/1',
        tags: ['end-to end development', 'web3', 'concept'],
    },
]
const Projects = observer(({ loaded }: { loaded: boolean }) => {
    const sliderRef = useRef(null)
    const containerRef = useRef(null)
    const [wrap, setWrap] = useState(0)
    const userStore = useInjection(UserStore)

    useEffect(() => {
        if (loaded && containerRef && containerRef?.current) {
            //@ts-ignore
            let wrapper = containerRef?.current?.scrollWidth * 3

            userStore.setContainerHeight(
                //@ts-ignore
                wrapper + containerRef.current.clientHeight - containerRef.current.clientWidth,
            )
        }
    }, [loaded])

    useEffect(() => {
        if (sliderRef) {
            //@ts-ignore
            let rect = sliderRef.current.getBoundingClientRect()
            userStore.setSliderAlignment(rect.top - 140)
            console.log(
                '%cprojects.tsx line:18 wrapperRef',
                'color: #007acc;',
                rect,
            )
        }
    }, [sliderRef])
    useEffect(() => {
        let wropPos = userStore.sliderAlignmentTop - userStore.sliderPosition
        //@ts-ignore
        let wrap = containerRef?.current?.clientWidth
        let maxWrap = -(wrap * 2)

        if (wropPos < -30 && wropPos > maxWrap) {
            setWrap(wropPos)
        } else if (wropPos < maxWrap) {
            setWrap(maxWrap)
        } else if (wropPos >= -30) setWrap(0)
    }, [userStore.sliderPosition])

    return (
        <section className="projects">
            <div className="container">
                <div
                    className="row"
                    style={{
                        transition: '500ms ease all',
                        transform: userStore.visible
                            ? 'translateY(0px)'
                            : 'translateY(-200px)',
                    }}
                >
                    <div
                        className="header--wrapper"
                        style={{ paddingTop: '35px' }}
                    >
                        <div className="titles">
                            <h3 className="h3 first">Another Dev</h3>
                            <p className="h2" style={{ fontSize: '88px' }}>
                                Projects <span>Projects</span>
                            </p>
                        </div>
                        <Link href="projects">
                            <a className="button desktop">
                                <span>See All Projects</span>
                                <svg
                                    width={25}
                                    height={24}
                                    viewBox="0 0 25 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="12.5"
                                        cy={12}
                                        r={12}
                                        fill="white"
                                    />
                                    <path
                                        d="M5.90137 12.3998C5.90137 12.3998 8.30137 7.1998 12.5014 7.1998C16.7014 7.1998 19.1014 12.3998 19.1014 12.3998C19.1014 12.3998 16.7014 17.5998 12.5014 17.5998C8.30137 17.5998 5.90137 12.3998 5.90137 12.3998Z"
                                        stroke="#282829"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M12.5012 14.3506C13.4953 14.3506 14.3012 13.4775 14.3012 12.4006C14.3012 11.3236 13.4953 10.4506 12.5012 10.4506C11.5071 10.4506 10.7012 11.3236 10.7012 12.4006C10.7012 13.4775 11.5071 14.3506 12.5012 14.3506Z"
                                        stroke="#282829"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div
                className="slider"
                ref={sliderRef}
                style={{ height: userStore.containerHeight + 'px' }}
            >
                <div
                    className="wrapper"
                    style={{
                        willChange: 'transform',
                        transition: '0ms ease-out all',
                        transform: `translateX(${wrap}px)`,
                    }}
                >
                    {projects.map((el, i) => {
                        return (
                            <div className="item" ref={containerRef} key={i}>
                                <div className="texts">
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                        }}
                                    >
                                        <Link href={el.link}>
                                            <a className="button">
                                                <div className="text">
                                                    Case Study
                                                </div>
                                            </a>
                                        </Link>
                                        <div className="date">{el.date}</div>
                                    </div>
                                    <div className="wrapper">
                                        <h3
                                            className="h4"
                                            style={{
                                                margin: '10px',
                                                marginLeft: '0px',
                                            }}
                                        >
                                            <span>{el.name1}</span>
                                        </h3>
                                    </div>
                                    <div className="tags">
                                        {el.tags.map((tag, i) => {
                                            return (
                                                <div key={i} className="tag">
                                                    {tag}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <img className="image" src={el.img} alt="#" />
                            </div>
                        )
                    })}
                </div>
            </div>
            <Link href={'/projects'}>
                <a className="button mobile">
                    <span>See All Projects</span>
                    <svg
                        width={25}
                        height={24}
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="12.5" cy={12} r={12} fill="white" />
                        <path
                            d="M5.90137 12.3998C5.90137 12.3998 8.30137 7.1998 12.5014 7.1998C16.7014 7.1998 19.1014 12.3998 19.1014 12.3998C19.1014 12.3998 16.7014 17.5998 12.5014 17.5998C8.30137 17.5998 5.90137 12.3998 5.90137 12.3998Z"
                            stroke="#282829"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M12.5012 14.3506C13.4953 14.3506 14.3012 13.4775 14.3012 12.4006C14.3012 11.3236 13.4953 10.4506 12.5012 10.4506C11.5071 10.4506 10.7012 11.3236 10.7012 12.4006C10.7012 13.4775 11.5071 14.3506 12.5012 14.3506Z"
                            stroke="#282829"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </a>
            </Link>
        </section>
    )
})
export default Projects
