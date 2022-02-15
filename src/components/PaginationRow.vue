<template>
    <div class="paginationContainer">
        <div class="pagination" id="pagination">
            <router-link 
                v-for="(link, index) in links" :key='link.label' 
                :class="[isFinite(link.label) ? 'pageButton' : 'paginationArrow', {'hidden':link.url == null} , {'selected' : link.active}]"
                :to="{ name: 'countries', params:{ page: this.page(link.url) } }"
            >
                <img v-if="index==0 || index+1 == links.length" :src="index==0 ? '/images/Vector 2.1.svg':'/images/Vector 2.2.svg'">
                <template v-else>
                    {{link.label}}
                </template>    
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ['links'],
    methods:{
        page(link){
            if(link === null) return 1
            const url = new URL(link);
            const urlParams = new URLSearchParams(url.search);
            return urlParams.get('page');
        }
    }
}
</script>

<style scoped>
    /* pagination */
    .paginationContainer{
        display: flex;
        width: 100%;
    }
    .pagination{
        margin: 10px auto;
    }
    .pagination a{
        border: none;
        background: none;
        text-decoration: none;
        margin: 0px 2px;
        padding: 0px 2px;
    }
    .paginationArrow:hover{
        box-shadow: 0px 0px 2px  rgba(0,0,0,0.2);
    }
    .paginationArrow img{
        transform: translate(-0%, -50%) rotate(90deg);
    }
    .pagination .pageButton{
        display: inline;
    }
    .pagination .pageButton{
        font-size: 12px;
        line-height: 15px;
    }
    .pagination .pageButton:hover{
        box-shadow: 0px 0px 2px  rgba(0,0,0,0.5);
    }
    .pagination .pageButton.selected{
        color:white;
        cursor: not-allowed;
        pointer-events: none;
        background-color: #A3A3A3;
        border-radius: 2px;
    }
    .pagination .paginationArrow.hidden{
        display: none;
    }
</style>