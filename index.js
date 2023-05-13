const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

//mongoDb connection
mongoose.connect('mongodb://localhost:27017/productsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

app.use(bodyParser.json());

//schema of product
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
});
const Product = mongoose.model('Product', productSchema);


app.get('/', async (req, res) => {
    res.send("Hello from the other sides.");
})

//gets all products
app.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.send(products);
    } catch (e) {
        res.send(e);
    }
})

//gets a specific product product by id
app.get("/products/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        console.log(product);
        if (!product) {
            return res.status(404).send();
        } else {
            res.send(product);
        }
    } catch (e) {
        res.status(500).send(e);
    }
});
//adds a new product
app.post("/products", async (req, res) => {
    try {
        const user = new Product(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (e) {
        res.status(400).send(e);
    }
})

//updates the product by id
app.patch("/products/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updatedProducts = await Product.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(updatedProducts);

    } catch (e) {
        res.status(404).send(e);
    }
})
//deletes a product by id
app.delete("/products/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const deleteProduct = await Product.findByIdAndDelete(id);
        if (!deleteProduct)
            return res.status(404).send();
        res.send(deleteProduct);
    } catch (e) {
        res.status(500).send();
    }
});

//listens at port 3000
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});