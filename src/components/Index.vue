<template>
    <div>
        <header>
            <div class="icon">
                <a href="/">david diaz</a>
            </div>
            <div class="der">
                <div class="bordes" @click="menu=!menu">
                    <svg class="progress-ring" width="4vw" height="4vw" >
                        <linearGradient id="linearColors">
                            <stop offset="0%" stop-color="#7a00fb"/>
                            <stop offset="100%" stop-color="#4200e7"/>
                        </linearGradient>
                        <transition name="fill">
                            <circle v-if="menu" stroke="url(#linearColors)" r="1.9vw" cx="2vw" cy="2vw"/>
                        </transition>
                    </svg>
                    <img src="../assets/utils/menu.svg" :style="[menu ? {transform: 'rotateZ(-90deg)'} : {transform: 'rotateZ(0deg)'}]" alt="Boton de Menu">
                </div>
            </div>
        </header>
        <div class="body">
            <div class="fondo" @mouseenter="hover=true" @mouseleave="hover=false">
                <div class="contenedorImg">
                    <div>
                        <img :style="[hover ? {transform: 'scale(1.15)'}:{transform: 'scale(1)'}]" src="../assets/utils/silueta.png" alt="">
                        <div class="info">
                            <h1>David</h1>
                            <h4>Novice Developer</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45"/>
        </svg> -->
    </div>
</template>

<script>
export default{
    data(){
        return{
            menu: false,
            hover:false
        }
    },
    computed:{
        rotate(){
            return {
                
            }
        }
    }
}
</script>

<style>
.bounce-enter-active{
    transform: scale(1.2);
}
</style>