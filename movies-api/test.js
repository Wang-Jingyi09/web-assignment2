
const axios = require('axios');
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const https = require('https');
const agent = new https.Agent({  
    rejectUnauthorized: false
  });
const getUpcomingMovies = async () => {
    try {
        let res = await axios.get(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=f84d47c06e7e7fc9b52da9eb26d58210&language=en-US&page=1`,{  })
            return res.data;

        // const response = await fetch(
        //     `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
             
        // );
        // const response = await fetch(
        //     `https://www.xiaowanwu.cn/shoppingapi/restaurant/query`
             
        // );

        
        // if (!response.ok) {
        //     throw new Error(response.json().message);
        // }

        // return await response.json();
    } catch (error) {
        throw error;
    }
};

getUpcomingMovies().then((res)=>{
    console.log("res===",res)
    })