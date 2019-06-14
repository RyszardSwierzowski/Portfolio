package pl.swierzowski.projekt.testSecurity.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import pl.swierzowski.projekt.testSecurity.model.Users;

import java.util.Optional;

public interface UsersRepository extends JpaRepository<Users, Integer> {
    Optional<Users> findByName(String username);
}
