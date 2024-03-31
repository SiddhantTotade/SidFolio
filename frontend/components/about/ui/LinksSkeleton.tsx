import React from "react";

import AppSkeleton from "@/components/common/Skeleton";

export default function LinksSkeleton() {
  return (
    <div className="flex w-full gap-2 h-[5vh]">
      <AppSkeleton className="w-full h-5vh rounded-md" />
      <AppSkeleton className="w-full h-5vh rounded-md" />
      <AppSkeleton className="w-full h-5vh rounded-md" />
    </div>
  );
}
