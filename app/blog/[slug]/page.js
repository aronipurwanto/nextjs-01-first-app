export default function BlogPostPage({params}){
    return (
      <main>
          <h1>Blog Post</h1>
          <p>Welcome to blog page</p>
          <p>{params.slug}</p>
      </main>
    );
}