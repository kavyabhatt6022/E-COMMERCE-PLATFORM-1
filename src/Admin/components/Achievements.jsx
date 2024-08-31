import { Button, Card, CardContent, styled, Typography } from '@mui/material';
import React from 'react'
import trophy from '../../assets/images/trophy.png'

const TriangleImg = styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:'absolute',
})

const TrophyImg = styled("img")({
    right:36,
    bottom:20,
    height:98,
    position:'absolute',
    filter: 'drop-shadow(0px 0px 12px grey)',
})

const Achievements = () => {
  return (
    <Card className='' sx={{position:"relative", }}>
        <CardContent >
            <Typography variant='h6' sx={{letterSpacing:'.25px'}}>
                SHOP WITH KAVYA
            </Typography>
            <Typography variant='body2'>
                CONGRATULATION 🎉🥳
            </Typography>
            <Typography variant='h5' sx={{my:3.1}}>
                499.9k
            </Typography>


            <Button size='small' variant='contained'>View Sales</Button>

            <TriangleImg src=''></TriangleImg>
            <TrophyImg src={trophy}></TrophyImg>

        </CardContent>
    </Card>
  )
}

export default Achievements;