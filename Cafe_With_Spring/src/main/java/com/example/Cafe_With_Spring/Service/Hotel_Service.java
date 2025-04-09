package com.example.Cafe_With_Spring.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.Cafe_With_Spring.Repo.Hotel_Repo;
import com.example.Cafe_With_Spring.entity.Add_Hotel;

@Service
public class Hotel_Service {

    @Autowired
    private Hotel_Repo repo;

    public ResponseEntity<?> postdata(Add_Hotel add1) {
        try {
            Add_Hotel add = repo.save(add1);
            return ResponseEntity.status(HttpStatus.CREATED).body(add);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error saving hotel data: " + e.getMessage());
        }
    }
    public ResponseEntity<List<Add_Hotel>> getdata() {
        try {
            List<Add_Hotel> hotels = repo.findAll();
            return ResponseEntity.ok(hotels);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }
    }
}
