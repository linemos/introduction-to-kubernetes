package com.vibbio.cvapp;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

public class AppConfig extends ResourceConfig {
    public AppConfig() {
        String url = "jdbc:mysql://google/cvdatabase?cloudSqlInstance=vibbioexpress:us-central1:mycvapp&socketFactory=com.google.cloud.sql.mysql.SocketFactory";
        String username = ""; // todo insert mysql username here
        String password = ""; // todo insert password here
        DriverManagerDataSource driverManagerDataSource = new DriverManagerDataSource(url, username, password);
        driverManagerDataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        JdbcTemplate jdbcTemplate = new JdbcTemplate(driverManagerDataSource);

        register(new CVAppController(jdbcTemplate));
    }
}
