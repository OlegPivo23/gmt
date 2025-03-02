"use client";

import MainLayout from "@/components/layouts/MainLayout";
import { useParams } from "next/navigation";
import { newsData } from "@/components/allNews/AllNewsComponent";
import NewsInfoComponent from "@/components/newsInfo/NewsInfoComponent";
import OtherNewsComponent from "@/components/otherNews/OtherNewsComponent";
import "../../main.scss";

export default function NewsPage() {
  return (
    <div className="page">
      <MainLayout>
        <NewsInfoComponent />
        <OtherNewsComponent />
      </MainLayout>
    </div>
  );
}
