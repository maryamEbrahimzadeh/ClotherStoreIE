<template>
    <div class="navbar">
        <div class="userData">
            <!-- :username="query" -->
            <user-info   @islogin="changecomp" @username="setname" v-if="!logedin" />
            <user-info2 v-bind:username=this.username  v-bind:numberoforder=this.numberoforder  @profile="openprofile" v-else  />
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
            <categories-bar  @targetId="selectFilter"/>
        </div>
        
    </div>
</template>


<script>
import SearchBar from '~/components/SearchBar';
import UserInfo2 from '~/components/UserInfo2';
import UserInfo from '~/components/UserInfo';
import CategoriesBar from '~/components/CategoriesBar';
export default {
    props : ['numberoforder'],
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
            username :"ali",
            
             }
    },
    methods: {
        searchHandler: function(e) {
            this.query = e;  
            this.$emit('query', e);          
        },
        changecomp:function(status){
            this.logedin = status;            
            this.$emit('islogin', status);
        },
        setname:function(name){
            this.username = name;            
            this.$emit('username', this.username);
        },
        selectFilter:function(target){
            this.$emit('targetId', target);
        },
        openprofile:function(s){
            this.$emit('profile',s);
        }
    }
}
</script>

<style scoped>
    .navbar {
        /* height: 10vh; */
        width: 100%;
        padding: 1rem;
        display: flex;
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

