<template>
    <div class="secao-left-body container-fluid">
        <div class="row">
            <section class="col-12 section d-flex" :class="[classimage, type]">
                <div class="col-md-6 my-auto box-info">
                    <h1 class="mb-2 titulo-secao-left content-title"><span>{{titulo}}</span></h1>
                    <p class="mt-2 content-description">{{descricao}}</p>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SecaoTextoEsquerda",
        props: ["imagem", "descricao", "titulo", "colorborder", "classimage", "type"],
    }
</script>

<style scoped lang="scss">

    .secao-left-body {
        color: $light-text;
    }

    .static::after {
        content: " ";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 0;
    }

    .section {
        position: relative;
        height: 45vh;
        justify-content: flex-start;
    }

    .bgpalestra {
        background: $color-secondary url('../../assets/images/background-01.jpg') center/cover;
    }

    .box-info {
        text-align: center;
        z-index: 2;
    }

    .titulo-secao-left {
        span {
            position: relative;
            padding-bottom: 1px;
        }

        span::after {
            bottom: 0;
            border-bottom: 1px solid $rainbow-green;
            content: "";
            height: 1px;
            left: 0;
            position: absolute;
            width: 100%;
        }

    }

</style>
