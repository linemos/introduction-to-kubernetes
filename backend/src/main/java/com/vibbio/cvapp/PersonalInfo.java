package com.vibbio.cvapp;

class PersonalInfo {
    private final String name;
    private final String location;

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