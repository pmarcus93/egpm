<template>
    <div>
        <div>
            <Banner
                    :button="btnticket"
            ></Banner>
            <Sobre></Sobre>
            <Tournament></Tournament>
            <Campeonatos></Campeonatos>
            <Talks></Talks>
            <FreePlay></FreePlay>
            <Midia></Midia>
            <FAQ></FAQ>
            <Locale></Locale>
            <ButtonTicket
                    :button="btnticket"
                    :is-fixed="true">
            </ButtonTicket>
        </div>
    </div>
</template>

<script>

    import Banner from "../content/Banner";
    import Sobre from "../content/Sobre";
    import Midia from "../content/Midia";
    import Campeonatos from "../itens/GameList";
    import Talks from "../content/Quizzes";
    import Tournament from "../content/Tournament";
    import FreePlay from "../content/FreePlay";
    import FAQ from "../content/FAQ";
    import Locale from "../content/Locale";
    import ButtonTicket from "../itens/ButtonTicket";

    import BotaoApi from "@/services/BotaoApi";

    export default {
        name: "Home",
        props: ["button"],
        created() {
            BotaoApi.getOne(result => {
                this.btnticket = result.data.data;
            });
        },
        data() {
            return {
                btnticket: {
                    st_link: "",
                    bl_ativo: 0
                }
            }
        },
        components: {
            ButtonTicket,
            Locale,
            FAQ,
            FreePlay,
            Tournament,
            Talks,
            Campeonatos,
            Midia,
            Sobre,
            Banner,
        },
    }
</script>

<style>

</style>
