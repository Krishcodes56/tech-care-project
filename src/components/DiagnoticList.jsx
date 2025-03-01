/* eslint-disable react/prop-types */
const DiagnosticList = ({ diagnostic_list }) => {
  return (
    <div className="p-8">
      <div className="mb-6 font-manrope font-extrabold text-[24px] text-#072635">Diagnostic List</div>
      <div className=" max-h-[20vh] overflow-y-auto custom-scrollbar">
      <table className="table-auto border-collapse w-full text-left text-gray-700">
  <thead className="bg-gray-100 text-gray-900 font-semibold rounded-lg">
    <tr>
      <th className="px-4 py-2 ">Problem/Diagnosis</th>
      <th className="px-4 py-2 ">Description</th>
      <th className="px-4 py-2 ">Status</th>
    </tr>
  </thead>
  <tbody>
    {diagnostic_list.map((item, index) => (
      <tr
        key={index}
        className={`${
          index % 2 === 0 ? "bg-white" : "bg-gray-50"
        } hover:bg-gray-100`}
      >
        <td className="px-4 py-2 ">{item.name}</td>
        <td className="px-4 py-2 ">{item.description}</td>
        <td className="px-4 py-2 ">{item.status}</td>
      </tr>
    ))}
  </tbody>
</table>

      </div>
    </div>
  );
};
export default DiagnosticList;
