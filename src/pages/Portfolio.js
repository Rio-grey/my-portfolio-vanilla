const PortfolioPage = () => {
  return /*html*/ `
    <div class="relative mb-32 max-w-wrapper mx-auto">
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
      <div class="Portfolio max-w-wrapper mx-auto" >
        <h1 class="text-[144px] font-semibold uppercase text-center mb-[210px]">Portfolio</h1>
        <div class="my-skills relative">
          <h1 class="text-6xl mb-14" id="portfolio">My Skills</h1>
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
              <img class="mb-3 w-[65px] object-cover mx-auto" src="https://res.cloudinary.com/dg5ax2asx/image/upload/v1676698371/ECMA-portfolio/my%20skills/html_aocckr.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50 shadow-md">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="https://res.cloudinary.com/dg5ax2asx/image/upload/v1676698359/ECMA-portfolio/my%20skills/css_jggkfh.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50 shadow-md">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="https://res.cloudinary.com/dg5ax2asx/image/upload/v1676698387/ECMA-portfolio/my%20skills/javascript_p24i8y.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50 shadow-md">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="https://res.cloudinary.com/dg5ax2asx/image/upload/v1676698426/ECMA-portfolio/my%20skills/tailwindcss_qi0vk9.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50 shadow-md">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="https://res.cloudinary.com/dg5ax2asx/image/upload/v1676698431/ECMA-portfolio/my%20skills/vercel_rmsjrl.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50 shadow-md">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="https://res.cloudinary.com/dg5ax2asx/image/upload/v1676698378/ECMA-portfolio/my%20skills/nodejs_z9mxdk.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50 shadow-md">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="https://res.cloudinary.com/dg5ax2asx/image/upload/v1676698408/ECMA-portfolio/my%20skills/photoshop_mjsrfg.png" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50 shadow-md">
              <img class="mb-3 w-[75px] object-cover mx-auto" src="https://res.cloudinary.com/dg5ax2asx/image/upload/v1676698402/ECMA-portfolio/my%20skills/pug_w1llr2.png" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50 shadow-md">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="https://res.cloudinary.com/dg5ax2asx/image/upload/v1676698366/ECMA-portfolio/my%20skills/figma_vf3jxo.png" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50 shadow-md">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="https://res.cloudinary.com/dg5ax2asx/image/upload/v1676698394/ECMA-portfolio/my%20skills/npm_rwabzo.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50 shadow-md">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="https://res.cloudinary.com/dg5ax2asx/image/upload/v1676698420/ECMA-portfolio/my%20skills/sass-1-logo-svg-vector_r4v2uv.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50 shadow-md">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="https://res.cloudinary.com/dg5ax2asx/image/upload/v1676698351/ECMA-portfolio/my%20skills/bootstrap-4-logo-svg-vector_gxmnku.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50 shadow-md">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="https://res.cloudinary.com/dg5ax2asx/image/upload/v1676698415/ECMA-portfolio/my%20skills/php-logo-svg-vector_vqnyki.svg" />
            </div>
            <div class="flex flex-col items-center justify-center w-[112px] h-[112px] rounded-2xl bg-white bg-opacity-50 shadow-md">
              <img class="mb-3 w-[65px] object-cover mx-auto" src="https://res.cloudinary.com/dg5ax2asx/image/upload/v1676698477/ECMA-portfolio/my%20skills/github-octocat-logo-svg-vector_gpyzm2.svg" />
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
  `;
};
export default PortfolioPage;
