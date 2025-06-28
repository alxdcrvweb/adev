import Marquee from 'react-fast-marquee'
import TextBlock from './textBlock'
import { startups } from './variables'

const Collaborate = ({ collaborate }: any) => {
    return (
        <section className="collaborate" id="collaborate" ref={collaborate}>
            <div className="container">
                <div>
                    <div className="collaborate--wrapper">
                        <Marquee gradient={false}>
                            <div className="header--devs">
                                {Array.from({ length: 10 }).map(
                                    (el: unknown, i: number) => {
                                        return (
                                            <div
                                                className="dev"
                                                key={i}
                                                style={{
                                                    marginLeft:
                                                        i == 0 ? '10px' : '0px',
                                                }}
                                            >
                                                <img
                                                    className="img"
                                                    src="img/logo.svg"
                                                    alt="#"
                                                />
                                                <div className="text">
                                                    ANOTHER DEV
                                                </div>
                                            </div>
                                        )
                                    },
                                )}
                            </div>
                        </Marquee>
                        <div className="titles coll">
                            <h2 className="h2 first">We help web3 start-ups</h2>
                            <h2 className="h2">
                                Growth <span>Growth</span>
                            </h2>
                        </div>
                        <div className="texts coll">
                            {startups.map((text, i) => {
                                return <TextBlock info={text} key={i} />
                            })}

                            {/* <div className="stars">
                <img src="img/Star2.png" alt="#" />
                <img src="img/Star3.png" alt="#" />
              </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Collaborate
