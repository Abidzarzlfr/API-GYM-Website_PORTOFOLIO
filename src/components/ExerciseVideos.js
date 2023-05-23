import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {

  console.log(exerciseVideos);

  if(!exerciseVideos.length) return 'Loading...';

  return (
    <Box
      sx={{ marginTop: { lg: '200px', xs: '20px' }}}
      p="20px"
    >
      <Typography variant="h4" mb="33px" color="#08D9D6" fontWeight='bold'>
        Watch <span style={{color: '#FF2E63', textTransform:"capitalize"}}>
          {name}</span> exercise videos
      </Typography>

      {/* untuk youtube related api */}
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: 'row' },
          gap: { lg: '110px', xs: '0' }
        }}
      >
        {exerciseVideos?.slice(0, 6)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
            <Box>
              {/* Tittle Youtube */}
              <Typography variant='h5' color='#EAEAEA' fontWeight='bold'>
                {item.video.title}
              </Typography>
              {/* Youtube Channel */}
              <Typography variant='h6' color='#FF2E63' fontWeight='bold'>
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos