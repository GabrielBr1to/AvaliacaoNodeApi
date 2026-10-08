import ServiceFilme from '../services/filme.js';


class ControllerFilme {

    Buscar(req, res) {
        try {
            const filmes = ServiceFilme.Buscar()

            res.send({ filmes })
        } catch (error) {
            res.send({ message: e.message })
        }
    }


}

export default new ControllerFilme();