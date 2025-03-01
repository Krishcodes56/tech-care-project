/* eslint-disable react/prop-types */
const LabResults = ({ labResult }) => {
    // Check if labResult exists and is an array before mapping
    return (
      <>
        <div className="font-bold text-xl font-manrope -mt-10 mb-4">Lab Results</div>
        <div className="max-h-[25vh] font-manrope overflow-y-auto custom-scrollbar">
          {Array.isArray(labResult) && labResult.length > 0 ? (
            labResult.map((item, index) => (
              <div className="flex justify-between items-center my-2" key={index}>
                <div>{item}</div>
                <img
                  src="/download_FILL0_wght300_GRAD0_opsz24 (1)@2x.png"
                  alt="download icon"
                  className="cursor-pointer w-[3vh]"
                />
              </div>
            ))
          ) : (
            <div>No lab results available.</div>
          )}
        </div>
      </>
    );
};

export default LabResults;
