package lt.code.academy.ttpapi.transport.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.code.academy.ttpapi.transport.dto.Transport;

import java.util.UUID;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "transport")
public class TransportEntity {
    @Id
    @GeneratedValue
    @Column(updatable = false)
    private UUID id;
    @Column(nullable = false, length = 10)
    private String registration_number;
    @Column(nullable = false, length = 100)
    private String owner;
    @Column(nullable = false, length = 50)
    private String registration_country;
    @Column(nullable = false, length = 50)
    private String car_number;
    @Column(nullable = false, length = 200)
    private String comment;

    public static TransportEntity convert(Transport transport){
        return new TransportEntity(
          transport.getId(),
                transport.getRegistration_number(),
                transport.getOwner(),
                transport.getRegistration_country(),
                transport.getCar_number(),
                transport.getComment()
        );
    }
}
