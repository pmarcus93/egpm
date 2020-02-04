const urljogo = 'Jogo/';

import ConfigServices from "@/services/ConfigServices";

export default {

    getCampeonatos: (callback) => {
        ConfigServices.get("Campeonato", callback);
    },

    getAll: (callback) => {
        ConfigServices.get(urljogo, callback);
    },

    getOne: (id_jogo, callback) => {
        let url = urljogo + id_jogo;
        ConfigServices.get(url, callback);
    },

}