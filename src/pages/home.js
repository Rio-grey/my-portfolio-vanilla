import Header from "../components/Header";

const HomePage = () => {
  return /*html*/ `
    ${Header()}
    <div class="Aboutme">
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
        <div class="story relative mb-48">
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
            <p class="max-w-[820px] text-lg mb-10">I was born and raised in Vietnam. When I was 15, I came to America on my own as a transfer student. After graduating in Florida, I attended Rhodes College in Tennessee as a Computer Science student. The COVID-19 pandemic forced me to move to Seattle in 2020 when I started my in-depth front-end programming journey.</p>
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
            <div class="flex flex-wrap justify-between gap-y-10 relative">
              <div class="shadow-2xl rounded-xl">
                <img class="w-[230px] h-[200px] object-cover rounded-xl" src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80" />
              </div>
              <div class="shadow-2xl rounded-xl">
                <img class="w-[230px] h-[200px] object-cover rounded-xl" src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80" />
              </div>
              <div class="shadow-2xl rounded-xl">
                <img class="w-[230px] h-[200px] object-cover rounded-xl" src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80" />
              </div>
              <div class="shadow-2xl rounded-xl">
                <img class="w-[230px] h-[200px] object-cover rounded-xl" src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80" />
              </div>
              <div class="shadow-2xl rounded-xl">
                <img class="w-[230px] h-[200px] object-cover rounded-xl" src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80" />
              </div>
              <div class="shadow-2xl rounded-xl">
                <img class="w-[230px] h-[200px] object-cover rounded-xl" src="https://images.unsplash.com/photo-1507133750040-4a8f57021571?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
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
              <div class="shadow-2xl rounded-xl">
                <img class="w-[230px] h-[200px] object-cover rounded-xl" src="https://images.unsplash.com/photo-1605020420620-20c943cc4669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
              </div>
              <div class="shadow-2xl rounded-xl">
                <img class="w-[230px] h-[200px] object-cover rounded-xl" src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80" />
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
    <div class="relative Skills mb-32">
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
      <div class="Portfolio">
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
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="https://www.alissanguyen.dev/images/tech/javascript.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="https://www.alissanguyen.dev/images/tech/html.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="https://www.alissanguyen.dev/images/tech/css.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="https://www.alissanguyen.dev/images/tech/tailwindcss.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="https://www.alissanguyen.dev/images/tech/vercel.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="https://www.alissanguyen.dev/images/tech/nodejs.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="https://evon.dev/skills/photoshop.png" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50">
              <img class="mb-3 w-[75px] object-cover mx-auto" src="https://evon.dev/skills/pug.png" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="https://evon.dev/skills/figma.png" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="	https://www.alissanguyen.dev/images/tech/npm.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="./src/images/sass-1-logo-svg-vector.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="./src/images/bootstrap-4-logo-svg-vector.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="./src/images/php-logo-svg-vector.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50">
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
    <div class="Projects">
      <h1 class="mb-14 text-[144px] font-medium text-center font-pacifico text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Recent projects</h1>
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
  `;
};

export default HomePage;
