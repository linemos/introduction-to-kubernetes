package com.vibbio.cvapp;

public class EducationlInfo {
    private final String yearFrom;
    private final String yearTo;
    private final String place;
    private final String comment;

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
