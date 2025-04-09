package com.example.Cafe_With_Spring.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Cafe_With_Spring.entity.LoginEntity;


public interface LoginRepo extends JpaRepository<LoginEntity, Integer> {

	LoginEntity findByEmail(String email);
	 
	
}
