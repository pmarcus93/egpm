<template>
    <div>

        <div v-if="!campeonato.id_jogo && dadoscarregados">
            <Erro404/>
        </div>

        <div v-else>
            <div class="container-fluid conteudo p-0">
                <BannerJogo
                        :titulo="campeonato.st_nome"
                        :descricao="campeonato.st_descricao"
                        :lancamento="campeonato.dt_lancamento"
                        :estilo="campeonato.st_estilo"
                        :video="campeonato.st_video"
                        :imagem="campeonato.imagens.default.st_url"
                        :plataforma="campeonato.st_plataforma"
                        :classificacaoindicativa="campeonato.st_classificacaoindicativa"
                        :quantidadejogadores="campeonato.nu_quantidadejogadores"
                />
            </div>
        </div>

        <div v-if="campeonato.bl_campeonato === +1" class="container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-12 my-4">
                        <div class="row mt-3">
                            <div class="col-md-8">
                                <h2>Campeonato</h2>

                                <h4>Regras</h4>
                                <p class="text-justify"><span v-html="campeonato.st_regra"></span></p>
                            </div>
                            <div class="col-md-4">
                                <ul class="list-group detalhes-campeonato">
                                    <li class="list-group-item list-group-item-primary">Detalhes</li>
                                    <li v-if="campeonato.st_plataformacampeonato" class="list-group-item"><i
                                            class="fas fa-gamepad"></i> {{campeonato.st_plataformacampeonato}}
                                    </li>
                                    <li v-if="campeonato.nu_vaga" class="list-group-item"><i
                                            class="fas fa-user-friends"></i> {{campeonato.nu_vaga}} Vagas
                                    </li>
                                    <li v-for="item in campeonato.datahorario" :key="item.id_datahorario" class="list-group-item">
                                        <i class="fas fa-calendar-alt"></i> {{item.st_diasemana}}, {{item.st_hora}}
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import BannerJogo from "../itens/BannerJogo";
    import JogoApi from "@/services/JogoApi";
    import Erro404 from "../telas/Error404";

    export default {
        name: "DescricaoCampeonato",
        components: {
            Erro404,
            BannerJogo
        },
        data() {
            return {
                campeonato: {},
                dadoscarregados: false
            }
        },
        created() {
            JogoApi.getOne(this.$route.params.jogo, campeonato => {
                this.campeonato = campeonato.data.data;
                this.dadoscarregados = true;
            })
        }
    }
</script>

<style lang="scss" scoped>

    @keyframes animacao {
        from {
            top: -100px;
            opacity: 0
        }
        to {
            top: 0;
            opacity: 1
        }
    }

    .animate {
        animation: animacao 0.6s;
        display: block;
        position: relative;
    }


    .detalhes-campeonato {
        i {
            margin-right: 10px;
        }
    }

    .list-group-item-primary {
        background-color: $color-primary;
        color: $color-secondary-variant;
        font-family: $font-archive;
    }

</style>
