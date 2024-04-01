import { RiMoneyDollarBoxLine } from "react-icons/ri";
const TransactionCards = () => {
  return (
    <div className="bg-white w-[400px] py-6 px-4 rounded">
      <div className="flex justify-between">
        <div>
          <RiMoneyDollarBoxLine size={80} />
        </div>
        <div>
          <h1 className="text-32 font-600 text-primary text-end">50000</h1>
          <h1 className="text-24 font-600 text-gray ">Total Transaction</h1>
        </div>
      </div>
    </div>
  );
};

export default TransactionCards;
