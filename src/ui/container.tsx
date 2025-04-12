"use client";

import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    id?: string;
}

export function Container(props: Props) {
    const { children, id } = props;

    return <div id={id}>{children}</div>;
}
