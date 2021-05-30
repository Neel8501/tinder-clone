import express, { response } from 'express'
import mongooose from 'mongoose'
import Cards from './dbCards.js'
import Cors from 'cors';

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://admin:WG0fQDlGE68lWTqU@cluster0.ggazx.mongodb.net/tinderdb?retryWrites=true&w=majority'

// Middlewares
app.use(express.json())
app.use(Cors())

// DB Config
mongooose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello Neel!!!'));

app.post('/tinder/cards', (req, res)=> {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data)=>{
        if(err) {
            response.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })
});

app.get('/tinder/cards', (req, res)=> {
    Cards.find((err, data)=>{
        if(err) {
            response.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    })
});

// Listner
app.listen(port, () => console.log(`Listning on localhost: ${port}`));