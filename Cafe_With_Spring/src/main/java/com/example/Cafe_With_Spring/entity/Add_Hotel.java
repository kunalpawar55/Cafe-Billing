package com.example.Cafe_With_Spring.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "hotel")
public class Add_Hotel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String hotelName;   

    @Column
    private int rating;

    @Column
    private long price;

    @Column
    private String amenities;

    @Column
    private String location;

    @Column
    private double latitude;

    @Column
    private double longitude;

    @Column
    private String contain = "Standard";


public Add_Hotel() {
	// TODO Auto-generated constructor stub
}


public Add_Hotel(String hotelName, int rating, long price, String amenities, String location, double latitude,
		double longitude, String contain) {
	super();
	this.hotelName = hotelName;
	this.rating = rating;
	this.price = price;
	this.amenities = amenities;
	this.location = location;
	this.latitude = latitude;
	this.longitude = longitude;
	this.contain = contain;
}


@Override
public String toString() {
	return "Add_Hotel [id=" + id + ", hotelName=" + hotelName + ", rating=" + rating + ", price=" + price
			+ ", amenities=" + amenities + ", location=" + location + ", latitude=" + latitude + ", longitude="
			+ longitude + ", contain=" + contain + "]";
}


public Long getId() {
	return id;
}


public void setId(Long id) {
	this.id = id;
}


public String getHotelName() {
	return hotelName;
}


public void setHotelName(String hotelName) {
	this.hotelName = hotelName;
}


public int getRating() {
	return rating;
}


public void setRating(int rating) {
	this.rating = rating;
}


public long getPrice() {
	return price;
}


public void setPrice(long price) {
	this.price = price;
}


public String getAmenities() {
	return amenities;
}


public void setAmenities(String amenities) {
	this.amenities = amenities;
}


public String getLocation() {
	return location;
}


public void setLocation(String location) {
	this.location = location;
}


public double getLatitude() {
	return latitude;
}


public void setLatitude(double latitude) {
	this.latitude = latitude;
}


public double getLongitude() {
	return longitude;
}


public void setLongitude(double longitude) {
	this.longitude = longitude;
}


public String getContain() {
	return contain;
}


public void setContain(String contain) {
	this.contain = contain;
}
}