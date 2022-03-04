// import { ClassNames } from '@emotion/react'
import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Carousel from './Carousel'
import Typical from 'react-typical';
import Particles from "react-tsparticles";

const useStyles = makeStyles(() => ({
    banner: {
        borderRadius: "41px",
        background: "linear-gradient(145deg, #38393b, #424347)",
        boxShadow:  "20px 20px 33px #212224,-20px -20px 33px #5b5c60",
        marginLeft:"50px",
        marginRight:"50px",
        marginTop:"20px"
    },
    bannerContent:{
        height:400,
        display:"flex",
        flexDirection:"column",
        paddingTop:25,
        justifyContent:"space-around", 
    },
    tagline:{
        display:"flex",
        height:"40%",
        flexDirection:"column",
        justifyContent:"center",
        textAlign:"center",
    },
}))


const Banner = () => {

    const classes = useStyles()


    return (
        
        <div className={classes.banner}>
           <Container className={classes.bannerContent}>
           <Particles
            // id="tsparticles"

            options={{
                
                
            // background: {
            // color: {
            //     value: "#0d47a1",
            // },
            // },
            fpsLimit: 50,
            interactivity: {
            events: {
                onClick: {
                enable: true,
                mode: "push",
                },
                onHover: {
                enable: true,
                mode: "repulse",
                },
                resize: true,
            },
            modes: {
                bubble: {
                distance: 400,
                duration: 5,
                opacity: 0.8,
                size: 50,
                },
                push: {
                quantity: 4,
                },
                repulse: {
                distance: 200,
                duration: 0.4,
                },
            },
            },
            particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#8fd3f4",
                distance: 50,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outMode: "bounce-horizontal",
                random: true,
                speed: 4,
                straight: false,
            },
            number: {
                density: {
                enable: true,
                area: 800,
                },
                value: 40,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "image",
                "image":{
                    "src": "https://cryptologos.cc/logos/thumbs/bitcoin.png?v=018",
                    
                },
            },
            size: {
                random: true,
                value: 10,
            },
            },
            detectRetina: true,
        }}
        />
               <div className={classes.tagline}>
                   <Typography
                    
                    style={{
                        fontSize:30,
                        fontWeight:"bold",
                        marginBottom:15,
                        fontFamily:"Montserrat",
                    }}>
                    <h2>
                        <Typical
                        loop={Infinity}
                        wrapper='b'
                        steps={[
                            'Crypto Tracker',
                            1000,
                            'Crypto Tracker',
                            1000,
                            'Crypto Tracker',
                            1000,
                            'Crypto Tracker',
                            1000,
                            'Crypto Tracker',
                            1000,
                        ]}
                        />
                    </h2>


                    </Typography>
                    <Typography
                    varient="subtitle2"
                    style={{
                        color:'darkgray',
                        textTransform:"capitalize",
                        fontFamily:"Montserrate",

                    }}
                    >
                        Get all the info regarding your favorite crypto currency
                    </Typography>
               </div>
               <Carousel/>
            </Container> 
        </div>
    )
}

export default Banner
