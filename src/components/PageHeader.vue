<template>
    <div class="viewHeader">
        <h1>{{headerName}}</h1>
        <!-- open add form -->
        <button class="addElement" @click="$emit('clickAdd', name)">
            <img src="/images/+.svg" alt="">
        </button>
    </div>
</template>

<script>
export default {
    props:[
        "headerName"
    ]
}
</script>

<style>
    /* Medium Devices, Desktops */
    @media only screen and (min-width : 992px) {
        .header img{
            margin-left: 200px;
        }
    }

    /* Large Devices, Wide Screens */
    /* Bootstrap equivalent usage: 'col-lg-' */
    @media only screen and (min-width : 1200px) {
        .header img{
            margin-left: 367px;
        }
    }
    /* view header */
    .viewHeader {
        display: flex;
        align-items: center;
        margin: 40px 0px 15px 0px;
    }
    .viewHeader h1{
        text-transform: uppercase;
        margin: 0px;
    }
        /* add button */
    .addElement {
        width:44px;
        height:44px;

        border: none;
        background-color: transparent;
        box-shadow: 0px 0px 5px  rgba(0,0,0,0.2);
        border-radius:50%;

        margin: auto 20px;

        display: flex;
        align-items: center;
    } 
    .addElement img {
        width: 18.45px;
        height: 18.45px;
        position: relative;
        margin: 0 auto;
    }
</style>