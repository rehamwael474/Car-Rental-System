import{MongoClient} from 'mongodb'

const client = new MongoClient("mongodb://localhost:27017")
export function connection(){
    client
    .connect().then(()=> 
        console.log("db connected successfully"))
    .catch((err)=>{
        console.log("field to connect to db",err)
    })

}
export const db = client.db("assignment7")