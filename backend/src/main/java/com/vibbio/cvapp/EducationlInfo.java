package com.vibbio.cvapp;

public class EducationlInfo {
    private String yearFrom;
    private String yearTo;
    private String place;
    private String comment;

    public EducationlInfo() {}

    public EducationlInfo(String yearFrom, String yearTo, String place, String comment) {
        this.yearFrom = yearFrom;
        this.yearTo = yearTo;
        this.place = place;
        this.comment = comment;
    }

    public String getYearFrom() {
        return yearFrom;
    }

    public String getYearTo() {
        return yearTo;
    }

    public String getPlace() {
        return place;
    }

    public String getComment() {
        return comment;
    }
}
