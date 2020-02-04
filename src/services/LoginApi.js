const urllogin = 'Login/';

import ConfigServices from "@/services/ConfigServices";

export default {

    postLogin: (usuario, callback) => {
        ConfigServices.post(urllogin, usuario, callback);
    },

    verificaLogin: (credenciais, callback) => {
        let url = urllogin + credenciais.id_usuario + "/verificalogin";
        ConfigServices.post(url, credenciais, callback);
    },

    logout: (credenciais, callback) => {
        let url = urllogin + credenciais.id_usuario + "/logout";
        ConfigServices.post(url, credenciais, callback);
    },

}