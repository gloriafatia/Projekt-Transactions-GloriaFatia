import React from "react";
import data from "../../Data/trx_mock";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface transactions {
  key: React.Key;
  trx_id: number;
  username: string;
  amount: string;
  currency_id: number;
  bankname: string;
  iban: string;
  swift: string;
  account_holder: string;
  country: string;
  status: string;
  trx_init_time: string;
  trx_complete_time: string | null;
  operator: string;
  part: string;
}
const columns: ColumnsType<transactions> = [
  { title: "trx_id", dataIndex: "trx_id", key: "trx_id" },
  { title: "username", dataIndex: "username", key: "username" },
  { title: "amount", dataIndex: "amount", key: "amount" },
  { title: "currency_id", dataIndex: "currency_id", key: "currency_id" },
  { title: "trx_init_time", dataIndex: "trx_init_time", key: "trx_init_time" },
  {
    title: "trx_complete_time",
    dataIndex: "trx_complete_time",
    key: "trx_complete_time",
  },
  {
    title: "bankname",
    dataIndex: "bankname",
    key: "bankname",
    filters: [
      { text: "bankname", value: "bankname" },
      { text: "bankABC", value: "bankABC" },
      { text: "bankXYZ", value: "bankXYZ" },
      { text: "bankRST", value: "bankRST" },
    ],
    onFilter: (value, record) => {
      return record.bankname === value;
    },
  },
];
const subcolumns: ColumnsType<transactions> = [
  { title: "iban", dataIndex: "iban", key: "iban" },
  { title: "swift", dataIndex: "swift", key: "swift" },
  {
    title: "account_holder",
    dataIndex: "account_holder",
    key: "account_holder",
  },
  { title: "country", dataIndex: "country", key: "country" },
  { title: "status", dataIndex: "status", key: "status" },
  { title: "operator", dataIndex: "operator", key: "operator" },
  {
    title: "part",
    dataIndex: "part",
    key: "part",
  },
];

const Transactions: React.FC = () => (
  <Table
    columns={columns}
    expandable={{
      expandedRowRender: (record) => (
        <Table
          columns={subcolumns}
          dataSource={[record]}
          pagination={false}
          style={{ margin: 0 }}
        ></Table>
      ),
    }}
    dataSource={data}
  />
);

export default Transactions;
