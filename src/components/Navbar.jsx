const Navbar = () => {
    return (
      <div className="flex mt-2 bg-white rounded-full justify-around items-center p-4 h-16">
        {/* Logo Section */}
        <div>
          <img src="/TestLogo.png" alt="Logo img" />
        </div>
  
        {/* Navigation Menu */}
        <div className="font-bold text-sm">
          <ul className="flex gap-7">
            <li className="flex items-center gap-1">
              <img className="w-5 h-5" src="/home_FILL0_wght300_GRAD0_opsz24@2x.png" alt="Overview" />
              <p>Overview</p>
            </li>
            <li className="flex items-center gap-2">
              <img className="w-5 h-5" src="/group_FILL0_wght300_GRAD0_opsz24@2x.png" alt="Patients" />
              <p>Patients</p>
            </li>
            <li className="flex items-center gap-2">
              <img className="w-5 h-5" src="/calendar_today_FILL0_wght300_GRAD0_opsz24@2x.png" alt="Schedule" />
              <a href="">Schedule</a>
            </li>
            <li className="flex items-center gap-2">
              <img className="w-5 h-5" src="/chat_bubble_FILL0_wght300_GRAD0_opsz24@2x.png" alt="Message" />
              <a href="">Message</a>
            </li>
            <li className="flex items-center gap-2">
              <img className="w-5 h-5" src="/credit_card_FILL0_wght300_GRAD0_opsz24@2x.png" alt="Transactions" />
              <a href="">Transactions</a>
            </li>
          </ul>
        </div>
  
        {/* Profile Section */}
        <div className="flex items-center gap-6">
          <img className="w-12 h-12 rounded-full" src="/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png" alt="Doctor" />
          <div>
            <h4 className="text-black text-lg font-semibold">Dr. Jose Simmons</h4>
            <p className="text-black text-sm">General Practitioner</p>
          </div>
          <div className="flex gap-2">
            <img className="w-5 h-5" src="/settings_FILL0_wght300_GRAD0_opsz24@2x.png" alt="settings" />
            <img className=" h-5" src="/more_vert_FILL0_wght300_GRAD0_opsz24@2x.png" alt="tripple dot" />
        </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  