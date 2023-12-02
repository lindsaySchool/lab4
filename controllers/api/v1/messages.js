//functie
const getAll = (req, res) => {
    //iets teruggeven
    res.json({
        status: "success",
        data: []
    });
}

const create =  (req, res) => {
    //iets teruggeven
    res.json({
        status: "success",
        data: {
            "message": "Message created"
        }
    });
}

//export the controller
module.exports.getAll = getAll;
module.exports.create = create;