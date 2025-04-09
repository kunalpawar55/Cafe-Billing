package com.example.Cafe_With_Spring.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Bill")
public class Billing_Entity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	@Column
	private String Name;
	@Column
	private String Contety;
	@Column
	private double Total_Amount;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public String getContety() {
		return Contety;
	}
	public void setContety(String contety) {
		Contety = contety;
	}
	public double getTotal_Amount() {
		return Total_Amount;
	}
	public void setTotal_Amount(double total_Amount) {
		Total_Amount = total_Amount;
	}
	@Override
	public String toString() {
		return "Billing_Entity [id=" + id + ", Name=" + Name + ", Contety=" + Contety + ", Total_Amount=" + Total_Amount
				+ "]";
	}
	public Billing_Entity() {
		// TODO Auto-generated constructor stub
	}
	public Billing_Entity(String name, String contety, double total_Amount) {
		super();
		Name = name;
		Contety = contety;
		Total_Amount = total_Amount;
	}
}
