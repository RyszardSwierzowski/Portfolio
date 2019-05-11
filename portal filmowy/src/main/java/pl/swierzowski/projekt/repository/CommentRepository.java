package pl.swierzowski.projekt.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.swierzowski.projekt.Entity.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
}
