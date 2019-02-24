export default {
	name: 'Blog',
	data() {
		return {
			posts: [],
			paginate: ['blogs'],
			search: "",
		}
	},
	created() {
		let self = this
		const blog_links = require('../../../static/blogs/blogs.json');

		for (let blog_link of blog_links['blogs']) {

			fetch(blog_link)
				.then((response) => { return response.text() })
				.then((data) => {
					var text = data.split('---');
					var meta = JSON.parse(text[1]);
					var content = text[2];
					self.posts.push({
						"link": blog_link,
						"meta": meta,
						"content": content
					})
				}).catch(error => { console.log(error); });
		}
	},
	computed: {
		filteredBlogs: function () {
			return this.paginated('blogs').filter((blog) => {
				return blog.meta.title.match(this.search);
			});
		}
	},
}