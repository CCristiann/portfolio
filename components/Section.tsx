import { ReactNode } from "react";
import Container from "./Container";

type Props = {
  id?: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, title, children }: Props) {
  return (
    <section id={id} className="scroll-mt-20">
      <Container>
        <h2 className="mb-3 text-lg font-semibold tracking-tight">{title}</h2>
        {children}
      </Container>
    </section>
  );
}
