<template>
    <div>
        <header>
            <div class="icon">
                <a href="#"></a>
            </div>
            <div class="der">
                <div class="bordes" @mouseenter="hover=true" @mouseleave="hover=false" @click="menu=!menu">
                    <svg class="progress-ring" width="4vw" height="4vw" >
                        <linearGradient id="linearColors">
                            <stop offset="0%" stop-color="#7a00fb"/>
                            <stop offset="100%" stop-color="#4200e7"/>
                        </linearGradient>
                        <transition name="fill" mode="out-in">
                            <circle v-if="menu" stroke="url(#linearColors)" r="1.9vw" cx="2vw" cy="2vw"/>
                            
                        </transition>
                    </svg>
                    <img src="../assets/utils/menu.svg" :style="[menu ? {transform: 'rotateZ(-90deg)'} : {transform: 'rotateZ(0deg)'}]" alt="Boton de Menu">
                </div>
            </div>
        </header>
        <div class="swp">
            <div class="illu">
                <div class="silueta">
                    <img src="../assets/utils/silueta.png" alt="">
                    <h2>Hola</h2>
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
            hover:'',
            menu:'',
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
.fill-enter-to,.fill-leave{
}
.fill-enter-active{
    animation: circle-animation 8s forwards normal;
}
.fill-leave-active{
    animation: circle-animation 1.5s forwards reverse;
}
</style>