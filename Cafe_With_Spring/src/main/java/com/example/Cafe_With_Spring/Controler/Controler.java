package com.example.Cafe_With_Spring.Controler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.example.Cafe_With_Spring.Service.Servise;
import com.example.Cafe_With_Spring.entity.LoginEntity;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class Controler {

    @Autowired
    Servise ser;

    @GetMapping("/getdata")
    public ResponseEntity<List<LoginEntity>> getData() {
        List<LoginEntity> log = ser.getdata();
        return new ResponseEntity<>(log, HttpStatus.OK);
    }

    @PostMapping("/postdata")
    public ResponseEntity<LoginEntity> saveData(@RequestBody LoginEntity en) {
        LoginEntity savedEntity = ser.postdata(en);
        return new ResponseEntity<>(savedEntity, HttpStatus.CREATED);
    }
}
