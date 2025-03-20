"use client";
import CardComponent from "@/components/cards/CardComponent";
import SecondaryLayout from "@/components/layouts/SecondaryLayout";
import DocumentsMenuComponent from "@/components/documentsMenu/DocumentsMenuComponent";
import TitleComponent from "@/components/UI/title/TitleComponent";
import { useSelector } from "react-redux";

export default function DocumentsPage() {
  const { currentDirectionDocuments, status, error } = useSelector(
    (state) => state.documents
  );

  const groupedDocuments = currentDirectionDocuments?.reduce((acc, doc) => {
    if (!acc[doc.title]) {
      acc[doc.title] = [];
    }
    acc[doc.title].push(doc);
    return acc;
  }, {});

  return (
    <div className="page">
      <SecondaryLayout>
        <DocumentsMenuComponent />
        <div className="flex flex-col gap-[70px] px-[20px] lg:px-[77px]">
          {status === "loading" ? (
            <div className="text-center text-gray-500 py-4">
              Загрузка документов...
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-4">
              Ошибка загрузки документов
            </div>
          ) : groupedDocuments && Object.keys(groupedDocuments).length > 0 ? (
            Object.entries(groupedDocuments).map(([title, docs]) => (
              <div key={title} className="mb-10">
                <TitleComponent>{title}</TitleComponent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {docs.map((doc) => (
                    <a
                      href={`${process.env.NEXT_PUBLIC_SERVER_URL}${doc.data}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={doc.id}
                    >
                      <CardComponent
                        footerText={doc.name}
                        hasGradient={true}
                        borderRadius="30px"
                        className="max-w-[434px] max-h-[246px]"
                        docBtn={true}
                      />
                    </a>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">
              Выберите категорию документов
            </div>
          )}
        </div>
      </SecondaryLayout>
    </div>
  );
}
