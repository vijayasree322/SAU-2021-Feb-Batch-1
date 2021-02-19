package controller;


import java.util.ArrayList;
        import java.util.List;
        import java.util.Optional;

        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.web.bind.annotation.DeleteMapping;
        import org.springframework.web.bind.annotation.GetMapping;
        import org.springframework.web.bind.annotation.PathVariable;
        import org.springframework.web.bind.annotation.PostMapping;
        import org.springframework.web.bind.annotation.PutMapping;
        import org.springframework.web.bind.annotation.RequestBody;
        import org.springframework.web.bind.annotation.RequestMapping;
        import org.springframework.web.bind.annotation.RestController;

       import model.Movies;
       import  repository.Moviesrepository;
@RestController
class BookmyshowController {

    @Autowired
    Moviesrepository bookmyshowRepository;

    /*
     * @RequestMapping("/") public String index() { return
     * "Welcome to the CRUD application!!"; }
     */
    // Inset movie
    @PostMapping("/Bookmyshow")
    public Movies addMovie(@RequestBody Movies movie) {
        return bookmyshowRepository.save(movie);
    }

    // Delete movie
    @DeleteMapping("/Bookmyshow/{id}")
    public String deleteById(@PathVariable String id) {
        bookmyshowRepository.deleteById(id);
        return "Deletion Successful";
    }

    // Get movie by id
    @GetMapping("/Bookmyshow/{id}")
    public Optional<Movies> getMovie(@PathVariable String id) {
        if (bookmyshowRepository.existsById(id)) {
            return bookmyshowRepository.findById(id);
        } else
            return Optional.empty();
    }

    // Get movies by name
    @GetMapping("/Bookmyshow/movie/{movie}")
    public Movies getMovieByName(@PathVariable String movie) {
        return bookmyshowRepository.findByName(movie);

    }

    // Get movies by city
    @GetMapping("/Bookmyshow/city/{city}")
    public List<Movies> getMoviesByCityName(@PathVariable String city) {
        List<Movies> BookmyshowList = new ArrayList<>();
        bookmyshowRepository.findAll().forEach(Bookmyshow -> {
            List<String> showCities = Bookmyshow.getCity();
            if (showCities.contains(city)) {
                BookmyshowList.add(Bookmyshow);
            }
        });

        return BookmyshowList;
    }

}


