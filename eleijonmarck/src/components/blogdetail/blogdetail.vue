<template>
		<article>
		<div class='container'>
			<div id="container">
		<img :src="'' + blog.meta.image" alt="" class="center"></img>
				</div>
		<!-- <vue-markdown>{{ blog.content }}</vue-markdown>		 -->
		<div class='blog-post'>
		<vue-simple-markdown :source=blog.content></vue-simple-markdown>
		</div>
	</div>
			</article>
</template>

<script>
	export default {
	name: 'BlogDetail',
	data: function () {
		return {
		blog: {},
		comments: []
		}
	},
	created: function () {
		let self = this
		const blog_links = require('../../../static/blogs/blogs.json');

		for (let blog_link of blog_links['blogs']) {

		console.log(`bloglink ${blog_link}`)
		let blog = blog_link.match(this.$route.params.id);
		console.log(`blog ${blog}`)

		if(typeof blog !== "undefined")
			fetch(blog_link)
			.then((response) => { return response.text() })
			.then((data) => {
				var text = data.split('---');
				var meta = JSON.parse(text[1]);
				var content = text[2];
				self.blog = {
				"link": blog_link,
				"meta": meta,
				"content": content
				}
			}).catch(error => { console.log(error); });
		}
		}
	}
</script>
<style scoped>
	#container {
   width: 50%;
   height: 50%;
   margin-left: auto;
   margin-right: auto;
}

</style>