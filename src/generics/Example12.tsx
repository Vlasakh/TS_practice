// https://twitter.com/mpocock1/status/1506607945445949446

type IconSize = LooseAutocomplete<'xs' | 'sm'>;

type LooseAutocomplete<T extends string> = Omit<string, T>;

type Props = { size: IconSize };

const Icon = (props: Props) => <></>;

export const Example08 = () => (
  <>
    <Icon size={'xs'} />;
    <Icon size={'arbitrary'} />;
  </>
);
