const urlpatrocinador = 'Patrocinador/';

import ConfigServices from "@/services/ConfigServices";

export default {

    getAll: (callback) => {
        ConfigServices.get(urlpatrocinador, callback)
    },

    getRealizadores: (callback) => {
        let url = urlpatrocinador + "getRealizadores";
        ConfigServices.get(url, callback);
    },

    getApoiadores: (callback) => {
        let url = urlpatrocinador + "getApoiadores";
        ConfigServices.get(url, callback);
    },

    getPatrocinadores: (callback) => {
        let url = urlpatrocinador + "getPatrocinadores";
        ConfigServices.get(url, callback);
    },

    getOne: (id_patrocinador, callback) => {
        let url = urlpatrocinador + id_patrocinador;
        ConfigServices.get(url, callback);
    },

}
