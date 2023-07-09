const BottomFooter = () => {
  return (
    <div className="bg-[#dbdefa] w-full">
      <div className="w-full flex flex-col items-start xsm:flex-row gap-5 px-10 py-10 border-b">
        {[
          "Terms & Conditions",
          "Privacy Policy",
          "Notice of Privacy Practices",
          "Notice of Nondiscrimination",
          "Advertising & Sponsorship Policy",
          "Site Map",
        ].map((item, index) => (
          <div key={index} className="text-sm font-medium">
            {item}
          </div>
        ))}
      </div>
      <div className="flex xsm:flex-row flex-col-reverse justify-between items:start xsm:items-center mx-10 py-10">
        <div className="text-[#525050] text-[15px]">
          © 1998-2023 Mayo Foundation for Medical Education and Research
          (MFMER). All rights reserved.
        </div>
        <div className="text-black text-sm w-[30%] avg:text-[15px]">Language: English</div>
      </div>
    </div>
  );
};

export default BottomFooter;
