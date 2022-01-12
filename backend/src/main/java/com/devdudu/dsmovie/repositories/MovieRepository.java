package com.devdudu.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.devdudu.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{}