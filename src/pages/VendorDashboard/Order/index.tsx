/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import ResTable from "../../../component/Table";
import VendorOrderCards from "../../../component/VendorOrderCards/VendorOrderCards";
import { vendorTableTheme } from "../../../themes";
import { useGetorderByBookingIdQuery } from "../../../redux/features/order/orderApi";

const Order = () => {
  const { id } = useParams();

  const { data: orderData, isLoading } = useGetorderByBookingIdQuery(id);

  const formatedData = orderData?.data?.items?.map(
    (data: any, index: number) => {
      return {
        item: data?.menu?.name,
        amount: data?.amount,
        quantity: data?.quantity,
        index,
      };
    }
  );
  const column = [
    {
      title: "#SL",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Menu",
      dataIndex: "item",
      key: "item",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
  ];
  return (
    <div>
      <VendorOrderCards data={orderData?.data} />
      <div className="mt-6">
        <ResTable
          theme={vendorTableTheme}
          loading={isLoading}
          column={column}
          data={formatedData}
          pagination={{ total: orderData?.meta?.total, pageSize: 11 }}
        />
      </div>
    </div>
  );
};

export default Order;
