package com.example.Cafe_With_Spring.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Cafe_With_Spring.entity.Add_Hotel;

public interface Hotel_Repo extends JpaRepository<Add_Hotel, Long> {

}
