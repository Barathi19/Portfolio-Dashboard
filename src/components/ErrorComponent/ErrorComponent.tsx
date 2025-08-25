import React from "react";
import errorImage from "../../../public/error.svg";
import Image from "next/image";

function ErrorComponent() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-4 text-center">
      <div className="w-40 h-40 sm:w-60 sm:h-60 relative">
        <Image src={errorImage} alt="Error" fill className="object-contain" />
      </div>
      <b className="mt-4 text-lg sm:text-xl text-gray-700">
        Something went wrong!
      </b>
    </div>
  );
}

export default ErrorComponent;
