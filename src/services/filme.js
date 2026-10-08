import filme from '../models/filme.js';

class ServiceFilme {
    Buscar(){
        return filme.buscar()
    }
    
}

export default new ServiceFilme()