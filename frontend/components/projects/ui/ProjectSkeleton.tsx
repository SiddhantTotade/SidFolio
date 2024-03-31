import React from "react";
import AppSkeleton from "@/components/common/Skeleton";

export default function ProjectSkeleton({}) {
  return (
    <div className="w-full grid gap-3">
      <div className="flex gap-3">
        <AppSkeleton className="w-full rounded-lg h-[7vh]" />
        <AppSkeleton className="w-full rounded-lg h-[7vh]" />
      </div>
      <AppSkeleton className="w-full rounded-lg h-[12vh]" />
      <div className="flex gap-3">
        <AppSkeleton className="w-1/3 rounded-lg h-[7vh]" />
        <AppSkeleton className="w-full rounded-lg h-[7vh]" />
      </div>
    </div>
  );
}
