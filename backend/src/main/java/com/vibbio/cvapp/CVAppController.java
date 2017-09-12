package com.vibbio.cvapp;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;
import java.io.IOException;
import java.util.List;

@Path("/api")
public class CVAppController {

    private JdbcTemplate jdbcTemplate;
    ObjectMapper mapper = new ObjectMapper();


    public CVAppController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    @GET
    @Path("/me")
    public Response getMe() throws JsonProcessingException {
        String query = "SELECT * from personal";

        PersonalInfo personalInfo=  jdbcTemplate.queryForObject(query, (resultSet, i) -> {
            return new PersonalInfo(resultSet.getString("full_name"), resultSet.getString("location"));
        });

        return Response.ok(mapper.writeValueAsString(personalInfo)).build();
    }

    @POST
    @Path("/me")
    public Response postMe(String json) throws IOException {
        String query = "INSERT INTO personal (name, location) VALUES (?,?)";

        PersonalInfo personalInfo = mapper.readValue(json, PersonalInfo.class);
        jdbcTemplate.update(query, personalInfo.getName(), personalInfo.getLocation());

        return Response.noContent().build();
    }


    @GET
    @Path("/work")
    public Response getWork() throws JsonProcessingException {
        String query = "SELECT * from work";

        List<WorkInfo> workInfo = jdbcTemplate.query(query, (resultSet, i) -> {
            return new WorkInfo(
                    resultSet.getString("from_year"),
                    resultSet.getString("to_year"),
                    resultSet.getString("place"),
                    resultSet.getString("comment"));
        });

        return Response.ok(mapper.writeValueAsString(workInfo)).build();
    }



    @POST
    @Path("/work")
    public Response postWork(String json) throws IOException {
        String query = "INSERT INTO work (place, comment, from_year, to_year) VALUES (?,?,?,?)";

        WorkInfo workInfo = mapper.readValue(json, WorkInfo.class);

        jdbcTemplate.update(
                query,
                workInfo.getPlace(),
                workInfo.getComment(),
                workInfo.getYearFrom(),
                workInfo.getYearTo());

        return Response.noContent().build();
    }

    @GET
    @Path("/education")
    public Response getEducation() throws JsonProcessingException {
        String query = "SELECT * from education";

        List<EducationlInfo> educationlInfo = jdbcTemplate.query(query, (resultSet, i) -> {
            return new EducationlInfo(
                    resultSet.getString("from_year"),
                    resultSet.getString("to_year"),
                    resultSet.getString("place"),
                    resultSet.getString("comment"));
        });
        return Response.ok(mapper.writeValueAsString(educationlInfo)).build();
    }

    @POST
    @Path("/education")
    public Response postEducation(String json) throws IOException {
        String query = "INSERT INTO education (place, comment, from_year, to_year) VALUES (?,?,?,?)";

        EducationlInfo educationlInfo = mapper.readValue(json, EducationlInfo.class);

        jdbcTemplate.update(
                query,
                educationlInfo.getPlace(),
                educationlInfo.getComment(),
                educationlInfo.getYearFrom(),
                educationlInfo.getYearTo());

        return Response.noContent().build();
    }
}