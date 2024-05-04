/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ResTable from "../../../component/Table";

import RestaurantCard from "../../../component/RestaurantCard/RestaurantCard";
import { RestaurantTableTheme } from "../../../themes";

import { useGetAllRestaurantForadminQuery } from "../../../redux/features/restaurant/restaurantApi";
import moment from "moment";

const Restaurant = () => {
  const { data: restaurantData, isLoading } = useGetAllRestaurantForadminQuery(
    {}
  );
  const formatedData = restaurantData?.data?.map((data: any, index: number) => {
    return {
      serial: index,
      name: data?.name,
      vendor: data?.owner?.fullName,
      location: data?.location,
      createdAt: moment(data?.createdAt).format("YYYY-MM-DD"),
    };
  });
  const column = [
    {
      title: "#SL",
      dataIndex: "serial",
      key: "serial",
    },
    {
      title: "Vendor Name",
      dataIndex: "owner.fullName",
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
      dataIndex: "name",
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
      <RestaurantCard total={restaurantData?.meta?.total} />
      <div className="mt-4">
        <ResTable
          theme={RestaurantTableTheme}
          column={column}
          data={formatedData}
          pagination={{ total: restaurantData?.meta?.total, pageSize: 10 }}
          loading={isLoading}
        />
      </div>
    </div>
  );
};

export default Restaurant;
