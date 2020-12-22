import {React, useState} from 'react'
import {AppBar, Toolbar, IconButton, Typography, Button, Drawer} from '@material-ui/core'

function MyDrawer(){

        const [open, setOpen] = useState(false)
        const handleDrawer = () => {
            setOpen(true);
        }
    return (
    <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
                <div style={{width: 250}}>
                    <h3>All Services</h3>
                </div>
                <div>

                </div>
                <div>
                    <Button variant="contained" color="primary" style={{width: 175}}>Yammer</Button>
                </div>
                <div>
                <Button variant="contained" color="primary" style={{width: 175}}>Youtube</Button>
                </div>
                <div>
                    <Button variant="contained" color="primary" style={{width: 175}}>Weather</Button>
                </div>
                <div>
                    <Button variant="contained" color="primary" style={{width: 175}}>Fermez</Button>
                </div>

                    
            </Drawer>
    )};

export default MyDrawer