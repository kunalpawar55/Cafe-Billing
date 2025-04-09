package com.example.Cafe_With_Spring.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Cafe_With_Spring.Repo.Bill_repo;
import com.example.Cafe_With_Spring.entity.Billing_Entity;

@Service
public class Bill_Service {

	@Autowired
	Bill_repo repo;
	
	public Billing_Entity postbill(Billing_Entity en)
	{
		return repo.save(en);
	}
	

	
	
}
