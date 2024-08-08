import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Paper, Button, Container } from "@mui/material";

function Header() {
  return (
    <div>

          <div className="paper">
          <div className="nav">
            <Button variant="contained" startIcon={< HomeIcon/>}>Home</Button>
            <Button>About</Button>
            <Button>contact</Button>
          </div>
  
          <Paper elevation={3} style={{ padding: 20 }}>
            stalker market
          </Paper>
          </div>

    </div>
  )
}

export default Header