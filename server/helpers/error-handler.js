module.exports = function (err, req, res, next) {
    if (err.code === 400) {
        res.status(400).json({
            message: `Error 400: Bad Request`
        })
    } else if (err.code === 401) {
        res.status(401).json({
            message: `Error 401: Not Authorized`
        })
    } else if (err.code === 404) {
        res.status(404).json({
            message: `Error 404: Not Found`
        })
    } else if (err.name === 'ValidationError') {
        res.status(400).json(err.message);
    } else {
        console.log(err)
        res.status(500).json({
            message: `Error 500: Internal server error`
        })
    }
}