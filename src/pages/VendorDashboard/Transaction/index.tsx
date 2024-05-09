/* eslint-disable @typescript-eslint/no-explicit-any */
import ResTable from "../../../component/Table";
import VendorTransactionCard from "../../../component/VendorTransactionCard/VendorTransactionCard";
import { vendorTransactionData } from "../../../db";
import { useGetVendorWalletDetailsQuery } from "../../../redux/features/wallet/walletApi";
import { vendorTableTheme } from "../../../themes";

const VendorTransaction = () => {
  const { data: walletData } = useGetVendorWalletDetailsQuery({});
  const column = [
    {
      title: "Serial",
      dataIndex: "serial",
      key: "serial",
    },
    {
      title: "Amount",
      dataIndex: "subTotal",
      key: "subTotal",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Getway",
      dataIndex: "method",
      key: "method",
    },
  ];
  const formatedData = walletData?.data[0]?.paymentHistory.map(
    (data: any, index: number) => {
      return {
        serial: index + 1,
        amount: data?.amount,
        date: data?.date,
        method: data?.method,
        subTotal: data?.subTotal,
      };
    }
  );
  return (
    <div>
      <VendorTransactionCard data={walletData?.data[0]} />
      <div className="mt-4">
        <ResTable
          theme={vendorTableTheme}
          data={formatedData}
          column={column}
          pagination={{ total: vendorTransactionData?.length, pageSize: 10 }}
        />
      </div>
    </div>
  );
};

export default VendorTransaction;
