interface TableProps {
  items: { id: string }[];
  renderItem: (item: { id: string }) => React.ReactNode;
}

const Table = (props: TableProps) => {
  return null;
};

export const Example01 = () => {
  return <Table items={[{ id: '1' }]} renderItem={(item) => <div>{item.id}</div>} />;
};
