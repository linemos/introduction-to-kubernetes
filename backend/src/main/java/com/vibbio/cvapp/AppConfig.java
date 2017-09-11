package com.vibbio.cvapp;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

public class AppConfig extends ResourceConfig {
    public AppConfig() {
        String url = "jdbc:mysql://google/cvdatabase?cloudSqlInstance=INSERT_SQL_NAME_HERE&socketFactory=com.google.cloud.sql.mysql.SocketFactory";
        String username = "cvapp";
        String password = "cvapp-passord";
        DriverManagerDataSource driverManagerDataSource = new DriverManagerDataSource(url, username, password);
        driverManagerDataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        JdbcTemplate jdbcTemplate = new JdbcTemplate(driverManagerDataSource);

        register(new CVAppController(jdbcTemplate));
    }
}
