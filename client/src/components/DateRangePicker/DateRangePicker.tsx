import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./styles.css";

type DateRangePickerProps = {
  startDate: Date | null,
  endDate: Date | null,
  handleStartDateChange: (date: Date | null) => void,
  handleEndDateChange: (date: Date | null) => void
};

const DateRangePicker: React.FC<DateRangePickerProps> = ({ startDate, endDate, handleStartDateChange, handleEndDateChange }) => {
    const minDate = new Date('2020-01-01 00:00:00');
  return (
    <>
      <div>
        <DatePicker
          selected={startDate}
          startDate={minDate}
          minDate={minDate}
          onChange={handleStartDateChange}
          selectsStart
          openToDate={minDate}
          placeholderText="Start Date" />
      </div>
      <div>
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          selectsEnd
          startDate={startDate ? startDate : undefined}
          minDate={startDate ? startDate : minDate}
          openToDate={minDate}
          placeholderText="End Date" />
      </div></>

  );
};

export default DateRangePicker;