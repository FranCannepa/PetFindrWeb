
export const getReportes = async () => {
    // Create a new MongoClient
    const client = new MongoClient(dot, { useUnifiedTopology: true });

    try {
        // Connect to the MongoDB server
        await client.connect();
        // Access the database and collection
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Fetch documents from the collection
        const documents = await collection.find().toArray();

        return documents;
    } catch (error) {
        console.error('Error fetching collection:', error);
        throw error;
    } finally {
        // Close the client connection
        await client.close();
    }
};

// export const postReporte = async (reportData) => {

//     try {

//     } catch (error) {

//     }
// }
