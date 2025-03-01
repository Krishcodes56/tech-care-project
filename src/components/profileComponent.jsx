const profileComponent =({patient})=>{
        return(
            <div className="bg-white mt-9 rounded-[2vh] w-[50vh] relative">
            <div className="absolute left-[50%] transform -translate-x-1/2 text-center">
                <img className="w-[22vh] ml-8" src={patient.profile_picture} alt="profile img"/>
                <h2 className="font-bold text-2xl mt-5 w-[30vh]">{patient.name}</h2>
            </div>
                <div  className="absolute top-64 flex flex-col gap-4 ml-5 px-2">
                <div className="flex gap-6">
                    <div>
                        <img className="w-[8vh]" src="/BirthIcon@2x.png" alt="dob" />
                    </div>
                    <div>
                        <p>Date of Birth</p>
                        <p className="font-bold font-monos text-[#072635]">{patient.date_of_birth}</p>
                    </div>
                </div>
                <div className="flex gap-6">
                    <div>
                        <img className="w-[8vh]" src="/FemaleIcon@2x.png" alt="dob" />
                    </div>
                    <div>
                        <p>Gender</p>
                        <p className="font-bold font-monos text-[#072635]">{patient.gender}</p>
                    </div>
                </div>
                <div className="flex gap-6">
                    <div>
                        <img className="w-[8vh]" src="/PhoneIcon@2x.png" alt="dob" />
                    </div>
                    <div>
                        <p>Contact Info</p>
                        <p className="font-bold font-monos text-[#072635]">{patient.phone_number}</p>
                    </div>
                </div>
                <div className="flex gap-6">
                    <div>
                        <img className="w-[8vh]" src="/PhoneIcon@2x.png" alt="dob" />
                    </div>
                    <div>
                        <p>Emergency Contact</p>
                        <p className="font-bold font-monos text-[#072635]">{patient.emergency_contact}</p>
                    </div>
                </div>
                <div className="flex gap-6">
                    <div>
                        <img className="w-[8vh]" src="/InsuranceIcon@2x.png" alt="dob" />
                    </div>
                    <div>
                        <p>Insurance Provider</p>
                        <p className="font-bold font-monos text-[#072635]">{patient.insurance_type}</p>
                    </div>
                </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 rounded-3xl text-center top-[88vh] h-[6vh] bg-[#01F0D0] w-[50vh] flex justify-center items-center">
    <button className="font-bold font-monos text-[#072635]">Show All Information</button>
                    </div>
            </div>
        )
}
export default profileComponent;