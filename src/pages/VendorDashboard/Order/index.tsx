import ResTable from "../../../component/Table";
import VendorOrderCards from "../../../component/VendorOrderCards/VendorOrderCards";
import { vendorOrderData } from "../../../db";
import { vendorTableTheme } from "../../../themes";

const Order = () => {
  const column = [
    {
      title: "#SL",
      dataIndex: "serial",
      key: "serial",
    },
    {
      title: "Items",
      dataIndex: "Items",
      key: "Items",
      render: (data: string[]) => {
        return (
          <div className="flex gap-x-2">
            {data.map((item) => (
              <p key={item}>{item},</p>
            ))}
          </div>
        );
      },
    },
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Date",
      dataIndex: "Date",
      key: "Date",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
  ];
  return (
    <div>
      <VendorOrderCards />
      <div className="mt-6">
        <ResTable
          theme={vendorTableTheme}
          loading={false}
          column={column}
          data={vendorOrderData}
          pagination={{ total: vendorOrderData.length, pageSize: 11 }}
        />
      </div>
    </div>
  );
};

export default Order;
