import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard = ({ exercise }) => {
  return (
    <Link
       className="exercise-card"
       to={`/exercise/${exercise.id}`}
    >
        <img
            src={exercise.gifUrl}
            alt={exercise.name}
            loading="lazy"
        />

        {/* Stack for Button */}
        <Stack direction="row">

            {/* Body Part Button */}
            <Button
                sx={{
                    ml: '21px',
                    color: '#fff',
                    background: '#08D9D6',
                    fontSize: '14px',
                    borderRadius: '20px',
                    textTransform: 'capitalize'
                }}
            >
                {exercise.bodyPart}
            </Button>
            
            {/* Target Muscle Button */}
            <Button
                sx={{
                    ml: '21px',
                    color: '#fff',
                    background: '#252A34',
                    fontSize: '14px',
                    borderRadius: '20px',
                    textTransform: 'capitalize'
                }}
            >
                {exercise.target}
            </Button>
        </Stack>
        
        {/* Typography for name inside card */}
        <Typography
            ml= "21px"
            color="#000"
            fontWeight="bold"
            mt="11px"
            //padding buttom
            pb="10px"
            textTransform="capitalize"
            fontSize="20px"
        >
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard