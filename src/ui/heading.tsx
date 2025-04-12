"use client";

import { ClassNameProps } from "@/types";
import { PropsWithChildren } from "react";

interface HeadingProps extends ClassNameProps, PropsWithChildren {}

export function Heading(props: HeadingProps) {
    const { children, className } = props;

    return <h1 className={className}>{children}</h1>;
}
