"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDocumentsDirection } from "@/stores/documentsThunks";
import "./documentsMenu.scss";

export default function DocumentsMenuComponent() {
  const dispatch = useDispatch();

  const { documentsDirection, status, error } = useSelector(
    (state) => state.documents
  );

  useEffect(() => {
    dispatch(fetchDocumentsDirection("direction_en"));
  }, [dispatch]);

  const documentsLinks = [
    "Основные документы",
    "ФПП",
    "Фин-Хоз деятельность",
    "Мат-Тех обеспечение",
    "Метод. работа",
    "Центр содействия трудоустройствавыпускников",
    "Атлас доступных профессий",
  ];
  return (
    <div>
      <div className=" doc-wrapper">
        <ul className="doc-menu">
          {documentsLinks.map((item, idx) => (
            <li key={idx} className="doc-item active">
              {item.directions_en}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
