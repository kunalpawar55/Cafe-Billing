package com.example.Cafe_With_Spring.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Cafe_With_Spring.Repo.LoginRepo;
import com.example.Cafe_With_Spring.entity.LoginEntity;

@Service
public class Servise {

    @Autowired
    LoginRepo repo;

    public LoginEntity postdata(LoginEntity en) {
        return repo.save(en);
    }

    public List<LoginEntity> getdata() {
        return repo.findAll();
    }
}
