import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.couchbase.config.AbstractCouchbaseConfiguration;
import java.util.List;

@Configuration
public class Config extends AbstractCouchbaseConfiguration {


    @Override
    protected List<String> getBootstrapHosts() {
        return Arrays.asList("127.0.0.1");
    }

    @Override
    protected String getBucketName() {
        return "couchbasedemo";
    }

    @Override
    protected String getBucketPassword() {
      return "admin1";
    }
    @Override
    protected String getUsername(){
        return "admin";
    }
}

