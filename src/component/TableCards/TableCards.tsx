/* eslint-disable @typescript-eslint/no-explicit-any */

import { Col, Row } from "antd";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { useGetSingleBranchQuery } from "../../redux/features/branch/branchApi";
// import tableLogo from "../../assets/vendorIcon/table.png";

const TableCards = ({ branchId }: { branchId: string }) => {
  const { data: bData } = useGetSingleBranchQuery(branchId);

  return (
    <Row gutter={[16, 16]}>
      <Col span={6}>
        <div className="flex items-center justify-between bg-white p-6 rounded">
          <MdOutlineTableRestaurant size={50} />

          <div className="font-600 ">
            <h1 className="text-end text-primary text-32">
              {bData?.data?.tables ?? 0}
            </h1>
            <p className="text-24">Total Tables</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TableCards;
