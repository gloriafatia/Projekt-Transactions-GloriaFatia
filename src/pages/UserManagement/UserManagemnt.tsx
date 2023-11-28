import React, {  useState } from "react";
import users from "../../Data/users_mock";
import { Form, Input, InputNumber, Popconfirm, Table, Typography, InputRef,  } from "antd";
import type { ColumnsType } from "antd/es/table";

interface User {
  key: React.Key;
  user_id: string;
  first_name: string;
  last_name: string;
  phone_nr: string;
  gender: string;
  birthday: string;
  username: string;
  street: string;
  city: string;
  postal_code: string;
  country: string;
  user_confirmed: number;
  registered_at: string;
}
  
interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: "number" | "text";
  record: User;
  index: number;
  children: React.ReactNode;
}
const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const subcolumns: ColumnsType<User> = [
  { title: "street", dataIndex: "street", key: "street" },
  { title: "city", dataIndex: "city", key: "city" },
  {
    title: "postal_code",
    dataIndex: "postal_code",
    key: "postal_code",
  },
  { title: "country", dataIndex: "country", key: "country" },
  {
    title: "user_confirmed",
    dataIndex: "user_confirmed",
    key: "user_confirmed",
  },
  { title: "registered_at", dataIndex: "registered_at", key: "registered_at" },
];

const UserManagement: React.FC = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(users);
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record: User) => String(record.key) === editingKey;

  const edit = (record: Partial<User> & { key: React.Key }) => {
    form.setFieldsValue({
      user_id: "",
      first_name: "",
      last_name: "",
      phone_nr: "",
      gender: "",
      birthday: "",
      username: "",
      ...record,
    });
    setEditingKey(String(record.key));
  };
  const cancel = () => {
    setEditingKey("");
  };
  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as User;

      const newData = [...data];
      const index = newData.findIndex((users) => key === users.key);
      if (index > -1) {
        const user = newData[index];
        newData.splice(index, 1, {
          ...user,
          ...row,
        });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    { title: "user_id", dataIndex: "user_id", editable: true },
    { title: "first_name", dataIndex: "first_name", editable: true },
    { title: "last_name", dataIndex: "last_name", editable: true },
    { title: "phone_nr", dataIndex: "phone_nr", editable: true },
    { title: "gender", dataIndex: "gender", editable: true },
    { title: "birthday", dataIndex: "birthday", editable: true },
    {
      title: "username",
      dataIndex: "username",
      editable: true,
    },
    {
      title: "actions",
      dataIndex: "actions",
      render: (_: any, record: User) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: User) => ({
        record,
        inputType: col.dataIndex === "user_confirmed" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
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
      />
    </Form>
  );
};

export default UserManagement;
