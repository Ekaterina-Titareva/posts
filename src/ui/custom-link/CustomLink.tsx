import Link, { LinkProps } from "next/link";
import { FC, HTMLProps } from "react";

type PropsLink = LinkProps & HTMLProps<HTMLAnchorElement>;

const CustomLink: FC<PropsLink> = ({ ...atr }) => {
  return (
    <Link
      className="hover:text-orange-400 transition mb-2"
      {...atr}
      href={`/${atr.href}`}
    >
      {atr.children}
    </Link>
  );
};

export default CustomLink;
