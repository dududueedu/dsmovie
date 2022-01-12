package com.devdudu.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devdudu.dsmovie.dto.MovieDTO;
import com.devdudu.dsmovie.dto.ScoreDTO;
import com.devdudu.dsmovie.entities.Movie;
import com.devdudu.dsmovie.entities.Score;
import com.devdudu.dsmovie.entities.User;
import com.devdudu.dsmovie.repositories.MovieRepository;
import com.devdudu.dsmovie.repositories.ScoreRepository;
import com.devdudu.dsmovie.repositories.UserRepository;

@Service
public class ScoreService {
	
	@Autowired
	private MovieRepository MovieRepository;

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ScoreRepository scoreRepository;
	
	@Transactional
	public MovieDTO saveScore(ScoreDTO dto) {
		
		User user = userRepository.findByEmail(dto.getEmail());
		if(user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = userRepository.saveAndFlush(user); //armazenado e atualizado.
		}
		
		Movie movie = MovieRepository.findById(dto.getMovieID()).get();
		
		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(dto.getScore());
		
		score = scoreRepository.saveAndFlush(score);
		
		double soma = 0.0;
		for(Score sc : movie.getScores()) {
			soma = soma + sc.getValue();
		}
		
		double mediaScores = soma/movie.getScores().size();
		
		movie.setScore(mediaScores);
		movie.setCount(movie.getScores().size());
		
		movie = MovieRepository.save(movie);
		return new MovieDTO(movie);
	}
}