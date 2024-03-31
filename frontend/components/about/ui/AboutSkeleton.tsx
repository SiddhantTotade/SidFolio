import AppSkeleton from "@/components/common/Skeleton";
import React from "react";

type Props = {};

export default function AboutSkeleton({}: Props) {
  return (
    <div className="grid gap-2">
      <AppSkeleton className="w-full h-[2vh] rounded-full" />
      <AppSkeleton className="w-[90%] h-[2vh] rounded-full" />
      <AppSkeleton className="w-[80%] h-[2vh] rounded-full" />
      <AppSkeleton className="w-[70%] h-[2vh] rounded-full" />
      <AppSkeleton className="w-[60%] h-[2vh] rounded-full" />
    </div>
  );
}
