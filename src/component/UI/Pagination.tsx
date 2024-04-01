import { Pagination } from "antd";
interface Paginationprops {
  total: number;
  onChange?: (page: number, pageSize: number) => void;
}
const GuruPagination = ({ total, onChange }: Paginationprops) => {
  return (
    <div>
      <Pagination defaultCurrent={1} total={total} onChange={onChange} />
    </div>
  );
};

export default GuruPagination;
