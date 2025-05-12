export type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

export type ContainerProps = {
  children: React.ReactNode;
};

export type ErrorMessageProps = {
  message: string;
};

export type InputProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TitleProps = {
  children: React.ReactNode;
};
