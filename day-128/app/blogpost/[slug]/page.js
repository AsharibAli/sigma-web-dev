export default function Page({ params }) {
  // throw new Error("server error")
  // Fetch your blog post by its slug
  let languages = ["python", "javascript", "java", "solidity", "cpp", "c#"];
  if (languages.includes(params.slug)) {
    return <div>My POST: {params.slug}</div>;
  } else {
    return <div>Post not found</div>;
  }
}
