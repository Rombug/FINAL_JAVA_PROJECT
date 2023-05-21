package lt.code.academy.ttpapi.transport.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.code.academy.ttpapi.transport.entity.TransportEntity;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Transport {
    private UUID id;
    @NotBlank
    @Size(min = 5, max = 10)
    private String registration_number;
    @NotBlank
    @Size(min = 5, max = 100)
    private String owner;
    @NotBlank
    @Size(min = 3, max = 50)
    private String registration_country;
    @NotBlank
    @Size(min = 3, max = 50)
    private String car_number;
    @NotBlank
    @Size(min = 5, max = 200)
    private String comment;

    public static Transport convert(TransportEntity entity){
        return new Transport(
          entity.getId(),
                entity.getRegistration_number(),
                entity.getOwner(),
                entity.getRegistration_country(),
                entity.getCar_number(),
                entity.getComment()
        );
    }
}
