FROM java:8
MAINTAINER vibbio


# Install maven
RUN apt-get update
RUN apt-get install -y maven
RUN apt-get install -y mysql-client

WORKDIR /code

# Prepare by downloading dependencies
ADD pom.xml /code/pom.xml
RUN ["mvn", "dependency:resolve"]
RUN ["mvn", "verify"]

# Adding source, compile and package into a fat jar
ADD src /code/src
RUN ["mvn", "package"]

EXPOSE 5050
CMD ["/usr/lib/jvm/java-8-openjdk-amd64/bin/java", "-jar", "target/my-cv-backend.jar"]