<template>
  <div class="contentTableContainer">
        <table class="contentTable" id="contentTable">
            <thead>
                <tr>
                    <th v-for="(attribute, index) in attributes" :key="attribute.apiKey">
                        <template v-if="index !== 0">
                            {{attribute.collName}}
                        </template>
                        <div v-if="index === 0" class="nameCollHeader">
                            {{attribute.collName}}
                            <div class="sortButtons" id="sortButtons">
                                <button @click="sort('acs')" :class="{'selected' : order == 'acs'}"><img src="/images/Vector 2.2.svg" alt=""></button>
                                <button  @click="sort('desc') " :class="{'selected' : order == 'desc'}"><img src="/images/Vector 2.1.svg" alt=""></button>  
                            </div>
                        </div>
                    </th>
                    <th>
                        Veiksmai
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td v-for="attribute in attributes" :key="attribute.apiKey + item.id">
                        {{item['attributes'][attribute.apiKey]}}
                    </td>
                    <td class="actionCell">
                        <button class="actionBtn" @click="$emit('edit', item['id'])">
                            <img src="/images/Edit.svg">
                        </button>
                        <button class="actionBtn vLine" @click="$emit('delete', item['id'])">
                            <img src="/images/Trash.svg">
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props:['items', 'attributes'],
    data(){
        return {
            order : null
        }
    },
    methods:{
        sort(order){
            this.order = order
            this.$emit('sort', order)
        }
    }
}
</script>

<style>
    /* table */
    .contentTable{
        width: 100%;
    }
    .contentTableContainer thead{
        text-transform: uppercase;
    }
    .contentTableContainer{
        overflow-x: auto;
        padding: 33px;
        box-shadow: 0px 0px 5px  rgba(0,0,0,0.2);
        border-radius: 5px;
    }
        /* links in name */
    .contentTable td a{
        text-decoration: none;
    }
        /* sort */
    .contentTable .nameCollHeader{
        white-space: nowrap;
    }
    .contentTable .nameCollHeader >*{
        display: inline-block;
    }
    .contentTable .sortButtons button{
        border:none;
        background-color: transparent;
        display: flex;
        height: 7px;
        padding: 0px 3px 0px 3px
    }
    .contentTable .sortButtons button:first-child{
        padding-bottom: 3px;
    }
    .contentTable .sortButtons button:last-child{
        padding-top: 3px;
    }
    .contentTable .sortButtons .selected img{
        filter: brightness(0) saturate(100%) invert(17%) sepia(100%) saturate(2224%) hue-rotate(197deg) brightness(99%) contrast(101%);
    }
    /* action coll */
    .actionCell{
        white-space: nowrap;
    }
    .actionBtn{
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    .vLine{
        display: inline;
        border-left: 1px solid #969696;
        margin-left: 15px;
        padding-left: 15px;
        height: 100%; 
    }
    .actionBtn img:hover{
        filter: brightness(0) saturate(100%) invert(17%) sepia(100%) saturate(2224%) hue-rotate(197deg) brightness(99%) contrast(101%);
    }
</style>