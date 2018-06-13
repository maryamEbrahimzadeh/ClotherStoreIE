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
    </div>
</template>


<script>
import SearchBar from '~/components/SearchBar';
import UserInfo from '~/components/UserInfo';
export default {
    components: {
        SearchBar,
        UserInfo
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
        background: gray;
        padding: 1rem;
        display: flex;
    }
    .userData{ 
        display: flex;
        flex: 4;
    }
    .title{ 
        display: flex;
        flex: 4;
        font-size: 1rem;
    }
    .searchbar{ 
        display: flex;
        flex: 4;
    }

</style>

