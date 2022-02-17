<template>
  <div class="editPopup" id="editPopup">
        <div class="editPopupInner">
            <div class="formContainer">
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

<style>
    /* form possisioning / outer style */
    .editPopup{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(244,244,244,0.9);
    }
    .editPopupInner{
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .formContainer{
        margin: 0 auto;

        background-color: white;
        border-radius: 5px;
        box-shadow: 0px 0px 5px  rgba(0,0,0,0.2);
    }
    .editForm{
        margin: 0px 46px 35px 46px;
    }
    /* header */
    .editForm h2{
        margin-top: 0px;
        margin-bottom: 28px;

        font-family: Oswald; 
        font-size: 25px; 
        font-style: normal; 
        font-variant: normal; 
        font-weight: 400; 
        line-height: 37.05px; 
        color: #5C5C5C;
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
    .submitButtonContainer{
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
    }
    .submitButton{
        margin-top: 28px;
        width: 92px;
        height: 42px;
        border: none;
        border-radius: 5px;
        background-color: transparent;
        box-shadow: 0px 0px 5px  rgba(0,0,0,0.2);
        padding:2px 2px;

        font-family: Oswald; 
        font-size: 18px; 
        font-style: normal; 
        font-variant: normal; 
        font-weight: 400; 
        line-height: 26px; 
        color: #969696;
    }
    .submitButton:hover{
        color: #0054A6;
    }
    /* fielset */
    .editForm fieldset{
        border-color: #969696;
        border-width: 0.75px;
        border-radius: 7px;

        width: 374px;
        height: 42px;
        padding: 0px 5px 3.3px 0px;
    }

    .formField{
        margin-bottom: 15px;
    }
    .formField:last-child{
        margin-bottom: 0px;
    }
    .editForm legend{
        margin-left: 29px;
    }
    /* inputs */
    .editForm input{
        width: calc(100% - 5px);
        height: calc(100% - 2px);
        border: none;
        border-radius: 5px;
        padding: 2px 5px;
    }
    .editForm input:focus{
        outline: none;
    }

</style>