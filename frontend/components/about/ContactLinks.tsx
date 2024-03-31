import React from "react";

import { Button, Link } from "@nextui-org/react";

interface Props {
  link: string;
  icon: any;
}

export default function ContactLinks({ icon, link }: Props) {
  return (
    <Link target="_blank" href={link}>
      <Button isIconOnly className="bg-gray-100 dark:bg-gray-600">
        {icon}
      </Button>
    </Link>
  );
}
