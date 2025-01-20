import Link from "next/link";
import style from "./headerTop.module.scss";

export default function HeaderTopNav({ links }) {
  return (
    <div className={style.header__topNav}>
      <ul className={style.header__list}>
        {links?.map((item, i) => (
          <li key={i} className={style.header__listItem}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
