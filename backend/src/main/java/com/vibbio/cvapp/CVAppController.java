package com.vibbio.cvapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class CVAppController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @RequestMapping(value = "/me")
    public
    @ResponseBody
    PersonalInfo getMe() {
        String query = "SELECT name, location from personal";

        return jdbcTemplate.queryForObject(query, (resultSet, i) -> {
            return new PersonalInfo(resultSet.getString(1), resultSet.getString(2));
        });

    }

    @RequestMapping(value = "/work")
    public
    @ResponseBody
    WorkInfo getWork() {
        String query = "SELECT from_year, to_year, place, comment" +
                " from work where  = ";

        return jdbcTemplate.queryForObject(query, (resultSet, i) -> {
            return new WorkInfo(
                    resultSet.getString(1),
                    resultSet.getString(2),
                    resultSet.getString(3),
                    resultSet.getString(4));
        });

    }

    @RequestMapping(value = "/education")
    public
    @ResponseBody
    EducationlInfo getEducation() {
        String query = "SELECT first_name, last_name, age" +
                " from person where person.id = ";

        return jdbcTemplate.queryForObject(query, (resultSet, i) -> {
            return new EducationlInfo(
                    resultSet.getString(1),
                    resultSet.getString(2),
                    resultSet.getString(3),
                    resultSet.getString(4)
                    );
        });

    }
}