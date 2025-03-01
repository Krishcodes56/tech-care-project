import PropTypes from 'prop-types';
const Patient = ({ name, profile_picture, gender, age }) => {
    return (
      <>
        {/* List of Patients */}
        <div className="flex gap-4 items-center p-4 text-[14px] bg-white rounded-lg shadow-md">
          <img className="w-16 h-16 rounded-full" src={profile_picture} alt="Patient" />
          <div>
            <h4 className="text-lg font-semibold">{name}</h4>
            <div className="flex gap-2 text-gray-600">
              <p>{gender},</p>
              <p>{age} years</p>
            </div>
          </div>
        </div>
      </>
    );
  };
  Patient.propTypes = {
    profile_picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  };
  export default Patient;
  