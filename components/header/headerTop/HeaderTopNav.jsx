import Link from "next/link";

export default function HeaderTopNav({ links }) {
  return (
    <div className="border-b border-white/25 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 py-4 pl-[140px]">
          {links?.map((item, i) => (
            <li key={i}>
              <Link
                href={item.link}
                className="font-bold text-sm text-white hover:text-orange-200 transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
