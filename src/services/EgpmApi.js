import axios from 'axios';

global.urlbase = 'http://egpmdeveloper.lucasjunior.com.br/';

export default {

    pushAutenticationobject: (object) => {
        if (object === null) {
            object = {};
        }
        object.st_token = localStorage.getItem('st_token');
        object.id_usuario = localStorage.getItem('id_usuario');
        return object;
    },

    getAllCampeonatos: (callback) => {
        var urlcampeonatos = urlbase + "Jogo/";
        axios.get(urlcampeonatos).then((campeonatos) => {
            if (callback) {
                callback(campeonatos);
            }
        })
    },

    getCampeonato: (id_jogo, callback) => {
        var urlcampeonato = urlbase + "Jogo/" + id_jogo;
        axios.get(urlcampeonato).then((campeonato) => {
            if (callback) {
                callback(campeonato);
            }
        })
    },

    postLogin: (usuario, callback) => {
        var urlcampeonato = urlbase + "Login/";
        axios.post(urlcampeonato, usuario).then((campeonato) => {
            if (callback) {
                callback(campeonato);
            }
        })
    },

    verificaLogin: (credenciais, callback) => {
        var urlcampeonato = urlbase + "Login/" + credenciais.id_usuario + "/verificalogin";
        axios.post(urlcampeonato, credenciais).then((result) => {
            if (callback) {
                callback(result);
            }
        })
    },

    postCampeonato: (campeonato, callback) => {
        var urlcampeonato = urlbase + "Jogo/";
        axios.post(urlcampeonato, campeonato).then((campeonato) => {
            if (callback) {
                callback(campeonato);
            }
        })
    },

    deleteCampeonato: (id, token, callback) => {
        var urlcampeonato = urlbase + "Jogo/" + id;
        axios.delete(urlcampeonato, token).then((campeonato) => {
            if (callback) {
                callback(campeonato);
            }
        })
    },

    logout: (credenciais, callback) => {
        var url = urlbase + "Login/" + credenciais.id_usuario + "/logout";
        axios.post(url, credenciais).then((result) => {
            if (callback) {
                callback(result);
            }
        })
    },

    getAllSecao: (callback) => {
        var url = urlbase + "Secao/";
        axios.get(url).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },
    getSecao: (id, callback) => {
        var url = urlbase + "Secao/" + id;
        axios.get(url).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },
    getIconeSecao: (id_secao, callback) => {
        var url = urlbase + "Icone/" + id_secao + "/secao";
        axios.get(url).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },

    salvarsessao: (data, callback) => {
        var url = urlbase + "Secao/";
        axios.post(url, data).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },

    salvarIconeSobre: (data, callback) => {
        var url = urlbase + "Icone/";
        axios.post(url, data).then((retorno) => {
            if (callback) {
                callback(retorno);
            }
        })
    },


}