import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";

const getItems = (panelStyle) => [
  {
    key: "1",
    label: "Question 1",
    children: <p>Answer 1</p>,
    style: panelStyle,
  },
  {
    key: "2",
    label: "Question 2",
    children: <p>Answer 2</p>,
    style: panelStyle,
  },
  {
    key: "3",
    label: "Question 3",
    children: <p>Answer 3</p>,
    style: panelStyle,
  },
  {
    key: "4",
    label: "Question 4",
    children: <p>Answer 4</p>,
    style: panelStyle,
  },
  {
    key: "5",
    label: "Question 5",
    children: <p>Answer 5</p>,
    style: panelStyle,
  },
  {
    key: "6",
    label: "Question 6",
    children: <p>Answer 6</p>,
    style: panelStyle,
  },
  {
    key: "7",
    label: "Question 7",
    children: <p>Answer 7</p>,
    style: panelStyle,
  },
];
const Faq = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: "#dbeafe",
    borderRadius: token.borderRadiusLG,
    border: "none",
  };
  return (
    <>
      <div className=" px-80 flex flex-col gap-y-10">
        <h1 className="text-6xl font-semibold text-orange-400 text-center">
          FAQ
        </h1>
        <Collapse
          bordered={false}
          defaultActiveKey={[""]}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          style={{
            background: token.colorBgContainer,
          }}
          items={getItems(panelStyle)}
          accordion
        />
      </div>
    </>
  );
};

export default Faq;
