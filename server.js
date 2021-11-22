


const express= require("express");//this calls on the express package
const app= express();
//this calls on the superhero package






app.use(express.urlencoded({extended:true}));

app.use(express.static("public"));





const Flightsdb=[
    {
        destination:"Berlin, Germany" ,
        departure:"11:00",
        date:'01/01/2022',
        imgurl:"anyurlofandimage",//the tower from Berlin 
        duration:"9:00 hours"},
    {
        destination:"London, England " ,
        departure:"12:00",
        date:'07/01/2022',
        imgurl:" ",
        duration:"7:00 hours",
    },

    {
        destination:"Paris, France " ,
        departure:"13:00 ",
        date:'07/01/2022',
        imgurl:" ",// 
        duration:"7:30 hours",
    },

    {
        destination:"Rome, Italy " ,
        departure:"14:00 ",
        date:'02/01/2022',
        imgurl:" ",// 
        duration:"8:30 hours",
    },
    

    {
        destination:"Prague, Czech Republic " ,
        departure:"15:00 ",
        date:'10/01/2022',
        imgurl:" ",// 
        duration:"9:30 hours",
    }
    
]










app.get('/', (req, res)=>{
    res.sendFile("index.html");//this is how we call on our webpage to become a live server
});

app.get('/signin1', (req, res)=>{
    var Flights={
        message: "hola "

    };
    res.header("Access-Control-Allow-Origin", "*");
    res.json(Flights);
});



app.get('/flight/:destination', (req, res)=>{
    
    
    res.json(Flightsdb[req.params.destination]);
});


















app.listen(5000, ()=>{
    console.log("this is running at port 5000" )
});


