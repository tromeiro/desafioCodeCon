import express from express;
import publicRoutes from './src/routes/public.js';


const app = express();
app.use(express.json());


app.listen(3000);