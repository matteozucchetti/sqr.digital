export const Display1 = ({
  children,
  as: Component = "div",
}: { children: React.ReactNode; as?: React.ElementType }) => {
  return <Component className="text-4xl font-bold">{children}</Component>;
};

export const Display2 = ({
  children,
  as: Component = "div",
}: { children: React.ReactNode; as?: React.ElementType }) => {
  return <Component className="text-3xl font-bold">{children}</Component>;
};

export const Display3 = ({
  children,
  as: Component = "div",
}: { children: React.ReactNode; as?: React.ElementType }) => {
  return <Component className="text-2xl font-bold">{children}</Component>;
};

export const Display4 = ({
  children,
  as: Component = "div",
}: { children: React.ReactNode; as?: React.ElementType }) => {
  return <Component className="text-xl font-bold">{children}</Component>;
};

export const Display5 = ({
  children,
  as: Component = "div",
}: { children: React.ReactNode; as?: React.ElementType }) => {
  return <Component className="text-lg font-bold">{children}</Component>;
};

export const Display6 = ({
  children,
  as: Component = "div",
}: { children: React.ReactNode; as?: React.ElementType }) => {
  return <Component className="text-base font-bold">{children}</Component>;
};

export const Text = ({
  children,
  as: Component = "div",
}: { children: React.ReactNode; as?: React.ElementType }) => {
  return <Component className="text-base">{children}</Component>;
};
