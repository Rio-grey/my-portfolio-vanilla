import HeaderAdmin from "@/components/HeaderAdmin";

const DashboardPage = () => {
  return /*html*/ `
    <div class="min-h-full">
      ${HeaderAdmin()}
      <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8" id="main-admin">
          
        </div>
      </main>
    </div>
  `;
};
export default DashboardPage;
