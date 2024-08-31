import { Height, TrendingUp } from '@mui/icons-material';
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DevicesIcon from '@mui/icons-material/Devices';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Box } from '@mui/system';
import { Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar } from "@mui/material";


const salesData=[
    {
        stats:'325K',
        title:'Sales',
        color:'#E5D68A',
        icon:<TrendingUp sx={{fontSize:"1.75rem"}} />
    },
    {
        stats:'64K',
        title:'Customers',
        color:'#45CE30',
        icon:<AccountCircleIcon sx={{fontSize:"1.75rem"}} />
    },
    {
        stats:'2.5K',
        title:'Products',
        color:'#DE4839',
        icon:<DevicesIcon sx={{fontSize:"1.75rem"}} />
    },
    {
        stats:'100K',
        title:'Revenue',
        color:'#12B0E8',
        icon:<CurrencyRupeeIcon sx={{fontSize:"1.75rem"}} />
    },
]


const renderStats=()=>{
    return salesData.map((item, index)=>(
        <Grid item xs={12} sm={3} key={index}>
            <Box sx={{
                display:'flex',
                alignItems:'center'
            }}>

                <Avatar variant='rounded' sx={{
                    mr:3,
                    width:64,
                    height:44,
                    boxShadow:3,
                    color:"white",
                    background:`${item.color}`
                }}>
                       {item.icon}          
                </Avatar>
                
                <Box sx={{display:'flex', flexDirection:'column'}}>

                   <Typography variant='caption'>{item.title}</Typography>
                   <Typography variant='h6'>{item.stats}</Typography>

                </Box>
            
            </Box>
        </Grid>
    ))
}

const MonthlyOverview = () => {
  return (
   <Card sx={{}}>
       <CardHeader title='Monthly Overview'
        action={
            <IconButton size='small'>
                <MoreVertIcon/>
            </IconButton>
        }
        subheader={
            <Typography variant='body2'>

                <Box component='span' sx={{fontWeight:600, mx:2}}>

                    Total 48.5% growth 😎

                </Box>
                 this month

            </Typography>
        }
        titleTypographyProps={{
            sx:{
                mb:2.5,
                lineHeight:' 2rem !important',
                letterSpacing:'0.15px !important'
            }
        }}
       />

       <CardContent sx={{pt:theme=>`${theme.spacing(3)} !important`}}>
         <Grid container spacing={[5,0]}>
            {renderStats()}
         </Grid>

       </CardContent>
           
      
   </Card>
  )
}

export default MonthlyOverview;