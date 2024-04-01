import ResTable from "../../../component/Table";
import TransactionCards from "../../../component/TransactionCards/TransactionCards";
import { transactionData } from "../../../db";
import { transactionTableTheme } from "../../../themes";

const Transaction = () => {
  const column = [
    {
      title: "#SL",
      dataIndex: "serial",
      key: "serial",
    },
    {
      title: "Buyer",
      dataIndex: "buyer",
      key: "buyer",
    },
    {
      title: "Restaurant Name",
      dataIndex: "restaurantName",
      key: "restaurantName",
    },
    {
      title: "Item",
      dataIndex: "item",
      key: "item",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "date",
      dataIndex: "date",
      key: "date",
    },
  ];
  return (
    <div>
      <div className="mb-4">
        <TransactionCards />
      </div>
      <ResTable
        theme={transactionTableTheme}
        loading={false}
        column={column}
        data={transactionData}
        pagination={{ total: transactionData?.length, pageSize: 10 }}
      />
    </div>
  );
};

export default Transaction;
