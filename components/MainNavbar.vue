<template>
    <div class="navbar">
        <div class="userData">
            <!-- :username="query" -->
            <user-info   @islogin="changecomp" @username="setname" v-if="!logedin" />
            <user-info2 v-bind:username=this.username  v-else  />
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
import UserInfo2 from '~/components/UserInfo2';
import UserInfo from '~/components/UserInfo';
import CategoriesBar from '~/components/CategoriesBar';
export default {
    components: {
        SearchBar,
        UserInfo2,
        CategoriesBar,
        UserInfo
    },
    data() {
        return {
            query: '',
            logedin :false,
            username :"ali"
        }
    },
    methods: {
        searchHandler: function(e) {
            this.query = e;            
        },
        changecomp:function(status){
            this.logedin = status;
        },
        setname:function(name){
            this.username = name;
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
    }
    .userData{ 
        display: flex;
        flex: 4 0 auto ;

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

