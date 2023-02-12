import Header from "../components/Header";

const HomePage = () => {
  return /*html*/ `
    ${Header()}
    <div class="flex justify-between">
      <div class="content">
        <h1 class="text-7xl font-semibold mb-9">Hi, I'm <span class="text-indigo-600">Rio</span> 👋</h1>
        <p class="mb-4 text-lg">Welcome to my personal website!</p>
        <p class="mb-8 text-lg max-w-[550px]">I enjoy building software that makes peoples' lives easier by writing elegant, performant, and maintainable frontend code. I also enjoy petting every dog I see.</p>
        <p class="text-3xl mb-16 font-semibold">I'm a <span class="text-indigo-600 text-[35px]">[</span> frontend developer <span class="text-indigo-600 text-[35px]">]</span></p>
        <a href="https://www.facebook.com/riodeveloper" target="_blank" class="transition-all duration-200 uppercase bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-3 px-4 border-[3px] border-indigo-500 hover:border-transparent rounded-xl">Download Resume</a>
        </div>
      <div class="image">
        <img class="rounded-xl w-96 h-[480px] object-cover" src="https://source.unsplash.com/random">
      </div>
    </div>
  `;
};

export default HomePage;
