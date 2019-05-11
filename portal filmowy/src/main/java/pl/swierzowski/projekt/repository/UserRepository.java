package pl.swierzowski.projekt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.swierzowski.projekt.Entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
