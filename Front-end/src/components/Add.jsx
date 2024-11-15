import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react'
import axios from 'axios';


// const currencies = [
//     {
//         label: 'Completed'
//     },
//     {
//         label: 'Ongoing'
//     }
// ];

const [form, setForm] = useState({

    description: '',
    status: ''

})

let fetchValue = (e) => {
    // console.log(event);
    setForm({ ...form, [e.target.name]: e.target.value })
}

let sentData = () => {

        // console.log("inside post")
        axiosInstance.post('http://localhost:3000/home/addnew', form).then((res) => {
            alert('added succesfully');
            navigate('/home');
        })
            .catch((error) => {
                console.log(error);
            });
};
useEffect(() => {
    if (location.state = null) {
        setForm({
            ...form,
            description: location.state.task.description,
            status: location.state.task.status
        })
    }
}, [])



export const Add = () => {
    return (
        <div>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Description" variant="outlined" value={form.description} name="Description"
                    onChange={fetchValue} />
                <TextField
                    value={form.status}
                    name="status"
                    id="outlined-select-currency"
                    select
                    label="Status"
                    defaultValue=""
                    helperText="Please select the current status"
                    onChange={fetchValue}
                >
                    
                </TextField>
                <Button onClick={sentData} variant="contained">SUBMIT</Button>
            </Box>
        </div>
    )
}

export default Add