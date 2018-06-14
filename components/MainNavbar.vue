<template>
    <div class="navbar">
        <div class="userData">
            <user-info :username="query" />
        </div>
        <div class="title">
            Clothster
        </div>
        <div class="searchbar">
            <search-bar @searched="searchHandler" />
        </div>
        <br/>
        <br/>
        <br/>
        <div class="categories">
            <categories-bar />
        </div>
        
    </div>
</template>


<script>
import SearchBar from '~/components/SearchBar';
import UserInfo from '~/components/UserInfo';
import CategoriesBar from '~/components/CategoriesBar';
export default {
    components: {
        SearchBar,
        UserInfo,
        CategoriesBar
    },
    data() {
        return {
            query: ''
        }
    },
    methods: {
        searchHandler: function(e) {
            this.query = e;
            
        }
    }
}
</script>

<style scoped>
    .navbar {
        height: 10vh;
        width: 100%;
        padding: 1rem;
        display: flex;
        /* border-bottom:thin solid #DCE2E6; */
    }
    .userData{ 
        display: flex;
        flex: 3 0 auto ;

    }
    .title{ 
        display: flex;
        flex: 2 0 auto;
        font-size: 2rem;
        font-style: none;
        margin: auto auto;
    }
    .searchbar{ 
        display: flex;
        flex: 1 0 auto;
        position: relative;
        padding-right: -10%;
    }

</style>

