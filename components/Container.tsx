import { ReactNode } from "react"

type Props = {
    children: ReactNode;
} 

export default function Container({ children }: Props) {
    return <div className="max-w-3xl mx-auto w-full px-4 lg:px-0">{children}</div>
}