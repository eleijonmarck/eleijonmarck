import rss from '@astrojs/rss';

export async function GET(context) {
  const postImportResult = import.meta.glob('../data/blog-posts/*.md', { eager: true });
  const posts = Object.entries(postImportResult).map(([path, post]) => ({
    ...post,
    file: path
  }));

  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) =>
    new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  );

  return rss({
    title: 'Eric Leijonmarck | Writing',
    description: 'Essays and technical writing on software engineering, ML, data systems, and algorithms',
    site: context.site,
    items: sortedPosts.map((post) => {
      const slug = post.file.split('/').pop().split('.').shift();
      return {
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        pubDate: new Date(post.frontmatter.date),
        link: `/blog/${slug}/`,
      };
    }),
    customData: `<language>en-us</language>`,
  });
}
