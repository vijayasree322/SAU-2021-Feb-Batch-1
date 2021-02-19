package model;

import com.couchbase.client.java.repository.annotation.Field;
import org.springframework.data.annotation.Id;

import java.util.Date;
import java.util.List;


public class Movies {

    @Id
    String id;

    @Field
    String movieType;


    @Field
    String movieName;



    @Field
    List<String> city;

    @Field
    Date date;

    public String getId() {
        return id;
    }

    public String getMovieName() {
        return movieName;
    }

    public String getMovieType() {
        return movieType;
    }

    public List<String> getCity() {
        return city;
    }

    public Date getDate() {
        return date;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setCity(List<String> city) {
        this.city = city;
    }

    public void setMovieName(String movieName) {
        this.movieName = movieName;
    }

    public void setMovieType(String movieType) {
        this.movieType = movieType;
    }

    public void setDate(Date date) {
        this.date = date;
    }
    public Movies(String id, String movieType, String movieName, List<String> city, Date date) {
        this.id = id;
        this.movieType = movieType;
        this.movieName = movieName;
        this.city = city;
        this.date = date;
    }
}

