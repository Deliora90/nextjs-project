"use client";
import dayjs from "dayjs";
import React, { useState } from "react";
import DatePicker, { DateValueType } from "react-tailwindcss-datepicker";

export const Datepicker = () => {
  const [value, setValue] = useState<DateValueType>({
    startDate: new Date(),
    endDate: null,
  });

  const handleValueChange = (newValue: DateValueType) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <DatePicker
      asSingle={true}
      // inputClassName="bg-green-100"
      // containerClassName="bg-green-500"
      value={value}
      displayFormat={"DD MMMM YYYY"}
      onChange={handleValueChange}
    />
  );
};
