package com.devdudu.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.devdudu.dsmovie.entities.Score;
import com.devdudu.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{}