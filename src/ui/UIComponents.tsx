type ButtonProps = {
    text: string;
    onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

type ContainerProps = {
    children: React.ReactNode;
    id?: string;
};

export const Container: React.FC<ContainerProps> = ({ children, id }) => <div id={id}>{children}</div>;

type HeadingProps = {
    text: string;
    level?: number;
};

export const Heading: React.FC<HeadingProps> = ({ text, level = 1 }) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    return <Tag>{text}</Tag>;
};
