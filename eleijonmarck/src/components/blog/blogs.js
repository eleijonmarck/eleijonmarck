export default {
    data () {
        return {
        posts: [],
        paginate: ['blogs'],
        search: "",
        }
    },
    created(){
        this.$http.get("http://jsonplaceholder.typicode.com/posts")
        .then(response => response.json(), error => console.log(error))
        .then(json => this.posts = json, error => console.log(error));
    },
    computed: {
        filteredBlogs: function(){
        return this.paginated('blogs').filter((blog) => {
            return blog.title.match(this.search);
        });
        }
    }
}