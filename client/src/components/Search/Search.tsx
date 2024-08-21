import { useState } from 'react';
import { AppBar, Button, Toolbar } from '@mui/material';
import React from 'react';
import "./styles.css";
import DateRangePicker from '../DateRangePicker/DateRangePicker';
import moment from 'moment';

type SearchProps = {
    getRecalls: (from_ts: string | null, to_ts: string | null) => void;
}

const Search: React.FC<SearchProps> = React.memo(({ getRecalls }) => {

    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const handleGetRecalls = () => {
        const from = startDate ?  moment(startDate).format('YYYY-MM-DD HH:mm:ss') : null;
        const to = endDate ? moment(endDate).format('YYYY-MM-DD HH:mm:ss') : null;
        getRecalls(from,to);
    }

    const handleStartDateChange = (date: Date | null) => {
        setStartDate(date);
    }

    const handleEndDateChange = (date: Date | null) => {
        setEndDate(date);
    }

    return (
        <AppBar position="static" className='searchBarContainer'>
            <Toolbar>
                <DateRangePicker startDate={startDate} endDate={endDate} handleStartDateChange={handleStartDateChange} handleEndDateChange={handleEndDateChange} />
                <Button variant="outlined" color="primary" onClick={handleGetRecalls} style={{ height: '40px' }}>Run</Button>
            </Toolbar>
        </AppBar>
    );
});

export default Search;