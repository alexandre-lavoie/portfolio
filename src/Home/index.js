/**
 * Home Description.
 * @class Home
 */

// React
import React, { Component } from 'react';
import { Grid, IconButton } from '@material-ui/core';

// Icons
import MenuIcon from '@material-ui/icons/Menu';

// Images
import Trees from '../images/Trees.png';
import Cloud from '../images/Cloud.png';

// CSS
import style from './Home.module.css';

const MIN_WIDTH = 750;
const MIN_WIDTH_HEADER = 875;
const MIN_HEIGHT = 600;
const COLORS = ['#D9C343', '#AD73BB', '#518FB6', '#BF8E7B'];

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titleHover: false,
            colorIndex: 0,
            width: 0,
            heigth: 0
        }

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    changeColor() {
        this.setState({titleHover: true, colorIndex: ((this.state.colorIndex >= COLORS.length - 1) ? 0 : this.state.colorIndex + 1)});
    }

    render() {
        return <>
            <Grid container>
                {
                    (() => {
                        if (this.state.width >= MIN_WIDTH_HEADER) {
                            return (
                                <Grid className={style.linkContainer} item container justify="flex-start" alignItems="center" xs spacing={2}>
                                    <Grid item />
                                    <Grid item>
                                        <span className={style.home}>Home</span>
                                    </Grid>
                                    <Grid item>
                                        <span onClick={() => window.open("https://www.linkedin.com/in/alexandre-lavoie-00/", "_blank")} className={style.aboutMe}>About Me</span>
                                    </Grid>
                                    <Grid item>
                                        <span onClick={() => window.open("https://github.com/alexandre-lavoie", "_blank")} className={style.projects}>Projects</span>
                                    </Grid>
                                    <Grid item>
                                        <span onClick={() => window.open("https://www.linkedin.com/in/alexandre-lavoie-00/", "_blank")} className={style.experience}>Experience</span>
                                    </Grid>
                                </Grid>
                            )
                        } else {
                            return (
                                <Grid container item justify="flex-start" xs spacing={1}>
                                    <Grid item>
                                        <IconButton style={{ color: '#C8C1C4' }}>
                                            <MenuIcon />
                                        </IconButton>
                                    </Grid>
                                    <Grid item />
                                </Grid>
                            )
                        }
                    })()
                }

                <Grid item container justify="flex-end" xs>
                    <Grid item>
                        <IconButton onClick={() => window.open("https://www.linkedin.com/in/alexandre-lavoie-00/", "_blank")}>
                            <svg className={style.linkedIn} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25" cy="25" r="25" fill="#518FB6" />
                                <path d="M19.065 16.7083C19.065 17.9742 18.0475 19 16.7917 19C15.5358 19 14.5183 17.9742 14.5183 16.7083C14.5183 15.4433 15.5358 14.4167 16.7917 14.4167C18.0475 14.4167 19.065 15.4433 19.065 16.7083ZM19.0833 20.8333H14.5V35.5H19.0833V20.8333ZM26.4002 20.8333H21.8462V35.5H26.4011V27.8009C26.4011 23.5201 31.9277 23.1699 31.9277 27.8009V35.5H36.5V26.2132C36.5 18.9899 28.3215 19.253 26.4002 22.8087V20.8333Z" fill="#C8C1C4" />
                            </svg>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={() => window.open("https://github.com/alexandre-lavoie", "_blank")}>
                            <svg className={style.gitHub} width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25" cy="26" r="25" fill="#C4C4C4" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M25 0C11.1875 0 0 11.4705 0 25.6323C0 36.9747 7.15625 46.5547 17.0937 49.951C18.3437 50.1753 18.8125 49.4063 18.8125 48.7335C18.8125 48.1247 18.7813 46.1062 18.7813 43.9595C12.5 45.145 10.875 42.3895 10.375 40.9477C10.0937 40.2107 8.875 37.9359 7.8125 37.3271C6.9375 36.8465 5.6875 35.661 7.78125 35.629C9.75 35.5969 11.1563 37.4873 11.625 38.2563C13.875 42.1332 17.4688 41.0438 18.9063 40.3709C19.125 38.7048 19.7812 37.5834 20.5 36.9426C14.9375 36.3018 9.125 34.091 9.125 24.2866C9.125 21.4991 10.0938 19.1922 11.6875 17.398C11.4375 16.7571 10.5625 14.1298 11.9375 10.6054C11.9375 10.6054 14.0313 9.93253 18.8125 13.2327C20.8125 12.656 22.9375 12.3676 25.0625 12.3676C27.1875 12.3676 29.3125 12.656 31.3125 13.2327C36.0938 9.90049 38.1875 10.6054 38.1875 10.6054C39.5625 14.1298 38.6875 16.7571 38.4375 17.398C40.0313 19.1922 41 21.4671 41 24.2866C41 34.1231 35.1563 36.3018 29.5938 36.9426C30.5 37.7436 31.2813 39.2816 31.2813 41.6846C31.2813 45.1129 31.25 47.8684 31.25 48.7335C31.25 49.4063 31.7188 50.2074 32.9688 49.951C42.8438 46.5547 50 36.9426 50 25.6323C50 11.4705 38.8125 0 25 0Z" fill="#AD73BB" />
                            </svg>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={() => window.open("https://alexandre-lavoie.itch.io/", "_blank")}>
                            <svg className={style.itchIo} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="25" cy="25" r="25" fill="#BF8E7B" />
                                <path d="M12.0659 9.62964L7.77783 15.029V16.541C7.77783 20.8601 14.7811 20.8601 14.7811 16.541C14.7811 20.8601 21.4984 20.8601 21.4984 16.541C21.4984 20.8601 28.5017 20.8601 28.5017 16.541C28.5017 20.8601 35.2197 20.8601 35.2197 16.541C35.2197 20.8601 42.2223 20.8601 42.2223 16.541V15.029L37.9349 9.62964H12.0659ZM14.7105 19.1326C14.4959 19.4207 14.2813 19.6362 14.0673 19.8524C13.2816 20.5003 12.2805 20.7883 11.2802 20.7883C10.9942 20.7883 10.7083 20.7883 10.4944 20.7165V40.3704H39.4372V20.7165C39.1513 20.7883 38.9366 20.7883 38.6507 20.7883C37.6504 20.7883 36.65 20.5003 35.8635 19.8524C35.6496 19.6362 35.435 19.42 35.2211 19.1326C35.0058 19.4207 34.8625 19.6362 34.5773 19.8524C33.7908 20.5003 32.7911 20.7883 31.8614 20.7883C30.8617 20.7883 29.8607 20.5003 29.1455 19.8524C28.9316 19.6362 28.717 19.42 28.5024 19.1326C28.2878 19.4207 28.0738 19.6362 27.8592 19.8524C26.9309 20.5721 25.9298 20.8601 24.9294 20.8601C23.9291 20.8601 22.9287 20.5721 22.1423 19.9242C21.9276 19.708 21.7137 19.4925 21.4991 19.2045C21.2845 19.4925 21.1419 19.7087 20.856 19.9242C20.0695 20.5721 19.0692 20.8601 18.1401 20.8601C17.1397 20.8601 16.1394 20.5721 15.4249 19.9242C15.2103 19.708 14.9964 19.4925 14.7818 19.2045L14.7105 19.1326V19.1326ZM18.5693 22.0841C20.2128 22.0841 20.9273 22.5165 21.785 24.244H28.1451C28.5031 22.5165 29.2175 22.0841 31.3616 22.0841C33.0044 22.0841 35.7915 23.6679 36.2208 25.8997L38.3648 34.3231C38.7933 36.483 37.5791 38.0661 35.435 38.0661C33.9341 38.0661 32.0047 37.0583 30.7191 34.3231H19.2838C17.9975 37.1302 16.0681 38.0661 14.5672 38.0661C12.4231 38.0661 11.2082 36.4823 11.6374 34.3231L13.7814 25.8997C14.2099 23.6679 16.9971 22.0841 18.6406 22.0841H18.5693V22.0841ZM24.9294 25.0356L19.8556 30.435H21.9996V33.1702H27.9312V30.5075H30.0746L24.9294 25.0356Z" fill="#C8C1C4" />
                            </svg>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={() => window.open("mailto:alexandre.lavoie00@gmail.com", "_blank")}>
                            <svg className={style.email} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50ZM7.8957 12.25L24.4375 25.7403L40.9807 12.25H7.8957ZM7.875 15.8083L16.9499 23.2097L7.875 33.1708V15.8083ZM41 33.1708L31.9251 23.2097L41 15.8083V33.1708ZM24.4375 29.3153L29.7761 24.9611L40.9696 37.25H7.90536L19.0989 24.9611L24.4375 29.3153Z" fill="#D9C343" />
                            </svg>
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container className={style.titleContainer}>
                <Grid container justify="center" item xs={12}>
                    <span
                        onMouseEnter={() => this.changeColor()}
                        onMouseLeave={() => this.setState({ titleHover: false })}
                        style={{ color: (this.state.titleHover) ? COLORS[this.state.colorIndex] : "#C8C1C4" }}
                        className={style.title}
                    >
                        Alexandre Lavoie
                    </span>
                </Grid>
                <Grid container justify="center" item xs={12}>
                    <svg className={style.logo} width="100" height="45" viewBox="0 0 100 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M34.6698 18.9151C39.7498 18.9151 43.8679 14.6808 43.8679 9.45757C43.8679 4.2343 39.7498 0 34.6698 0C32.4035 0 30.3286 0.842773 28.7254 2.24015C26.3517 1.44038 23.761 1.04047 20.9531 1.0404C14.6999 1.04047 9.63186 3.18169 5.74887 7.46408C1.91628 11.7466 -4.84081e-06 16.8804 0 22.8654C-4.84081e-06 29.2633 1.81542 34.5519 5.44629 38.7311C9.12757 42.9104 14.2461 45 20.8018 45C25.9455 45 30.4589 43.8907 34.3419 41.6721C38.2249 39.4535 43.4442 35.0163 50 28.3604L55.8962 22.8654C59.88 19.4085 62.3297 16.6224 65.2042 14.6617C68.0786 12.6495 70.5496 11.2564 72.6172 10.4824C74.6847 9.65695 76.828 9.24419 79.0469 9.24413C82.9802 9.24419 86.132 10.5857 88.5023 13.2686C90.9227 15.9 92.133 19.2538 92.1331 23.3298C92.133 27.0447 90.9227 30.2179 88.5023 32.8492C86.0816 35.429 82.7281 36.7189 78.4417 36.7189C76.1771 36.7189 73.9015 36.3026 71.6149 35.47C71.6698 35.0523 71.6981 34.626 71.6981 34.1928C71.6981 28.9695 67.58 24.7352 62.5 24.7352C57.42 24.7352 53.3019 28.9695 53.3019 34.1928C53.3019 39.416 57.42 43.6503 62.5 43.6503C64.1545 43.6503 65.7069 43.2012 67.0483 42.4151C70.6368 44.1384 74.712 45 79.2738 45C83.3585 45 86.9641 44.0971 90.0908 42.2912C93.2677 40.4854 95.7135 37.8282 97.4281 34.3197C99.1426 30.8112 99.9999 26.9931 100 22.8654C99.9999 16.8288 98.0584 11.695 94.1755 7.46408C90.3428 3.18169 85.3 1.04047 79.0469 1.0404C76.0715 1.04047 73.3232 1.50483 70.8018 2.43349C68.2803 3.36228 65.179 5.21972 61.4977 8.00583C57.8164 10.7405 53.9838 14.0684 50 17.9896L45.0832 22.788C39.7377 28.154 35.3504 31.8173 31.9213 33.7779C28.4921 35.7386 24.9621 36.7189 21.3313 36.7189C18.5577 36.7189 16.238 36.1772 14.3722 35.0936C12.5567 34.0101 11.0186 32.4881 9.75794 30.5274C8.49721 28.5668 7.86686 26.1676 7.86687 23.3298C7.86686 19.2538 9.07714 15.9 11.4977 13.2686C13.9183 10.6373 16.9692 9.32158 20.6505 9.32152C22.3487 9.32156 23.959 9.5128 25.4814 9.89523C25.7038 14.9153 29.7325 18.9151 34.6698 18.9151ZM34.6698 14.1864C37.2098 14.1864 39.2689 12.0692 39.2689 9.45757C39.2689 6.84593 37.2098 4.72879 34.6698 4.72879C32.1298 4.72879 30.0708 6.84593 30.0708 9.45757C30.0708 12.0692 32.1298 14.1864 34.6698 14.1864ZM67.0991 34.1928C67.0991 36.8044 65.04 38.9216 62.5 38.9216C59.96 38.9216 57.9009 36.8044 57.9009 34.1928C57.9009 31.5811 59.96 29.464 62.5 29.464C65.04 29.464 67.0991 31.5811 67.0991 34.1928Z" fill="url(#paint0_linear)" />
                        <defs>
                            <linearGradient id="paint0_linear" x1="2.87721e-07" y1="23" x2="100" y2="23" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#518FB6" />
                                <stop offset="0.333332" stopColor="#D9C343" />
                                <stop offset="0.666667" stopColor="#BF8E7B" />
                                <stop offset="1" stopColor="#AD73BB" />
                            </linearGradient>
                        </defs>
                    </svg>
                </Grid>
            </Grid>

            <div className={style.trees} style={{ backgroundImage: `url(${Trees})` }} />

            {
                (() => {
                    if (this.state.width >= MIN_WIDTH && this.state.height >= MIN_HEIGHT) {
                        return (
                            <div>
                                {[0, 1, 2, 3].map((i) => <img src={Cloud} alt='cloud' className={style.cloud} style={{ top: (i % 2 === 0) ? '15vh' : '7vh', animationDelay: `-${i * 5}s` }} />)}
                            </div>
                        )
                    }
                })()
            }

            <Grid container alignItems="center" justify="center" style={{ position: "absolute", bottom: 0, height: "35px", backgroundColor: "#373636" }}>
                <Grid item />
            </Grid>
        </>
    }
}