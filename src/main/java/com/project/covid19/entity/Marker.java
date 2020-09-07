package com.project.covid19.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Data
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode(of = "markerNo")
@ToString
@Entity
@Table(name = "markers")
public class Marker {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "marker_no")
    private Long markerNo;

    @Column(length = 50, nullable = true)
    private String confirmDate;

    @Column(length = 500, nullable = false)
    private String locationName;

    @Column(length = 500, nullable = false)
    private String address;

    @Column(length = 500, nullable = false)
    private String addrDepOne;

    @Column(length = 500, nullable = false)
    private String addrDepTwo;

    @Column(length = 500, nullable = false)
    private String addrDepThree;

    @Column(length = 1000, nullable = true)
    private String description;

    @Column(length = 20, nullable = true, name = "position_X")
    private String positionX;

    @Column(length = 20, nullable = true, name = "position_Y")
    private String positionY;
}