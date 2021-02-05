# Creates the minimum environment to package and run this Skyve application.
# Note that this uses an in-memory database and is only useful for demonstration/development.
FROM bizhubaustralia/skyve-wildfly-postgresql

ENV LANG en_US.UTF-8

USER root
RUN mkdir /content
RUN chown jboss:jboss /content

USER jboss
ADD restLCNC.war /opt/jboss/wildfly/standalone/deployments/restLCNC.war
ADD restLCNC.json /opt/jboss/wildfly/standalone/deployments
ADD restLCNC-ds.xml /opt/jboss/wildfly/standalone/deployments
RUN touch /opt/jboss/wildfly/standalone/deployments/restLCNC.war.dodeploy

ENV SKYVE_CONTENT='/content/' \
    SKYVE_DATASTORE_DIALECT='org.skyve.impl.persistence.hibernate.dialect.PostgreSQL95SpatialDialect' \
    DATABASE_URL='restLCNC_db' \
    SKYVE_SECURITY_DOMAIN_NAME='restLCNC' \
    SKYVE_JNDI_NAME='restLCNCDB'

ENTRYPOINT [ "entrypoint.sh" ]