<template>
    <div>
    <search-focus @keyup="focusSearch"></search-focus>
    <input type="text" id="search"
    placeholder='"/"'
    class="search"
    v-model="query"
    @blur="searchResultsVisable = false"
    @focus="searchResultsVisable = true"
    @keydown.esc="searchResultsVisable = false"
    @input="softReset"
    ref="search"
    >
    <div v-if="query.length > 0 && searchResultsVisable" class="search__results" >
        <div>todo: search should be filtering blogs</div>
    </div>
    </div>
</template>

<script>
import SearchFocus from './SearchFocus'

export default {
    components : {
        'search-focus': SearchFocus,
    },
    data () {
        return {
            query: "",
            searchResultsVisable: false
        }
    },
    methods: {
        softReset () {
            this.searchResultsVisable = true
        },
        focusSearch(e) {
            if (e.key === '/') {
                this.$refs.search.focus()
            }
        }
    },
}
</script>

<style lang="scss">
.search {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  bottom: 2em;
  width: 30%;
  height: 50px;
  font-size: 0.95em;
  padding: 0 15px 0 40px;
  border: 1px solid #e3e3e3;
  color: #273849;
  outline: none;
  box-sizing: border-box;
  border-radius: 10px;
  transition: border-color 0.2s ease;
  background: #fff url(../assets/images/search.png) 10px 15px no-repeat;
  background-size: 20px;
}
</style>