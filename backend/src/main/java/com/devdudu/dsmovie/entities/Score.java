package com.devdudu.dsmovie.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tb_score")
public class Score {
	
	@EmbeddedId
	private ScorePK idSc = new ScorePK();
	private Double value;
	
	public Score() {}

	public Score(ScorePK idSc, Double value) {
		this.idSc = idSc;
		this.value = value;
	}

	//associar o Score ao Movie
	public void setMovie(Movie movie) {
		idSc.setMovie(movie);
	}
	
	//associar o Score ao User
	public void setUser(User user) {
		idSc.setUser(user);
	}
	
	public ScorePK getIdSc() {
		return idSc;
	}

	public void setIdSc(ScorePK idSc) {
		this.idSc = idSc;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}
}