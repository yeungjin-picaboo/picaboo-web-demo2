import Link from 'next/link';
import { LinkProps } from 'src/types/common.interface';

export default function NavLink({ href, style, children }: LinkProps) {
  return (
    <Link href={href} passHref legacyBehavior>
      <a style={style}>{children}</a>
    </Link>
  );
}
