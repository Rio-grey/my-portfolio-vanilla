import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MySkills from "@/components/MySkills";

const HomePage = () => {
  return /*html*/ `
    ${Header()}
    <div class="Aboutme mx-auto max-w-wrapper">
      <div class="introduction-wrapper">
        <div class="flex justify-between mb-24">
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
        <div class="story relative mb-48" id="about">
          <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
            <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" xmlns="http://www.w3.org/2000/svg">
              <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"/>
              <defs>
                <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#9089FC" />
                  <stop offset="1" stop-color="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h1 class="text-6xl font-semibold mb-10">My story</h1>
          <div class="my-story-content flex gap-x-10">  
            <p class="max-w-[820px] text-lg mb-10">I was born and raised in Hung Yen. After graduating from Tran Quang Khai High School, I attended FPT Polytechnic Hanoi as a computer science student, where I began my intensive journey in front-end programming. In addition to studying at school, I regularly learn more on F8 Fullstack and on Youtube channels like evondev, j2teams,...</p>
            <img class=" rounded-full w-40 h-40 object-cover" src="https://images.unsplash.com/photo-1643330683233-ff2ac89b002c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" />
          </div>
          <div class="myself-card flex items-end">
            <div class="my_hobbies w-[800px] px-9 py-7 rounded-3xl shadow-2xl">
              <h3 class="text-2xl mb-3">A little bit about me</h3>
              <p class="text-base max-w-[540px]">In my free time, I like to watch Youtube and Netflix, and playing games. My favorite youtubers are Danny Gonzales and Drew Gooden (Go Greg and Little Stinkers!). Some games I usually play are Wild Rift, Clash of Clans, and League of Legends.</p>
            </div>
            <div class="image">
              <img src="./src/images/eren.png" class="w-[190px] rounded-2xl translate-x-[-200px]"/>
            </div>
          </div>
          <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" xmlns="http://www.w3.org/2000/svg">
              <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"/>
              <defs>
                <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#9089FC" />
                  <stop offset="1" stop-color="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div class="funfact relative mb-[210px]">
          <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
            <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" xmlns="http://www.w3.org/2000/svg">
              <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"/>
              <defs>
                <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#9089FC" />
                  <stop offset="1" stop-color="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h2 class="text-4xl mb-10">Random fun facts about me</h2>
          <div class="wrapper">
            <div class="flex flex-wrap  gap-10 relative">
              <div class="shadow-2xl rounded-xl relative">
                <img class="w-[230px] h-[200px] object-cover rounded-xl relative" src="./src/images/dog.jpg" />
                <div class="bg-black p-5 rounded-xl bg-opacity-30 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full">
                  <h1 class="text-white text-4xl mb-12 text-center relative">1</h1>
                  <span style="position: absolute; content: ''; width: 60px; height: 3px; background-color: white;" class="text-center top-[75px] left-[50%] translate-x-[-50%]"></span>
                  <p class="text-white text-lg text-center">I love dogs and i have two :)</p>
                </div>
              </div>
              <div class="shadow-2xl rounded-xl relative">
                <img class="w-[230px] h-[200px] object-cover rounded-xl relative" src="./src/images/architect.jpg" />
                <div class="bg-black p-5 rounded-xl bg-opacity-30 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full">
                  <h1 class="text-white text-4xl mb-12 text-center relative">2</h1>
                  <span style="position: absolute; content: ''; width: 60px; height: 3px; background-color: white;" class="text-center top-[75px] left-[50%] translate-x-[-50%]"></span>
                  <p class="text-white text-lg text-center">I had dreams of becoming an architect</p>
                </div>
              </div>
              <div class="shadow-2xl rounded-xl relative">
                <img class="w-[230px] h-[200px] object-cover rounded-xl relative" src="./src/images/rio.png" />
                <div class="bg-black p-5 rounded-xl bg-opacity-30 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full">
                  <h1 class="text-white text-4xl mb-12 text-center relative">3</h1>
                  <span style="position: absolute; content: ''; width: 60px; height: 3px; background-color: white;" class="text-center top-[75px] left-[50%] translate-x-[-50%]"></span>
                  <p class="text-white text-lg text-center">My nickname Rio is actually a super sentai name</p>
                </div>
              </div>
              <div class="shadow-2xl rounded-xl relative">
                <img class="w-[230px] h-[200px] object-cover rounded-xl relative" src="./src/images/mayonaise.jpg" />
                <div class="bg-black p-5 rounded-xl bg-opacity-30 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full">
                  <h1 class="text-white text-4xl mb-12 text-center relative">4</h1>
                  <span style="position: absolute; content: ''; width: 60px; height: 3px; background-color: white;" class="text-center top-[75px] left-[50%] translate-x-[-50%]"></span>
                  <p class="text-white text-lg text-center">I unbelievably love mayonnaise!</p>
                </div>
              </div>
              <div class="shadow-2xl rounded-xl relative">
                <img class="w-[230px] h-[200px] object-cover rounded-xl relative" src="./src/images/coffee.jpg" />
                <div class="bg-black p-5 rounded-xl bg-opacity-30 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full">
                  <h1 class="text-white text-4xl mb-12 text-center relative">5</h1>
                  <span style="position: absolute; content: ''; width: 60px; height: 3px; background-color: white;" class="text-center top-[75px] left-[50%] translate-x-[-50%]"></span>
                  <p class="text-white text-lg text-center">I can sit for hours in Cafe.</p>
                </div>
              </div>
              <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" xmlns="http://www.w3.org/2000/svg">
                  <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"/>
                  <defs>
                    <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#9089FC" />
                      <stop offset="1" stop-color="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div class="shadow-2xl rounded-xl relative">
                <img class="w-[230px] h-[200px] object-cover rounded-xl" src="./src/images/guitar.jpg" />
                <div class="bg-black p-5 rounded-xl bg-opacity-30 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full">
                  <h1 class="text-white text-4xl mb-12 text-center relative">6</h1>
                  <span style="position: absolute; content: ''; width: 60px; height: 3px; background-color: white;" class="text-center top-[75px] left-[50%] translate-x-[-50%]"></span>
                  <p class="text-white text-lg text-center">I play 2 musical instruments</p>
                </div>
              </div>
              <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" xmlns="http://www.w3.org/2000/svg">
                  <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"/>
                  <defs>
                    <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#9089FC" />
                      <stop offset="1" stop-color="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative Skills mb-32 max-w-wrapper mx-auto">
      <div class="flex items-center justify-center gap-x-11 relative">
        <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" xmlns="http://www.w3.org/2000/svg">
            <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"/>
            <defs>
              <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                <stop stop-color="#9089FC" />
                <stop offset="1" stop-color="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h1 class="text-4xl font-light text-center mb-[220px]">Eat.</h1>
        <h1 class="text-4xl font-light text-center mb-[220px]">Learn.</h1>
        <h1 class="text-4xl font-light text-center mb-[220px]">Code.</h1>
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" xmlns="http://www.w3.org/2000/svg">
            <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"/>
            <defs>
              <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                <stop stop-color="#9089FC" />
                <stop offset="1" stop-color="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div class="Portfolio max-w-wrapper mx-auto" id="portfolio">
        <h1 class="text-[144px] font-semibold uppercase text-center mb-[210px]">Portfolio</h1>
        <div class="my-skills relative">
          <h1 class="text-6xl mb-14">My Skills</h1>
          <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
            <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" xmlns="http://www.w3.org/2000/svg">
              <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"/>
              <defs>
                <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#9089FC" />
                  <stop offset="1" stop-color="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="grid grid-cols-6 gap-10">
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50 shadow-md">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="./src/images/javascript.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50 shadow-md">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="./src/images/html.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50 shadow-md">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="./src/images/css.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50 shadow-md">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="./src/images/tailwindcss.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50 shadow-md">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="./src/images/vercel.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50 shadow-md">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="./src/images/nodejs.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50 shadow-md">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="./src/images/photoshop.png" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50 shadow-md">
              <img class="mb-3 w-[75px] object-cover mx-auto" src="./src/images/pug.png" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50 shadow-md">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="./src/images/figma.png" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50 shadow-md">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="./src/images/npm.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50 shadow-md">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="./src/images/sass-1-logo-svg-vector.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50 shadow-md">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="./src/images/bootstrap-4-logo-svg-vector.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50 shadow-md">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="./src/images/php-logo-svg-vector.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50 shadow-md">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="./src/images/github-octocat-logo-svg-vector.svg" />
            </div>
            <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" xmlns="http://www.w3.org/2000/svg">
                <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"/>
                <defs>
                  <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#9089FC" />
                    <stop offset="1" stop-color="#FF80B5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="featured max-w-wrapper mx-auto mb-28" id="projects">
      <h1 class="mb-8 text-[200px] text-center">Featured</h1>
      <div class="project-featured">
        <div class="rounded-2xl p-10 bg-pink-50 flex gap-10 mb-10">
          <div class="image">
            <img src="https://source.unsplash.com/random" class="w-[465px] h-[353px] object-cover rounded-lg"/>
          </div>
          <div class="content">
            <div>
              <h2 class="text-3xl font-medium mb-5">useTypewriter Hook</h2>
              <p class="leading-8 pb-2 max-w-[434px]">A flexible hook for creating typewriter-like experience with React. Users can add functions for further applications.</p>
              <p class="text-sm pb-2">2020 — Design & web development</p>
            </div>
            <div class="project-frameworks flex flex-col mt-4 mb-5">
              <div class="inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="text-projecs-arrow w-5 mr-3"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg><p class="text-[15px] leading-7">React.js</p></div>
              <div class="inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="text-projecs-arrow w-5 mr-3"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg><p class="text-[15px] leading-7">React.js</p></div>
              <div class="inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="text-projecs-arrow w-5 mr-3"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg><p class="text-[15px] leading-7">React.js</p></div>
              <div class="inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="text-projecs-arrow w-5 mr-3"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg><p class="text-[15px] leading-7">React.js</p></div>
            </div>
            <div class="btns flex gap-4">
              <a href="" class="inline-block p-2 border-gray-500 border rounded-lg font-light">View source</a>
              <a href="" class="inline-block p-2 border-gray-500 border rounded-lg font-light">Visit website</a>
            </div>
          </div>
        </div>
        <div class="rounded-2xl p-10 bg-pink-50 flex gap-10 mb-10">
          <div class="image">
            <img src="https://source.unsplash.com/random" class="w-[465px] h-[353px] object-cover rounded-lg"/>
          </div>
          <div class="content">
            <div>
              <h2 class="text-3xl font-medium mb-5">useTypewriter Hook</h2>
              <p class="leading-8 pb-2 max-w-[434px]">A flexible hook for creating typewriter-like experience with React. Users can add functions for further applications.</p>
              <p class="text-sm pb-2">2020 — Design & web development</p>
            </div>
            <div class="project-frameworks flex flex-col mt-4 mb-5">
              <div class="inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="text-projecs-arrow w-5 mr-3"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg><p class="text-[15px] leading-7">React.js</p></div>
              <div class="inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="text-projecs-arrow w-5 mr-3"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg><p class="text-[15px] leading-7">React.js</p></div>
              <div class="inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="text-projecs-arrow w-5 mr-3"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg><p class="text-[15px] leading-7">React.js</p></div>
              <div class="inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="text-projecs-arrow w-5 mr-3"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg><p class="text-[15px] leading-7">React.js</p></div>
            </div>
            <div class="btns flex gap-4">
              <a href="" class="inline-block p-2 border-gray-500 border rounded-lg font-light">View source</a>
              <a href="" class="inline-block p-2 border-gray-500 border rounded-lg font-light">Visit website</a>
            </div>
          </div>
        </div>
        <div class="rounded-2xl p-10 bg-pink-50 flex gap-10 mb-10">
          <div class="image">
            <img src="https://source.unsplash.com/random" class="w-[465px] h-[353px] object-cover rounded-lg"/>
          </div>
          <div class="content">
            <div>
              <h2 class="text-3xl font-medium mb-5">useTypewriter Hook</h2>
              <p class="leading-8 pb-2 max-w-[434px]">A flexible hook for creating typewriter-like experience with React. Users can add functions for further applications.</p>
              <p class="text-sm pb-2">2020 — Design & web development</p>
            </div>
            <div class="project-frameworks flex flex-col mt-4 mb-5">
              <div class="inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="text-projecs-arrow w-5 mr-3"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg><p class="text-[15px] leading-7">React.js</p></div>
              <div class="inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="text-projecs-arrow w-5 mr-3"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg><p class="text-[15px] leading-7">React.js</p></div>
              <div class="inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="text-projecs-arrow w-5 mr-3"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg><p class="text-[15px] leading-7">React.js</p></div>
              <div class="inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="text-projecs-arrow w-5 mr-3"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg><p class="text-[15px] leading-7">React.js</p></div>
            </div>
            <div class="btns flex gap-4">
              <a href="" class="inline-block p-2 border-gray-500 border rounded-lg font-light">View source</a>
              <a href="" class="inline-block p-2 border-gray-500 border rounded-lg font-light">Visit website</a>
            </div>
          </div>
        </div>
        <div class="rounded-2xl p-10 bg-pink-50 flex gap-10 mb-10">
          <div class="image">
            <img src="https://source.unsplash.com/random" class="w-[465px] h-[353px] object-cover rounded-lg"/>
          </div>
          <div class="content">
            <div>
              <h2 class="text-3xl font-medium mb-5">useTypewriter Hook</h2>
              <p class="leading-8 pb-2 max-w-[434px]">A flexible hook for creating typewriter-like experience with React. Users can add functions for further applications.</p>
              <p class="text-sm pb-2">2020 — Design & web development</p>
            </div>
            <div class="project-frameworks flex flex-col mt-4 mb-5">
              <div class="inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="text-projecs-arrow w-5 mr-3"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg><p class="text-[15px] leading-7">React.js</p></div>
              <div class="inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="text-projecs-arrow w-5 mr-3"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg><p class="text-[15px] leading-7">React.js</p></div>
              <div class="inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="text-projecs-arrow w-5 mr-3"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg><p class="text-[15px] leading-7">React.js</p></div>
              <div class="inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="text-projecs-arrow w-5 mr-3"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg><p class="text-[15px] leading-7">React.js</p></div>
            </div>
            <div class="btns flex gap-4">
              <a href="" class="inline-block p-2 border-gray-500 border rounded-lg font-light">View source</a>
              <a href="" class="inline-block p-2 border-gray-500 border rounded-lg font-light">Visit website</a>
            </div>
          </div>
        </div>
      </div>  
    </div>
    <div class="Projects max-w-wrapper mx-auto">
      <h1 class="mb-14 text-[144px] animate-[text_recent_project] font-medium text-center font-pacifico text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Recent projects</h1>
      <div class="project grid grid-cols-3 gap-10 relative">
        <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" xmlns="http://www.w3.org/2000/svg">
            <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"/>
            <defs>
              <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                <stop stop-color="#9089FC" />
                <stop offset="1" stop-color="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="project-item rounded-lg shadow-2xl">
          <img class="h-56 object-cover rounded-t-lg" src="./src/images/project-1.png" alt="" />
          <div class="content p-5">
            <h2 class="title text-2xl font-medium text-center mb-3 tracking-[0.45px] leading-8">Riodeveloper</h2>
            <p class="desc text-center mx-auto mb-4 max-w-[209px] font-light">A simple demo landing page with parallax scrolling effect and responsive layout.</p>
            <div class="btns flex items-center justify-center gap-5">
              <a href="" class="inline-block p-2 border-gray-500 border rounded-lg font-light">View source</a>
              <a href="" class="inline-block p-2 border-gray-500 border rounded-lg font-light">View website</a>
            </div>
          </div>
        </div>
        <div class="project-item rounded-lg shadow-2xl">
          <img class="h-56 object-cover rounded-t-lg" src="./src/images/project-1.png" alt="" />
          <div class="content p-5">
            <h2 class="title text-2xl font-medium text-center mb-3 tracking-[0.45px] leading-8">Riodeveloper</h2>
            <p class="desc text-center mx-auto mb-4 max-w-[209px] font-light">A simple demo landing page with parallax scrolling effect and responsive layout.</p>
            <div class="btns flex items-center justify-center gap-5">
              <a href="" class="inline-block p-2 border-gray-500 border rounded-lg font-light">Visit source</a>
              <a href="" class="inline-block p-2 border-gray-500 border rounded-lg font-light">Visit website</a>
            </div>
          </div>
        </div>
        <div class="project-item rounded-lg shadow-2xl">
          <img class="h-56 object-cover rounded-t-lg" src="./src/images/project-1.png" alt="" />
          <div class="content p-5">
            <h2 class="title text-2xl font-medium text-center mb-3 tracking-[0.45px] leading-8">Riodeveloper</h2>
            <p class="desc text-center mx-auto mb-4 max-w-[209px] font-light">A simple demo landing page with parallax scrolling effect and responsive layout.</p>
            <div class="btns flex items-center justify-center gap-5">
              <a href="" class="inline-block p-2 border-gray-500 border rounded-lg font-light">Visit source</a>
              <a href="" class="inline-block p-2 border-gray-500 border rounded-lg font-light">Visit website</a>
            </div>
          </div>
        </div>
        <div class="project-item rounded-lg shadow-2xl">
          <img class="h-56 object-cover rounded-t-lg" src="./src/images/project-1.png" alt="" />
          <div class="content p-5">
            <h2 class="title text-2xl font-medium text-center mb-3 tracking-[0.45px] leading-8">Riodeveloper</h2>
            <p class="desc text-center mx-auto mb-4 max-w-[209px] font-light">A simple demo landing page with parallax scrolling effect and responsive layout.</p>
            <div class="btns flex items-center justify-center gap-5">
              <a href="" class="inline-block p-2 border-gray-500 border rounded-lg font-light">Visit source</a>
              <a href="" class="inline-block p-2 border-gray-500 border rounded-lg font-light">Visit website</a>
            </div>
          </div>
        </div>
        <div class="project-item rounded-lg shadow-2xl">
          <img class="h-56 object-cover rounded-t-lg" src="./src/images/project-1.png" alt="" />
          <div class="content p-5">
            <h2 class="title text-2xl font-medium text-center mb-3 tracking-[0.45px] leading-8">Riodeveloper</h2>
            <p class="desc text-center mx-auto mb-4 max-w-[209px] font-light">A simple demo landing page with parallax scrolling effect and responsive layout.</p>
            <div class="btns flex items-center justify-center gap-5">
              <a href="" class="inline-block p-2 border-gray-500 border rounded-lg font-light">Visit source</a>
              <a href="" class="inline-block p-2 border-gray-500 border rounded-lg font-light">Visit website</a>
            </div>
          </div>
        </div>
        <div class="project-item rounded-lg shadow-2xl">
          <img class="h-56 object-cover rounded-t-lg" src="./src/images/project-1.png" alt="" />
          <div class="content p-5">
            <h2 class="title text-2xl font-medium text-center mb-3 tracking-[0.45px] leading-8">Riodeveloper</h2>
            <p class="desc text-center mx-auto mb-4 max-w-[209px] font-light">A simple demo landing page with parallax scrolling effect and responsive layout.</p>
            <div class="btns flex items-center justify-center gap-5">
              <a href="" class="inline-block p-2 border-gray-500 border rounded-lg font-light">Visit source</a>
              <a href="" class="inline-block p-2 border-gray-500 border rounded-lg font-light">Visit website</a>
            </div>
          </div>
        </div>
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" xmlns="http://www.w3.org/2000/svg">
            <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"/>
            <defs>
              <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                <stop stop-color="#9089FC" />
                <stop offset="1" stop-color="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
    ${Footer()}
  `;
};

export default HomePage;
