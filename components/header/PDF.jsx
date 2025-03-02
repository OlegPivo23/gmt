"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";

const DocumentViewer = () => {
  const [docUrls, setDocUrls] = useState([]); // Массив для хранения URL PDF-файлов
  const [error, setError] = useState(""); // Состояние для ошибок
  const [isLoading, setIsLoading] = useState(false); // Состояние загрузки

  // Функция для загрузки документов
  const loadDocument = async () => {
    setIsLoading(true);
    setError("");

    try {
      // Запрашиваем данные с сервера
      const response = await axios.get(
        "http://81.177.223.64:8080/documents/direction/media/get-all-stream?direction=obrazovanie&limit=10&offset=0",
        {
          responseType: "blob", // Указываем, что ожидаем бинарные данные
        }
      );

      // Парсим multipart/form-data
      const boundary = "MY_BOUNDARY_123456789"; // Граница из ответа сервера
      const parts = await parseMultipartResponse(response.data, boundary);

      // Создаем объектные URL для каждого PDF-файла
      const urls = parts.map((part) => URL.createObjectURL(part));
      setDocUrls(urls);
    } catch (error) {
      console.error("Ошибка при загрузке документов:", error);
      setError("Не удалось загрузить документы. Пожалуйста, попробуйте снова.");
    } finally {
      setIsLoading(false);
    }
  };

  // Функция для парсинга multipart/form-data
  const parseMultipartResponse = async (blob, boundary) => {
    const text = await blob.text(); // Преобразуем Blob в текст
    const parts = text.split(`--${boundary}`); // Разделяем данные по границе

    // Фильтруем пустые части и извлекаем бинарные данные
    return parts
      .filter(
        (part) =>
          part.trim() !== "" &&
          part.includes("Content-Type: application/octet-stream")
      )
      .map((part) => {
        const start = part.indexOf("\r\n\r\n") + 4; // Находим начало бинарных данных
        const end = part.lastIndexOf("\r\n"); // Находим конец бинарных данных
        const binaryData = part.slice(start, end); // Извлекаем бинарные данные
        return new Blob([binaryData], { type: "application/pdf" }); // Создаем Blob
      });
  };

  // Функция для открытия документа в новом окне
  const openDocumentInNewWindow = (url) => {
    window.open(url, "_blank"); // Открываем URL в новой вкладке
  };

  // Освобождаем объектные URL при размонтировании компонента
  useEffect(() => {
    return () => {
      docUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [docUrls]);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Просмотр документов</h1>
      <button onClick={loadDocument} disabled={isLoading}>
        {isLoading ? "Загрузка..." : "Загрузить документы"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Отображаем все PDF-файлы */}
      {docUrls.map((url, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3>Документ {index + 1}</h3>
          <iframe
            title={`Document Viewer ${index + 1}`}
            src={url}
            style={{ width: "100%", height: "500px", border: "1px solid #ccc" }}
          ></iframe>
          {/* Кнопка для открытия документа в новом окне */}
          <button
            onClick={() => openDocumentInNewWindow(url)}
            style={{
              marginTop: "10px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            Открыть в новом окне
          </button>
        </div>
      ))}
    </div>
  );
};

export default DocumentViewer;
