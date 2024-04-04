import ResTable from "../../../component/Table";
import VendorTransactionCard from "../../../component/VendorTransactionCard/VendorTransactionCard";
import { vendorTransactionData } from "../../../db";
import { vendorTableTheme } from "../../../themes";

const VendorTransaction = () => {
  const column = [
    {
      title: "#SL",
      dataIndex: "serial",
      key: "serial",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Getway",
      dataIndex: "Getway",
      key: "Getway",
    },
  ];
  return (
    <div>
      <VendorTransactionCard />
      <div className="mt-4">
        <ResTable
          theme={vendorTableTheme}
          data={vendorTransactionData}
          column={column}
          pagination={{ total: vendorTransactionData?.length, pageSize: 10 }}
        />
      </div>
    </div>
  );
};

export default VendorTransaction;
