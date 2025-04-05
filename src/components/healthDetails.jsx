/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
const HealthDetails = ({ heartRate, respiratoryRate, temperature, bloodPressure }) => {
  if (!heartRate || !respiratoryRate || !temperature) {
    console.error("Missing required props: heartRate, respiratoryRate, or temperature");
    return <div>Error: Missing required health details.</div>;
  }

  return (
    <div className="flex gap-6 p-3 -mt-[2vh]">
      {/* Respiratory Rate */}
      <div className="bg-[#E0F3FA] w-1/3 font-manrope rounded-lg">
        <img className="ml-3 mt-3 w-[12vh]" src="/respiratory@2x.png" alt="Respiratory rate" />
        <h4 className="ml-4">Respiratory Rate</h4>
        <h4 className="ml-3 text-[30px] font-bold">{respiratoryRate.value} bpm</h4>
        <p className="ml-3 mt-3 font-manrope">{respiratoryRate.levels}</p>
      </div>

      {/* Temperature */}
      <div className="bg-[#FFE6E9] font-manrope w-1/3 rounded-lg">
        <img className="ml-3 mt-3 w-[12vh]" src="/temperature@2x.png" alt="Temperature" />
        <h4 className="ml-4">Temperature</h4>
        <h4 className="ml-3 text-[30px] font-bold">{temperature.value}°F</h4>
        <p className="ml-3 mt-3 font-manrope">{temperature.levels}</p>
      </div>

      {/* Heart Rate */}
      <div className="bg-[#FFE6E9] font-manrope w-1/3 rounded-lg">
        <img className="ml-3 mt-3 w-[12vh]" src="/HeartBPM@2x.png" alt="Heart rate" />
        <h4 className="ml-4">Heart Rate</h4>
        <h4 className="ml-3 text-[30px] font-bold">{heartRate.value} BPM</h4>
        <p className="ml-3 mt-3 font-manrope">{heartRate.levels}</p>
      </div>
    </div>
  );
};

export default HealthDetails;