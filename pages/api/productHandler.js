import { MongoClient } from 'mongodb';

const Handler = async (req, res) => {


    // console.log('Request', req, '\nResponse', res)
    // CHECK REQUEST METHOD e.g POST, GET, PUT etc
    if (req.method === 'POST') {
        const data = req.body;
        // destructing data
        // const { title, description, price, image } = data;
        
        // Connect Data Base
        const client = await MongoClient.connect('mongodb+srv://asadmumtaz92:Qwerty123@cluster1.csldcdq.mongodb.net/BarterAway?retryWrites=true&w=majority');
        const db = client.db();

        // Create Collection/table
        const prodCollections = db.collection('products');
        // Insert Data in Collection/Table
        const result = await prodCollections.insertOne(data);
        console.log('Result =', result);

        client.close();

        res.status(201).json({ status: true, message: 'Product inserted successfully!' });
    }
    else {
        console.log('Something went wrong.')
    }
 }

export default Handler;
