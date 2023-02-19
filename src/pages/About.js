import Header from "../components/Header";

const AboutPage = () => {
  return /*html*/ `
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
            <img class="rounded-xl w-96 h-[480px] object-cover" src="https://res.cloudinary.com/dg5ax2asx/image/upload/v1676700048/ECMA-portfolio/about%20me/75786c48a39b68c5318a_uldso1.jpg">
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
            <p class="max-w-[820px] text-lg mb-10">My real name is Le Dinh Quy. I was born and raised in Hung Yen. After graduating from Tran Quang Khai High School, I attended FPT Polytechnic Hanoi as a computer science student, where I began my intensive journey in front-end programming. In addition to studying at school, I regularly learn more on F8 Fullstack and on Youtube channels like evondev, j2teams,...</p>
            <img class=" rounded-full w-40 h-40 object-cover" src="https://res.cloudinary.com/dg5ax2asx/image/upload/v1676700367/ECMA-portfolio/about%20me/javier-miranda-Jn2EaLLYZfY-unsplash_sxcjg0.jpg" />
          </div>
          <div class="myself-card flex items-end">
            <div class="my_hobbies w-[800px] px-9 py-7 rounded-3xl shadow-2xl">
              <h3 class="text-2xl mb-3">A little bit about me</h3>
              <p class="text-base max-w-[540px]">In my free time, I like to watch Youtube and Netflix, and playing games. My favorite youtubers are Danny Gonzales and Drew Gooden (Go Greg and Little Stinkers!). Some games I usually play are Wild Rift, Clash of Clans, and League of Legends.</p>
            </div>
            <div class="image">
              <img src="https://res.cloudinary.com/dg5ax2asx/image/upload/v1676698688/ECMA-portfolio/about%20me/eren_tfgf7c.png" class="w-[190px] rounded-2xl translate-x-[-200px]"/>
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
                <img class="w-[230px] h-[200px] object-cover rounded-xl relative" src="https://res.cloudinary.com/dg5ax2asx/image/upload/v1676698542/ECMA-portfolio/fun%20facts%20about%20me/dog_rqpian.jpg" />
                <div class="bg-black p-5 rounded-xl bg-opacity-30 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full">
                  <h1 class="text-white text-4xl mb-12 text-center relative">1</h1>
                  <span style="position: absolute; content: ''; width: 60px; height: 3px; background-color: white;" class="text-center top-[75px] left-[50%] translate-x-[-50%]"></span>
                  <p class="text-white text-lg text-center">I love dogs and i have two :)</p>
                </div>
              </div>
              <div class="shadow-2xl rounded-xl relative">
                <img class="w-[230px] h-[200px] object-cover rounded-xl relative" src="https://res.cloudinary.com/dg5ax2asx/image/upload/v1676698528/ECMA-portfolio/fun%20facts%20about%20me/architect_n9ivjg.jpg" />
                <div class="bg-black p-5 rounded-xl bg-opacity-30 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full">
                  <h1 class="text-white text-4xl mb-12 text-center relative">2</h1>
                  <span style="position: absolute; content: ''; width: 60px; height: 3px; background-color: white;" class="text-center top-[75px] left-[50%] translate-x-[-50%]"></span>
                  <p class="text-white text-lg text-center">I had dreams of becoming an architect</p>
                </div>
              </div>
              <div class="shadow-2xl rounded-xl relative">
                <img class="w-[230px] h-[200px] object-cover rounded-xl relative" src="https://res.cloudinary.com/dg5ax2asx/image/upload/v1676698549/ECMA-portfolio/fun%20facts%20about%20me/Rio_gqpjpe.webp" />
                <div class="bg-black p-5 rounded-xl bg-opacity-30 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full">
                  <h1 class="text-white text-4xl mb-12 text-center relative">3</h1>
                  <span style="position: absolute; content: ''; width: 60px; height: 3px; background-color: white;" class="text-center top-[75px] left-[50%] translate-x-[-50%]"></span>
                  <p class="text-white text-lg text-center">My nickname Rio is actually a super sentai name</p>
                </div>
              </div>
              <div class="shadow-2xl rounded-xl relative">
                <img class="w-[230px] h-[200px] object-cover rounded-xl relative" src="https://res.cloudinary.com/dg5ax2asx/image/upload/v1676698594/ECMA-portfolio/fun%20facts%20about%20me/mayonaise_cdh4za.jpg" />
                <div class="bg-black p-5 rounded-xl bg-opacity-30 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full">
                  <h1 class="text-white text-4xl mb-12 text-center relative">4</h1>
                  <span style="position: absolute; content: ''; width: 60px; height: 3px; background-color: white;" class="text-center top-[75px] left-[50%] translate-x-[-50%]"></span>
                  <p class="text-white text-lg text-center">I unbelievably love mayonnaise!</p>
                </div>
              </div>
              <div class="shadow-2xl rounded-xl relative">
                <img class="w-[230px] h-[200px] object-cover rounded-xl relative" src="https://res.cloudinary.com/dg5ax2asx/image/upload/v1676698535/ECMA-portfolio/fun%20facts%20about%20me/coffee_om7wkr.jpg" />
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
                <img class="w-[230px] h-[200px] object-cover rounded-xl" src="https://res.cloudinary.com/dg5ax2asx/image/upload/v1676698612/ECMA-portfolio/fun%20facts%20about%20me/guitar_wddxbb.jpg" />
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
  `;
};
export default AboutPage;
