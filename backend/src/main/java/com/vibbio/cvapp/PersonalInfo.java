package com.vibbio.cvapp;

public class PersonalInfo {
    private String name;
    private String location;

    public PersonalInfo() {}

    public PersonalInfo(String name, String location) {
        this.name = name;
        this.location = location;
    }

    public String getName() {
        return name;
    }

    public String getLocation() {
        return location;
    }
}