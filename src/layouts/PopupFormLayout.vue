<template>
  <div class="popup">
        <div class="popupInner">
            <div class="itemContainer">
                <div class="closeButtonContainer">
                    <button class="closeButton" @click="this.$emit('close')">
                        <img src="/images/x.svg" alt="">
                    </button>
                </div>
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    /* form possisioning / outer style */
    .popup{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(244,244,244,0.9);
    }
    .popupInner{
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .itemContainer{
        margin: 0 auto;

        background-color: white;
        border-radius: 5px;
        box-shadow: 0px 0px 5px  rgba(0,0,0,0.2);
    }
    /* buttons */
    .closeButtonContainer{
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
    }
    .closeButton{
        border: none;
        background-color: transparent;
        padding: 0px;
        width: 64px;
        height: 64px;
        margin-bottom: -20px;

        display: flex;
        align-items: center;
    }
    .closeButton img{
        margin: 0 auto;
        width: 14px;
        height: 14px;
    }
    .closeButton img:hover{
        filter: brightness(0) saturate(100%) invert(17%) sepia(100%) saturate(2224%) hue-rotate(197deg) brightness(99%) contrast(101%);
    }
</style>