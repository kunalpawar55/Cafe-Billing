package com.example.Cafe_With_Spring.Controler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.Cafe_With_Spring.Service.Bill_Service;
import com.example.Cafe_With_Spring.entity.Billing_Entity;

@RestController
@RequestMapping("/bill") 

public class Bill_Controler {
    
    @Autowired
    Bill_Service ser;

    @PostMapping("/post")  
    public Billing_Entity postbilling(@RequestBody Billing_Entity en) {
        return ser.postbill(en);
    }
}
