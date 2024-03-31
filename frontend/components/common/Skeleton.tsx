import React from "react";

import { Skeleton } from "@nextui-org/react";

interface Props {
  className?: string;
}

export default function AppSkeleton({ className }: Props) {
  return (
    <Skeleton className={className}>
      <div className="h-3 w-full rounded-lg bg-default-300"></div>
    </Skeleton>
  );
}
