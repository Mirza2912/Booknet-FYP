import { useSelector } from "react-redux";

export default function DashboardStats() {
  const { allUsers } = useSelector((state) => state.auth);
  const { adminProducts } = useSelector((state) => state.product);
  const { sales } = useSelector((state) => state.sale);

  let totalRevenue = 0;
  let totalSales = 0;
  let averageSaleValue = 0;
  if (sales) {
    totalRevenue = sales?.reduce((sum, order) => sum + order.totalAmount, 0);
    totalSales = sales && sales?.length;
    averageSaleValue = (totalRevenue / totalSales).toFixed(2);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div className="bg-black/60 backdrop-blur-lg text-[#F7FAFC] shadow-yellow-500/10 hover:shadow-yellow-500/20 p-6 rounded-lg border border-gray-700 shadow-md  ">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium ">Total Users</p>
            <h3 className="text-2xl font-bold ">
              {allUsers && allUsers?.length}
            </h3>
          </div>
          <div className="rounded-full p-2 border border-gold text-gold  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-black/60 backdrop-blur-lg text-[#F7FAFC] shadow-yellow-500/10 hover:shadow-yellow-500/20 p-6 rounded-lg border border-gray-700 shadow-md">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium ">Total Products</p>
            <h3 className="text-2xl font-bold mt-1">
              {adminProducts && adminProducts?.length}
            </h3>
          </div>
          <div className="rounded-full p-2 border border-gold text-gold  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-black/60 backdrop-blur-lg text-[#F7FAFC] shadow-yellow-500/10 hover:shadow-yellow-500/20 p-6 rounded-lg border border-gray-700 shadow-md">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium ">Total Revenue</p>
            <h3 className="text-2xl font-bold mt-1">Rs. {totalRevenue}</h3>
          </div>
          <div className="rounded-full p-2 border border-gold text-gold ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-black/60 backdrop-blur-lg text-[#F7FAFC] shadow-yellow-500/10 hover:shadow-yellow-500/20 p-6 rounded-lg border border-gray-700 shadow-md">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium ">Avg. Order Value</p>
            <h3 className="text-2xl font-bold mt-1">Rs. {averageSaleValue}</h3>
          </div>
          <div className="rounded-full p-2 border border-gold text-gold ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
