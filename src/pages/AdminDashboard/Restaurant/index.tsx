/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ResTable from "../../../component/Table";
import { restaurantData } from "../../../db";
import RestaurantCard from "../../../component/RestaurantCard/RestaurantCard";
import { RestaurantTableTheme } from "../../../themes";

const Restaurant = () => {
  const column = [
    {
      title: "#SL",
      dataIndex: "serial",
      key: "serial",
    },
    {
      title: "Vendor Name",
      dataIndex: "vendorName",
      key: "vendorName",
      filters: [
        {
          text: "name",
          value: "name",
        },
      ],
      onFilter: (value: string, record: { [key: string]: any }) =>
        record.vendorName.indexOf(value) === 0,
    },
    {
      title: "Restaurant Name",
      dataIndex: "restauranName",
      key: "restauranName",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
    },
  ];
  return (
    <div>
      <RestaurantCard />
      <div className="mt-4">
        <ResTable
          theme={RestaurantTableTheme}
          column={column}
          data={restaurantData}
          pagination={{ total: restaurantData?.length, pageSize: 10 }}
          loading={false}
        />
      </div>
    </div>
  );
};

export default Restaurant;
