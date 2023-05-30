package lt.code.academy.ttpapi.transport.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
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
    private String registrationNumber;
    @Column(nullable = false, length = 100)
    private String owner;
    @Column(nullable = false, length = 50)
    private String registrationCountry;
    @Column(nullable = false, length = 50)
    private String carNumber;
    @Column(nullable = false, length = 200)
    private String comment;
    @Column(nullable = false, length = 20)
    private String vehicleModel;

    public static TransportEntity convert(Transport transport){
        return new TransportEntity(
          transport.getId(),
                transport.getRegistrationNumber(),
                transport.getOwner(),
                transport.getRegistrationCountry(),
                transport.getCarNumber(),
                transport.getComment(),
                transport.getVehicleModel()
        );
    }
}
