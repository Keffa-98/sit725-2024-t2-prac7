const { getCats, postCat } = require("../models/cat")

const fetchAllCats = async (req,res) =>{
    const cats = await getCats()
    res.json({ statusCode: 200,data: cats, message: "cats fetched successfully" })
}

const addCat = (req,res)=>{
    const body = req.body;
    ok = postCat(body)
    if (!ok) {
        return res.json({statusCode: 500, message: "an error occured adding cat" });
    }
    return res.json({statusCode: 201, message: "cat added successfully" });

}

module.exports = {
    fetchAllCats,
    addCat
}