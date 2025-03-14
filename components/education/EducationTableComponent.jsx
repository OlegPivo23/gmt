import TitleComponent from "../UI/title/TitleComponent";

export default function EducationTableComponent({ tables }) {
  return (
    <div>
      <TitleComponent>Реализуемые образовательные программы</TitleComponent>
      {tables.map((item, idx) => (
        <div key={idx}>
          <p className="font-montserrat text-[20px] sm:text-[16px] font-bold mt-[36px] sm:mt-[24px] mb-[17px] sm:mb-[12px]">
            {item.title}
          </p>
          <div className="flex flex-col gap-4">
            <div className="border border-black rounded-[32px] p-5 sm:p-3 bg-white">
              {/* Десктопная версия */}
              <table className="w-full hidden sm:table">
                <tbody>
                  {item.table.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-black last:border-none"
                    >
                      <td className="py-2 px-4 text-black font-bold">
                        {row.title}
                      </td>
                      <td className="py-2 px-4 text-black text-end font-bold">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Мобильная версия (список) */}
              <div className="sm:hidden flex flex-col gap-3">
                {item.table.map((row, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 p-3 rounded-lg"
                  >
                    <p className="text-black font-bold">{row.title}</p>
                    <p className="text-gray-700 text-end font-medium">
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
