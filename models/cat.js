const client = require("../dbConnection");

const getCats= async ()=>{
    try {
        const cats = await client.db().collection('cats').find({}).toArray()
        return cats
        
    } catch (error) {
        return null
    }
}


const postCat = async (cat)=>{
    try {
        await client.db().collection('cats').insertOne(cat)
        return true
    } catch (error) {
        return false
    }
}

module.exports = {
    getCats,
    postCat
}