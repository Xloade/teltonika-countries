<template>
  <div class="searchBar">
        <div  v-if="searchType == 'data'" class="searchInput" id="searchClass">
            <input @change="submit()" v-model="search" autocomplete="off" type="text">
            <button @click="submit()"><img src="/images/search.svg"></button>
        </div>
        <div v-else id="filterClass" class="filterInput" >
            <input v-model="start_date" @change="submit()" autocomplete="off" type="text" placeholder="Start date" onfocus="this.type='date'">
            <input v-model="end_date" @change="submit()" autocomplete="off" type="text" placeholder="End date" onfocus="this.type='date'">
        </div>
        <div class="searchTypeSelectContainer">
            <select v-model="searchType" autocomplete="off" class="searchTypeSelect" @change="emptyInputs()">
                <option value="data">DATA FILTER</option>
                <option value="date">DATE CREATED FILTER</option>
            </select>
            <img src="/images/Vector 2.svg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            searchType : "data",
            start_date : null,
            end_date: null,
            search: null
        }
    },
    methods:{
        emptyInputs(){
            this.search = null
            this.start_date = null
            this.end_date = null
            this.submit()
        },
        submit(){
            this.$router.push({ name: this.$route.name, params:{ page:1}, query:this.query })
        }
    },
    computed:{
        query(){
            let query = {search: this.search, start_date: this.start_date, end_date: this.end_date}
            Object.keys(query).forEach(key => {if(query[key] === null) delete query[key]})
            return query
        }
    }
}
</script>

<style>
    /* search */
    .searchBar{
        display: flex;
        margin: 17px 0px;
    }
    .searchBar .searchInput{
        box-shadow: 0px 0px 5px  rgba(0,0,0,0.2);
        border-radius: 5px;
        margin: 0px 24px 0px 0px;
        height: 49px;

        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .searchBar .searchInput input{
        border: none;
        flex-grow: 1;
        padding: 0px 10px;
        height: 100%;
        font-size: 18px;
    }
    .searchBar .searchInput button{
        border: none;
        background-color: transparent;
        height: 100%;
        padding: 0px 14px;
        display: flex;
        align-items: center;
    }
    .searchBar .searchInput button img{
        height: 20.44px;
    }
    .searchBar .searchInput button:hover img{
        filter: brightness(0) saturate(100%) invert(17%) sepia(100%) saturate(2224%) hue-rotate(197deg) brightness(99%) contrast(101%);
    }
    /* date filter */
    .filterInput {
        flex-grow: 1;
        height: 49px;
        white-space: nowrap;
        align-items: center;
        margin-right: 24px;
    }
    .filterInput input{
        width: calc(50% - 30px);
        display: inline;
        height: 100%;
        border: none;
        background-color: transparent;
        font-size: 18px;
        box-shadow: 0px 0px 5px  rgba(0,0,0,0.2);
        border-radius: 5px;
        padding: 0px 10px;
    }
    .filterInput input:last-child{
        margin: 0px 20px;
    }
    /* search select */
    .searchTypeSelect{
        font-size: 18px;
        line-height: 26.68px;

        background-color: transparent;
        border: none;
        height: 49px;
        padding: 0px 40px 0px 22px;

        -webkit-appearance: none;
        appearance: none;
        -moz-appearance: none;

        width: 100%;
    }
    .searchTypeSelectContainer:hover img{
        filter: brightness(0) saturate(100%) invert(17%) sepia(100%) saturate(2224%) hue-rotate(197deg) brightness(99%) contrast(101%);
    }

    .searchTypeSelectContainer{
        box-shadow: 0px 0px 5px  rgba(0,0,0,0.2);
        border-radius: 5px;
        margin: 0px;
        width: 250px;
    }
    .searchTypeSelectContainer img{
        position:relative;
        right: 20px;
        top:-3px;
        pointer-events: none;
        /* remove space left for relative element */
        margin-left: -14px;
    }
</style>