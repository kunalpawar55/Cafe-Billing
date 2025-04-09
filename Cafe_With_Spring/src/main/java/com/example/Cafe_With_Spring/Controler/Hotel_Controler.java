package com.example.Cafe_With_Spring.Controler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.multipart.MultipartFile;

import com.example.Cafe_With_Spring.Service.Hotel_Service;
import com.example.Cafe_With_Spring.entity.Add_Hotel;
@RestController 
@RequestMapping("/hotel") 
public class Hotel_Controler {

    @Autowired
    private Hotel_Service ser;
    
    @PostMapping
    public ResponseEntity<?> post(@RequestBody Add_Hotel add) {
        return ser.postdata(add);
    }
    
    @GetMapping
    public ResponseEntity<List<Add_Hotel>> getall( )
    {
    	
    	
    	return ser.getdata();
    }
}
