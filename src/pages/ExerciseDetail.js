import React, { useEffect, useState } from 'react';

// untuk memberikan id pada detail exercise
import { useParams } from 'react-router-dom';


import { Box } from '@mui/material';

// untuk fetchData api
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';

// component
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';
import ExerciseVideos from '../components/ExerciseVideos';
// import { Search, Start } from '@mui/icons-material';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExercisesVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  // //untuk eksekusi api from url api
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, 
      exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
      youtubeOptions);
      setExercisesVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, 
      exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, 
      exerciseOptions);
      setEquipmentExercises(equipmentExercisesData);

    }

    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos 
        exerciseVideos={exerciseVideos} 
        name={exerciseDetail.name}/>
      <SimilarExercises 
        targetMuscleExercises={targetMuscleExercises} 
        equipmentExercises={equipmentExercises} 
      />
    </Box>
  )
}

export default ExerciseDetail