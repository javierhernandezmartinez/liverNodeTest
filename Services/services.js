let axios = require('axios')
const logger = require('winston');

class services {
    requestFolio = (req, res) => {
        let folio = req.body.params.folio
        console.log(folio)

        axios.post('http://localhost:9090/api/services/post/folio/concat?folio='+folio)
            .then(resp => {
                logger.info(`[INFO] ${new Date()} Respuesta de servicio : ${JSON.stringify(resp.data)}`)
                res.json(resp.data)
            })
            .catch(err => {
                console.log(err)
                logger.error(`[ERROR] ${new Date()} Surgio un error : ${err}`)
            })
    }
}

module.exports = services