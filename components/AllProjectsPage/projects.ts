export interface IProject {
    name: string
    image1?: string
    logo?: string
    desc: string
    project: string
    image2?: string
    result: string
    links: string[]
    inputs: string
    solutions: string[]
    image3?: string
    technology: string
    development: string[]
    additional?: string
}
export const projects: IProject[] = [
    {
        name: 'ICW PIXELSEAL',
        logo: "../../img/NERP 3.png",
        image1: '../../img/project.png',
        desc: 'Custom web development / GameFi /  NFT / Tokenomics / Strategy',
        project: 'GameFi with own NFT collection and staking',
        image2: '../../img/image-proj.png',
        result: 'award-winning project, connected with ecological charity, currently ran a successful NFT sale and staking, game demo coming soon',
        links: ['https://pixelseal.io/', 'https://twitter.com/PixelSealNFT'],
        inputs: 'existing marketing and design team from customer side with their own plans and schedule, unstable investment processes.',
        solutions: [
            'After multiple meetings and detailed rounds of discussions, the client decided to bring us on board as its tech team for developing website, token, NFT collection, contracts, game architecture and game itself. Aple.',
            'Important to notice, that marketing and design teams was on the side of the client, and they already had their schedules and processes started. So from our sides, we needed to adapt as possible and run development in maximum agile form to match the timings and deadlines. Also, due to complicated investment system, soft-launch was needed. For that case we developed long-time strategy, so development never stop, even in period of investment delays and also there are always resources, which can solve problems fast, if it’s needed.',
            "The project was deployed following a Time and Material (T&M) model. Being a long-term engagement, we decided to stick to the T&M model that made development, testing, and implementation initiatives cost-effective. Besides following a T&M model, we also followed the agile methodology where the sprint duration was set to one weeks. After every sprint session, we had a project demo. Based on the demo's performance, the client used to give us feedback. On the basis of the feedback received after every demo session, we used to plan the subsequent sprint sessions.",
            'In terms of website: client wanted website interface to be intuitive, lag-free, and smooth. We developed an intuitive user interface that was smooth to navigate and incorporated an array of interactive elements across the UI. Also we enable users easily sign-up and login with various wallets possibilities to get access to personal page. At personal page, user can observe minted NFTs, their properties and staking possibilities.',
        ],
        image3: '../../img/image-proj1.png',
        technology: 'Next.js / Nest.js / Solidity / DO',
        development: [
            'End-to-end website development',
            'Deploy smart contracts to mainnet. CI/CD and proper project staging.',
            'ERC20 token (iCW) development: 0xcec907f0d4f16b797efa6c25a633e6f70aab4061',
            'NFT sale (successful) using ERC721 smart contract and iCW token for mint.',
            'NFT staking earning iCW token with 4 staking options and tokenomics',
            'Game architecture development (smart contracts interaction and NFT mechanics)',
            'Game development (browser) with NFT leveling and staking upgrades (demo soon)',
        ],
        additional: 'BEST DeFi NFT & GameFi at Crypto Expo Dubai 2022',
    },
    {
        name: 'BITHOTEL',
        logo: '../../img/hotel_logo.png',
        desc: 'Custom web development / GameFi /  NFT / Marketplace / Tokenomics',
        project: 'global social NFT P2E project with own ecosystem',
        image1: '../../img/hotel.png',
        result: 'really successful project with large community, currently finished few NFT sales on own marketplace with different properties, everything is connected with game metaverse',
        links: [
            'https://bithotel.io/',
            'https://twitter.com/playbithotel',
            'https://t.me/bithotelcommunity',
            'https://discord.com/invite/RFFZNwxY9n',
        ],
        image2: '../../img/hotel2.png',
        inputs: 'lots of teams working on different aspects of project at the same time, complicated technical specification, limited time span',
        solutions: [
            "After extensive research, the client teamed up with our blockchain experts. We collaborated with the client's team to make sure the project transformed from an idea into a reality. We used our blockchain expertise to build a NFT marketplace tool that served the needs of not just users but even owners.",
            'Also, since the global project was already in production and development, our team went ahead with an agile work methodology. The methodology had yielded results in handling multiple project requirements in parallel. This way, our devs was all set to accommodate on-the-fly project requirements from the client and other teams developing website and game.',
            'After collecting and processing the company’s requirements, our team proceeded to a business analysis, vital to delivering the solution that would align with project goals and user expectations. To find out how to make an NFT marketplace stand out from rivals, we researched the audience’s needs and analyzed ten competitive solutions leading the market.',
            'Prior to NFT marketplace development, an important task was to choose a non-fungible token standard, each having its own characteristics. To identify a token standard that would meet project requirements, our team analyzed the goals of digital content makers and researched similar NFT marketplaces. As a result, we recommended the client use the ERC-721 standard to meet the requirements from the gamedev team.',
            "Our team of UI/UX developers collaborated with the client's business team to design an intuitive interface of the marketplace. The team designed an interactive user interface with React's components that brought a new level of simplicity. That was crucial, since the project use own ERC20 token and the additional transfer approve is needed. And the UI/UX should be simple and functional not to scare away user with additional operations.",
        ],
        image3: '../../img/hotel3.png',
        technology: 'Next.js / Node.js / Solidity / Mongo DB / DO',
        development: [
            'optimized minting smart contract ERC721 for NFTs, taking in account established by gamedevs rarity, levels and floor',
            'Implementing admin page interface for NFT and metadata management.',
            'Deploy smart contracts to mainnet. CI/CD and proper project staging.',
            'End-to-end marketplace development with UX   ([https://bithotel.io/#/marketplace](https://bithotel.io/#/marketplace))',
            'Implementing tokenomics and  project own ERC20 token transfers (0x57bc18f6177cdaffb34ace048745bc913a1b1b54)',
            'Implementing backend database for auditing all smart contract events and following NFT sorting mechanism',
        ],
    },
    {
        name: 'MineBarons',
        logo: '../../img/barons_logo.png',
        image1: '../../img/barons.png',
        desc: 'Custom web development / GameFi /  NFT / Marketplace / DAO / Tokenomics ',
        project:
            'GameFi project in medieval setting with various NFT collections, staking, RPG elements and DAO on Polygon blockchain',
        result: 'demo stage with tokenomics, staking and NFT lands; next stage - launching DAO and collection',
        links: [
            'https://demo.minebarons.io/',
            'https://twitter.com/minebarons',
            'https://opensea.io/collection/mine-barons-mint-pass',
        ],
        image2: '../../img/barons2.png',
        inputs: 'project idea, design, and artwork',
        solutions: [
            'Since the client wanted to find long-term partners on the development side, first we needed to build MVP for the game with staking, based on their design and layout, as, let’s say test task.',
            'After developing MVP client decided to bring us on board for both game and DAO development and we started rounds of discussion to deeply understand the project needs and assemble the best possible team. We went through an in-depth study of the platform and its needs. The two-way conversation allows us to finalize the technologies, features, and emerging gamers and promotional platforms needed.',
            'As a result, we created two teams, who works parallel to each other in agile sprinting system on game and DAO section of development. They are having standup calls every few days to sync whole ecosystem and always in touch on technical decisions on both sides. That allows to bring the best solutions using hivemind of both teams.',
            'Important side was to create most secure smart contracts using Solidity to protect the users both in DAO (with proposals) and in game section. So we took our time to add bonus layers of safety and audit the contracts as precise as possible.',
            'Since the project was supposed to attract hordes of user, due to advanced marketing, our team of front-end developers made sure the UI was interactive. That is why the team used the latest components of js. This way, our developers prioritize the usability and stability over everything else',
            'Our backend developers zeroed in on Nest.js and Express.js to build a robust foundation for the application. The team also used MongoDB as the database so that any transactional and data requests were handled optimally with zero downtime.',
        ],
        image3: '../../img/swordsman.jpg',
        technology:
            'Next.js / Nest.js / Solidity / Mongo DB / CRON / mobx / sass / websocket',
        development: [
            'End-to-end website development',
            'Smart contracts development for both DAO, land NFT collection and staking.',
            'Deploy smart contracts to mainnet. CI/CD and proper project staging.',
            'Game architecture development (smart contracts interaction and NFT mechanics)',
            'Game development (browser) with NFT leveling and staking upgrades (demo soon)',
        ],
    },
]
