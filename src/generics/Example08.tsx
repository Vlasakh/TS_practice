import { ReactElement } from 'react';

interface TableProps<TItem> {
  items: TItem[];
  renderItem: (item: TItem) => ReactElement;
}

function Table<TItem>({ items, renderItem }: TableProps<TItem>) {
  return renderItem(items[0]);
}

export const Example08 = () => {
  return <Table items={[{ id: 1 }]} renderItem={(item) => <div>{item.id / 2}</div>} />;
};
