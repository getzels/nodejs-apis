const {MongoClient} = require('mongodb')
const {dotenv} = require('dotenv').config()

async function main () {
    const user = process.env.DB_USERNAME
    const pass = process.env.DB_PASSWORD
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.si660.mongodb.net/?retryWrites=true&w=majority`

    const client = new MongoClient(uri);

    try {
        await client.connect();

        await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

// new dotenv().config();
main().catch(console.error);
