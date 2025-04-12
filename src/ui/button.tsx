"use client";

import { ClassNameProps, Clickable } from "@/types";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren, ClassNameProps, Clickable {}

export function Button(props: Props) {
    const { children, onClick, className } = props;

    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
}
