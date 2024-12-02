import Link, { LinkProps } from "next/link";
import { FC, HTMLProps } from "react";

type PropsLink = LinkProps & HTMLProps<HTMLAnchorElement>;
interface Props extends PropsLink {}

const CustomLink: FC<Props> = ({ ...atr }) => {
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
