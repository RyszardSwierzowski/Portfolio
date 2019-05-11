package pl.swierzowski.projekt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.swierzowski.projekt.Entity.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
}
