package com.example.Cafe_With_Spring.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class LoginEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String userName;

    @Column
    private String password;

    @Column
    private String gender;

    @Column
    private String email;

    @Column
    private String userType;  
    public LoginEntity() {}

    public LoginEntity(String userName, String password, String gender, String email, String userType) {
        this.userName = userName;
        this.password = password;
        this.gender = gender;
        this.email = email;
        this.userType = userType;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    @Override
    public String toString() {
        return "LoginEntity [id=" + id + ", userName=" + userName + ", password=" + password + ", gender=" + gender
                + ", email=" + email + ", userType=" + userType + "]";
    }
}
