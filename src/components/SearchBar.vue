<template>
  <div class="searchBar">
        <div class="searchInput" id="searchClass">
            <input autocomplete="off" type="text" id="searchInput" onchange="table.display();">
            <button onclick="table.display();"><img src="images/search.svg" alt=""></button>
        </div>
        <div id="filterClass" class="filterInput" >
            <input autocomplete="off" type="date" id="dateInput" onchange="table.display();">
        </div>
        <div class="searchTypeSelectContainer">
            <select autocomplete="off" class="searchTypeSelect" id="searchTypeSelect" onChange="searchTypeChange(this);">
                <option value="data" selected>DATA FILTER</option>
                <option value="date">DATE CREATED FILTER</option>
            </select>
            <img src="images/Vector 2.svg" alt="">
        </div>
    </div>
</template>

<script>
export default {
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
        display: none;
        align-items: center;
        margin-right: 24px;
    }
    .filterInput input{
        width: 100%;
        display: inline;
        height: 100%;
        border: none;
        background-color: transparent;
        font-size: 18px;
        box-shadow: 0px 0px 5px  rgba(0,0,0,0.2);
        border-radius: 5px;
        padding: 0px 10px;
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