import React from "react";
import { Card } from "@nextui-org/react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function AppCard({ className, children }: Props) {
  return <Card className={className}>{children}</Card>;
}
