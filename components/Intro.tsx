import Image from "next/image";
import Container from "./Container";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

export default function Intro() {
  return (
    <Container>
      <Card className="mt-6">
        <CardContent className="flex items-start gap-6 ">
          {/* Left: text */}
          <div className="flex-1 flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-1">
              <h1 className="text-2xl font-semibold tracking-tight">
                Hi, I&apos;m Cristian Cirje
              </h1>
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="secondary">
                  Computer &amp; AI Engineering @ Roma Tre
                </Badge>
                <Badge variant="secondary">Software Engineer</Badge>
              </div>
            </div>

            <div className="flex flex-col gap-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a Computer and Artificial Intelligence Engineering
                student at Roma Tre University. Strong interest in applied AI and intelligent system engineering, backed by solid full-stack foundations and hands-on approach to building end-to-end products.
              </p>
              
            </div>
          </div>

          {/* Right: photo */}
          <div className="shrink-0 size-28 relative rounded-xl overflow-hidden ring-1 ring-border">
            <Image
              src="/avatar.jpg"
              alt="Cristian Cirje"
              fill
              className="object-cover"
              priority
            />
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}
