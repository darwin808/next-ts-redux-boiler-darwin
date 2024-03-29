import React from "react"
import { Button as Iprops } from "types/index"

const Button = ({ disabled, children, type, onClick }: Iprops) => {
   return (
      <button
         data-testid="submitBtn"
         onClick={onClick}
         disabled={disabled}
         className={`p-2 flex justify-center items-center ${
            disabled ? "cursor-not-allowed" : "cursor-pointer"
         } w-full rounded-md uppercase text-white hover:bg-purple-800   bg-purple-600 font-semibold active:scale-95 outline-none text-sm `}
      >
         {children}
      </button>
   )
}

export default Button
