<template>
    <div class="paginationContainer">
        <div class="pagination" id="pagination">
            <button class="paginationArrow"><img src="images/Vector 2.1.svg" alt=""></button>
            <div class="pageButtons">
                <button class="pageButton selected">1</button>
                <button class="pageButton">2</button>
            </div>
            <button class="paginationArrow"><img src="images/Vector 2.2.svg" alt=""></button>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    /* pagination */
    .paginationContainer{
        display: flex;
        width: 100%;
    }
    .pagination{
        margin: 10px auto;
    }
    .pagination button{
        border: none;
        background: none;
    }
    .paginationArrow:hover{
        box-shadow: 0px 0px 2px  rgba(0,0,0,0.2);
    }
    .paginationArrow img{
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(90deg);
    }
    .pagination .pageButtons{
        display: inline;
    }
    .pagination .pageButtons button{
        font-size: 12px;
        line-height: 15px;
    }
    .pagination .pageButtons button:hover{
        box-shadow: 0px 0px 2px  rgba(0,0,0,0.5);
    }
    .pagination .pageButtons .selected{
        color:white;
        cursor: not-allowed;
        pointer-events: none;
        background-color: #A3A3A3;
        border-radius: 2px;
    }
</style>