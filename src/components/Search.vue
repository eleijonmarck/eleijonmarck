<template>
    <div>
    <input type="search" id="search"
    placeholder='"/"'
    class="search2"
    v-model="query"
    >
    <div v-if="query.length > 0" class="search__results" >
        hello
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            query: ""
        }
    }
}
</script>

<style lang="scss">
.search {
  position: relative;
  left: 25%;
  bottom: 1em;
  height: 50px;
  margin: auto;
  white-space: nowrap;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -moz-placeholder-opacity: 5;
  border-radius: 5px;
  background: black;
  background-color: rgb(225, 225, 225);
  border: none;
  border: 0;
  position: relative;
  color: #212429;
  font-size: 16px;
  text-rendering: auto;
  -webkit-transition: background-color .4s ease;
  transition: background-color .4s ease;
  -webkit-border-radius: 0 4px 4px 0;
  border-radius: 0 4px 4px 0;
}
.search2 {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  bottom: 3em;
  width: 30%;
  line-height: 50px;
  box-sizing: border-box;
  padding: 0 15px 0 30px;
  border: 1px solid #e3e3e3;
  color: #273849;
  outline: none;
  border-radius: 15px;
  transition: border-color 0.2s ease;
  background: #fff url(../assets/images/search.png) 10px 15px no-repeat;
  background-size: 20px;
}
</style>