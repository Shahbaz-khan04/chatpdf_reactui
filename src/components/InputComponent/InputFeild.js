import React from "react";
import PdfIcon from "../../Icons/PdfIcon";

function Input_Feild() {
  return (
    <div className="flex justify-center">
      <div className="bg-white p-2 inputWidth rounded-xl">
        <label className=" bg-white border-2 border-dotted hover:border-blue-400 inputHeight w-full block cursor-pointer rounded-xl">
          <input type="file" className="hidden" />

          <span className=" flex justify-center p-7 font-light">
            <div>
              <PdfIcon />
              Drop PDF Here
            </div>
          </span>
        </label>
      </div>
    </div>
  );
}
export default Input_Feild;
