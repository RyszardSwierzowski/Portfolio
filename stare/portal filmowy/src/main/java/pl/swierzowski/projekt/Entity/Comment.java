package pl.swierzowski.projekt.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int ownerId;
    private LocalDateTime dateOfCreate;
    private String content;


    public Comment(int ownerId, String content) {
        this.ownerId = ownerId;
        this.content = content;
        this.dateOfCreate = LocalDateTime.now();
    }
}
