package com.vibbio.cvapp;

import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.servlet.ServletContextHandler;
import org.eclipse.jetty.servlet.ServletHolder;
import org.glassfish.jersey.servlet.ServletContainer;

public class CVApp {
    public static void main(String[] args) {
        new CVApp().start();
    }

    void start() {
        final ServletHolder servlet = new ServletHolder(
                new ServletContainer(
                        new AppConfig()
                )
        );

        final Server server = new Server(5000);
        server.setStopAtShutdown(true);

        final ServletContextHandler context = new ServletContextHandler(server, "/*");
        context.addServlet(servlet, "/*");

        try {
            server.start();
            server.join();
        } catch (final Exception e) {
            e.printStackTrace();
        } finally {
            server.destroy();
        }
    }
}