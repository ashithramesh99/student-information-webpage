package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "student") 
public class Student {
	
	@Id
	private String id;
	private String name;
	private int date;
	private String standard;
	private String division;
	private String gender;
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Student(String id, String name, int date, String standard, String division, String gender) {
		super();
		this.id = id;
		this.name = name;
		this.date = date;
		this.standard = standard;
		this.division = division;
		this.gender = gender;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getDateofBirth() {
		return date;
	}
	public void setDateofBirth(int date) {
		this.date = date;
	}
	public String getStandard() {
		return standard;
	}
	public void setStandard(String standard) {
		this.standard = standard;
	}
	public String getDivision() {
		return division;
	}
	public void setDivision(String division) {
		this.division = division;
	}
	public String geGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}

}
