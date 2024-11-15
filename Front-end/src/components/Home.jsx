import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { ListItemButton } from '@mui/material';
import { useState } from 'react'


const Home = () => {
    const [tasks, setTasks] = useState([]);

    // Fetching data from external API
    useEffect(() => {
        axiosInstance.get('http://localhost:3000/home/')
            .then((res) => {
                setTasks(res.data);
            });
    }, []);

    // const nav = useNavigate();
    const handleDelete = (id) => {
        axiosInstance.delete('http://localhost:3000/home/delete/' + id)
            .then((res) => {
                // nav('/')
                alert('Data Deleted')
                window.location.reload()
            })
            .catch((err) => {
                console.log(err);
                });

    }

    
  return (
    <div>
        <h4>Todo List</h4>
        <div className='container'>
        {tasks.map((task) => (
                <List size="sm">
                    <ListItem>
                        <Checkbox label={task.title}   />
                    </ListItem>
                    <ListItemButton size="small" onClick={() => handleDelete(course._id)} color='warning'>Delete</ListItemButton>
                </List>
            ))}

        </div>
    </div>
  )
}

export default Home