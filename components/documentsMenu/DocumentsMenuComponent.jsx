"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllDocuments,
  fetchDocumentsDirection,
} from "@/stores/documentsThunks";
import "./documentsMenu.scss";

export default function DocumentsMenuComponent() {
  const dispatch = useDispatch();
  const { documentsDirection, currentDirectionDocuments, status, error } =
    useSelector((state) => state.documents);

  useEffect(() => {
    dispatch(fetchAllDocuments());
  }, [dispatch]);

  const handleDirectionClick = (direction_en) => {
    dispatch(fetchDocumentsDirection(direction_en));
  };

  useEffect(() => {
    console.log("Updated doc files:", currentDirectionDocuments);
  }, [currentDirectionDocuments]);

  return (
    <div>
      <div className="doc-wrapper">
        <ul className="doc-menu">
          {documentsDirection.map((item, idx) => (
            <li
              key={idx}
              onClick={() => handleDirectionClick(item.directions_en)}
              className="doc-item active"
            >
              {item.directions_ru}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
