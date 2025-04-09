package com.example.Cafe_With_Spring.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Cafe_With_Spring.entity.Billing_Entity;

public interface Bill_repo extends JpaRepository<Billing_Entity, Long> {

}
