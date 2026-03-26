productsRouterimport express from 'express';
import productsRouter from './routes/products'

const app = express()

app.use(express.json())
app.use('/products', productsRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)})
