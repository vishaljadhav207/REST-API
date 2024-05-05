import app from "./src/app";


const startServer = () => {
    const port = process.env.PORT || 8001

    app.listen(port, () => {
        console.log(`Listening on port :${port}`)
    })
}

startServer();