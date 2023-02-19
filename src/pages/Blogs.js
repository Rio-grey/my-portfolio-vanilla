import Header from "../components/Header";

const BlogsPage = () => {
  return /*html*/ `
    ${Header()}
    <div class="Project-detail max-w-wrapper mx-auto">
      <h1 class="text-center text-7xl mb-10 font-medium">Blogs List</h1>
      <p class="text-center bg-black bg-opacity-10 px-5 py-3 rounded-full w-60 mx-auto mb-20">Home || Blogs Page</p>
    </div>  
  `;
};
export default BlogsPage;
