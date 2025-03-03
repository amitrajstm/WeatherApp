import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox ({info}){
    let Hot_wea = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let Could_URL = "https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let Rain_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";

    return(
        <div className="infoBox">
            <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                       
                        image={info.Humidity>=60?Rain_URL:info.temp>20?Hot_wea:Could_URL}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.Humidity>=60?<ThunderstormIcon/>:info.temp>20?<WbSunnyIcon/>:<AcUnitIcon/>} &nbsp;{info.city} 
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}  component={"span"}>
                          <p>Temperature = {info.temp}&deg;C </p>
                          <p>Humidity = {info.Humidity}&deg;C </p>
                          <p>Min Temp = {info.tempMin}&deg;C </p>
                          <p>Max Temp = {info.tempMax}&deg;C </p>
                          <p>The Weather can be described as <b><i>{info.Discriptions}</i></b> and feels like = {info.feelsLike}&deg;C </p>
                        </Typography>
                      </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}