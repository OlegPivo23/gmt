import Link from "next/link";

export default function NewsItemSmallComponent({ id, title, description }) {
  return (
    <Link href={`/news/${id}`}>
      <div className="news-item-small">
        <p className="news-title">{title}</p>
        <span className="news-description">{description}</span>
      </div>
    </Link>
  );
}
