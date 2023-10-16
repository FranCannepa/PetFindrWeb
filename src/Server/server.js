const express = require('express');
const cors = require("cors");
const { connectToDb, getDb } = require('./db');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config({ path: '../Config/variables.env' })
app.use(cors());
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));


connectToDb((err) => {
    if (!err) {
        app.listen(3080, () => {
            console.log("Listening to port: " + 3080)
        })
        db = getDb();
    }
})



app.get('/reports', async (req, res) => {
    try {
        const result = await db.collection('Reports').find({}).toArray();
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/report/:id', async (req, res) => {

    try {

    } catch (error) {

    }

})

app.post('/upload', async (req, res) => {
    const { type, petType, race, color, image, size, coordinates, latestId, reporter } = req.body;
    try {
        const result = await db.collection('Reports').insertOne({ type, petType, race, color, image, size, coordinates, latestId, reporter });
        if (result) {
            res.send({ code: 200, result: result })
        } else {
            res.send({ code: 505, message: "Bad Request" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/login', async (req, res) => {

    const { email, password, username } = req.body;

    try {
        const result = await db.collection('Users').findOne({ email, password });
        if (result) {
            res.send({ code: 200, result: result })
        } else {
            res.send({ code: 404, message: "User not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});


app.get('/latest', async (req, res) => {
    try {
        const result = await db.collection('ReportSequence').findOne({ _id: "Reports" });
        if (result) {
            res.json({ sequence_value: result.sequence_value });
        } else {
            res.status(404).json({ error: 'Sequence not found.' });
        }
    } catch (error) {
        console.error('Error retrieving sequence:', error);
        res.status(500).json({ error: 'An error occurred while retrieving the sequence.' });
    }
});

app.post('/update_latest', async (req, res) => {
    try {
        const result = await db.collection('ReportSequence').findOneAndUpdate({ _id: "Reports" }, { $inc: { sequence_value: 1 } }, { returnOriginal: false });
        console.log(result);
        res.json(result.value);
    } catch (error) {
        console.error('Error updating sequence:', error);
        res.status(500).json({ error: 'An error occurred while updating the sequence.' });
    }
});




app.get('/', (req, res) => {
    res.send({})

})

