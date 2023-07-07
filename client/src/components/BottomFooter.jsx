const BottomFooter = () => {
  return (
    <div className="bg-[#dbdefa]">
      <div className="flex flex-row gap-5 mx-10 py-10 border-b">
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
      <div className="flex flex-row justify-between items-center mx-10 py-10">
        <div className="text-[#525050] text-[15px]">
          © 1998-2023 Mayo Foundation for Medical Education and Research
          (MFMER). All rights reserved.
        </div>
        <div className="text-black text-[15px]">Language: English</div>
      </div>
    </div>
  );
};

export default BottomFooter;
