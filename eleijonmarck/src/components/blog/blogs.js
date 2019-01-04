export default {
    data() {
        return {
            posts: [],
            paginate: ['blogs'],
            search: "",
        }
    },
    created() {
        let self = this
        var blog_links = ['https://raw.githubusercontent.com/eleijonmarck/eleijonmarck/master/eleijonmarck/blogs/2018-01-03-pyenv-macosx.md']

        for (let blog_link of blog_links) {

            fetch(blog_link)
                .then((response) => { return response.text() })
                .then((data) => {
                    var text = data.split('---');
                    var meta = JSON.parse(text[1]);
                    var content = text[2];
                    console.log(blog_link)
                    console.log(typeof(blog_link))
                    self.posts.push({
                        "link": blog_link,
                        "meta": meta,
                        "content": content
                    })
                }).catch(error => { console.log(error); });
        }
    },
    // computed: {
    //     filteredBlogs: function(){
    //     return this.paginated('blogs').filter((blog) => {
    //         return blog.content.match(this.search);
    //     });
    //     }
    // },
}