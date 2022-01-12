package com.devdudu.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devdudu.dsmovie.dto.MovieDTO;
import com.devdudu.dsmovie.entities.Movie;
import com.devdudu.dsmovie.repositories.MovieRepository;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repository;
	
	//metodo somente de leitura
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable){
		Page<Movie> result = repository.findAll(pageable);
		Page<MovieDTO> pagina = result.map(p -> new MovieDTO(p));
		return pagina;
	}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id){
		Movie result = repository.findById(id).get();
		MovieDTO dtoMovie = new MovieDTO(result);
		return dtoMovie;
	}
}