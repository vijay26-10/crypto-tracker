import { LinearProgress, makeStyles, Typography, Button } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import CoinInfo from "../Components/CoinInfo";
import { SingleCoin } from "../config/api";
import { CryptoState } from "../CryptoContext";
import { numberWithCommas } from "../Components/Coinstable";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
const CoinPage = (props) => {

  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol, user, watchlist,setAlert } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
        
      },
    },
    sidebar: {
     
      width: "500px",
      [theme.breakpoints.down("md")]: {
        width: "400px",
        height:"600px",
        display:"flex",
        flexDirection:"column",
        borderRadius:"25px",
        boxShadow:"0 2px 7px 1px rgba(31, 31, 31, 0.2)",
        backgroundColor:"#1d1f21",
        position:"relative",
        cursor:"grab",
        marginBottom:"20px",
        paddingBottom:"10px"
      },
      borderRadius: "41px",
      background: "linear-gradient(145deg, #38393b, #424347)",
      boxShadow:  "20px 20px 33px #212224,-20px -20px 33px #5b5c60",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 25,
      borderRight: "2px solid grey",
      width: "400px",
      height:"600px",
      position:"relative",
      cursor:"grab",
      marginBottom:"20px",
      paddingBottom:"10px",
      paddingTop:"10px",
      marginLeft:"10px"
    },
    heading: {
      fontWeight: "bold",
      marginBottom: 20,
      fontFamily: "Montserrat",
    },
    description: {
      width: "100%",
      fontFamily: "Montserrat",
      padding: 20,
      paddingBottom: 15,
      paddingTop: 0,
      textAlign: "justify",
      fontSize:"15px",
    },
    marketData: {
      alignSelf: "start",
      padding: 25,
      paddingTop: 10,
  
      width: "100%",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection:"column",
        alignItems:"center",
        // justifyContent: "space-around",
      },
      [theme.breakpoints.down("xs")]: {
        alignItems: "start",
      },
    },
  }));

  const inWatchlisst = watchlist.includes(coin?.id);

  const addToWatchlist = async() => {
    const coinRef = doc(db,"watchlist",user.uid);

    try{
      await setDoc(coinRef,{
        coins:watchlist ? [...watchlist, coin?.id] : [coin?.id],
      });

      setAlert({
        open:true,
        message:`${coin.name} Added to the Watchlist!`,
        type:"success",
      });
    }catch (error){
      setAlert({
        open:true,
        message:error.message,
        type:"error",
      });

    }
  };

  const removeFromWatchlist = async () => {
    const coinRef = doc(db, "watchlist", user.uid);
    try {
      await setDoc(
        coinRef,
        { coins: watchlist.filter((watch) => watch !== coin?.id) },
        { merge: true }
      );

      setAlert({
        open: true,
        message: `${coin.name} Removed from the Watchlist !`,
        type: "success",
      });
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
    }
  };

  const classes = useStyles();


  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;





    
  
    return (
      <div className={classes.container}>
     
        <div className={classes.sidebar}>
          <img
            src={coin?.image.large}
            alt={coin?.name}
            height="200"
            style={{ 
              marginBottom: 20,
              width:"auto",
              userSelect:"none"
            }}
          />
          <Typography variant="h3" className={classes.heading}>
            {coin?.name}
          </Typography>
          <Typography variant="subtitle1" className={classes.description}>
            {ReactHtmlParser(coin?.description.en.split(". ")[0])}.
          </Typography>
          <div className={classes.marketData}>
            <span style={{ display: "flex" }}>
              <Typography variant="h5" className={classes.heading}>
                Rank:
              </Typography>
              &nbsp; &nbsp;
              <Typography
                variant="h5"
                style={{
                  fontFamily: "Montserrat",
                }}
              >
                {numberWithCommas(coin?.market_cap_rank)}
              </Typography>
            </span>

            <span style={{ display: "flex" }}>
              <Typography variant="h5" className={classes.heading}>
                Current Price:
              </Typography>
              &nbsp; &nbsp;
              <Typography
                variant="h5"
                style={{
                  fontFamily: "Montserrat",
                }}
              >
                {symbol}{" "}
                {numberWithCommas(
                  coin?.market_data.current_price[currency.toLowerCase()]
                )}
              </Typography>
            </span>
            <span style={{ display: "flex" }}>
              <Typography variant="h5" className={classes.heading}>
                Market Cap:
              </Typography>
              &nbsp; &nbsp;
              <Typography
                variant="h5"
                style={{
                  fontFamily: "Montserrat",
                }}
              >
                {symbol}{" "}
                {numberWithCommas(
                  coin?.market_data.market_cap[currency.toLowerCase()]
                    .toString()
                    .slice(0, -6)
                )}
                M
              </Typography>
            </span>

            {user && (
              <Button
                varient = "outlined"
                style={{
                  width:"100%",
                  height:40,
                  backgroundColor: inWatchlisst ? "#ff0000":"#00C9A7                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    "
                }}
                onClick={inWatchlisst ? removeFromWatchlist : addToWatchlist}>
                  {inWatchlisst ? "Remove from Watchlist" : "Add to Watchlist"}
                </Button>
            )}
          </div>
        </div>
     
        <CoinInfo coin={coin} />
      </div>
      
    );    
  
};

export default CoinPage;








