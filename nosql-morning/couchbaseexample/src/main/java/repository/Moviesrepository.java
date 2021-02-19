package repository;
import model.Movies;
import org.springframework.data.couchbase.repository.CouchbaseRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Moviesrepository extends CouchbaseRepository<Movies, String> {
    Movies findByName(String movie);
}