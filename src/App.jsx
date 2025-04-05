import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Patient from './components/Patient';
import HealthDetails from './components/healthDetails';
import InterpolationChart from './components/chartComponent';
import ProfileComponent from './components/profileComponent';
import DiagnosticList from './components/DiagnoticList';
import LabResults from './components/LabResults';

function App() {
  const [patientData, setPatientData] = useState([]); // Store all patients
  const [selectedDiagnosis, setSelectedDiagnosis] = useState(null); // Store the selected patient's latest diagnosis
  const [chartResult, setChartResult] = useState();
  const [selectedPatientProfile, setSelectedPatientProfile] = useState(null); // Store selected patient's profile

  // Fetch patient data
  useEffect(() => {
    const apiUrl = 'https://fedskillstest.coalitiontechnologies.workers.dev';

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('coalition:skills-test'), // Encode username:password
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPatientData(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Handle click on a patient to show their diagnosis and profile
  const handlePatientClick = (patient) => {
    setSelectedDiagnosis(patient.diagnosis_history ? patient.diagnosis_history[0] : null);
    setChartResult(patient.diagnosis_history); // Update chart result
    setSelectedPatientProfile(patient); // Update selected patient profile
  };

  if (!patientData.length) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="flex gap-6 w-full">
        {/* Patient List */}
        <div className="ml-11 mt-9 min-w-[52vh] max-w-[52vh] max-h-[127vh] overflow-y-auto custom-scrollbar bg-white rounded-lg">
          <div className="flex w-[50vh] justify-between bg-white h-[7vh] items-center mb-4">
            <h3 className="ml-3 text-lg font-bold">Patients</h3>
            <img className="w-6 h-6" src="/search_FILL0_wght300_GRAD0_opsz24@2x.png" alt="Search" />
          </div>
          {patientData.map((patient) => (
            <div
              key={patient.name}
              onClick={() => handlePatientClick(patient)}
            >
              {/* Patient Details */}
              <Patient
                name={patient.name}
                profile_picture={patient.profile_picture}
                gender={patient.gender}
                age={patient.age}
              />
            </div>
          ))}
        </div>

        {/* Display Selected Patient's Latest Health Details */}
        <div className="min-w-[90vh] max-w-[94vh] mt-9">
        {chartResult ? (
  <div className="bg-white p-5 rounded-xl">
    <h2 className="font-bold text-2xl mb-3">Diagnosis History</h2>
    <div className="bg-[#F4F0FE] p-3 rounded-lg mt-10">
      <div className="font-bold text-xl ml-5">Blood Pressure</div>
      <div className="flex mt-4">
        <div className="w-[417px] h-[250px]">
          {chartResult && <InterpolationChart diagnosis_history={chartResult} />}
        </div>
        <div className="font-manrope -mt-9 flex-wrap pl-[20vh] justify-center items-center gap-4 w-[34vh] ml-[-17vh]">
          <div className="items-center space-x-2 border-b-2 w-[24vh] border-[#CBC8D4]">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#E66FD2] border border-solid border-[#E66FD2] rounded-full"></div>
              <div className="font-bold">Systolic</div>
            </div>
            {chartResult && (
              <div className="font-semibold mt-2 text-2xl">
                {chartResult[0]?.blood_pressure?.systolic?.value || "N/A"}
              </div>
            )}
            {chartResult && (
              <div className="flex">
                <div className="mt-4 mr-2">
                  <img src="/ArrowUp@2x.png" alt="Arrow Up" />
                </div>
                <div className="w-[30vh] mt-2">
                  {chartResult[0]?.blood_pressure?.systolic?.levels || "N/A"}
                </div>
              </div>
            )}
          </div>

          <div className="items-center space-x-2 mt-5">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#8C6FE6] border border-solid border-[#8C6FE6] rounded-full"></div>
              <div className="font-bold">Diastolic</div>
            </div>
            {chartResult && (
              <div className="font-semibold text-2xl mt-2">
                {chartResult[0]?.blood_pressure?.diastolic?.value || "N/A"}
              </div>
            )}
            {chartResult && (
              <div className="flex">
                <div className="mt-4 mr-2">
                  <img className="w-[6vh]" src="/ArrowDown@2x.png" alt="Arrow Down" />
                </div>
                <div className="mt-2 w-[30vh]">
                  {chartResult[0]?.blood_pressure?.diastolic?.levels || "N/A"}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
) : (
  <div className="text-[14px] font-manrope text-center">
    No patient selected yet. Please click on a patient from the list above.
  </div>
)}


          {/* Display Health Details of the Selected Patient */}
          <div className="bg-white rounded-xl mt-8">
            {selectedDiagnosis && (
              <div className="mt-6">
                <HealthDetails
                  heartRate={selectedDiagnosis.heart_rate}
                  respiratoryRate={selectedDiagnosis.respiratory_rate}
                  temperature={selectedDiagnosis.temperature}
                />
              </div>
            )}
          </div>

          {/* Diagnostic List of the Selected Patient */}
          <div className="flex bg-white mt-3 rounded-xl">
            <div className="font-manrope text-[14px]">
              {selectedPatientProfile && (
                <DiagnosticList diagnostic_list={selectedPatientProfile.diagnostic_list} />
              )}
            </div>
          </div>
        </div>

        {/* Display Selected Patient's Profile */}
        <div className="bg-white mt-9 rounded-xl">
          <div>
            {selectedPatientProfile && (
              <ProfileComponent patient={selectedPatientProfile} />
            )}
          </div>
          <div className="mt-[105vh] p-5">
            {selectedPatientProfile && (
              <LabResults labResult={selectedPatientProfile.lab_results} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
