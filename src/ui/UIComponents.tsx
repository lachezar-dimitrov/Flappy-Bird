import { PropsWithChildren } from "react";

type ClassNameProps<T> = T & { className?: string };

type ButtonProps = {
    onClick: () => void;
};

export const Button: React.FC<PropsWithChildren<ClassNameProps<ButtonProps>>> = ({ children, onClick }) => (
    <button onClick={onClick}>{children}</button>
);

type ContainerProps = {
    children: React.ReactNode;
    id?: string;
};

export const Container: React.FC<ContainerProps> = ({ children, id }) => <div id={id}>{children}</div>;

type HeadingProps = {
    level?: number;
};

export const Heading: React.FC<PropsWithChildren<ClassNameProps<HeadingProps>>> = ({ children, level = 1 }) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    return <Tag>{children}</Tag>;
};
