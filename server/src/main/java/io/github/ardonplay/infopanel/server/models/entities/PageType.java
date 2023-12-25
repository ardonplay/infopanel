package io.github.ardonplay.infopanel.server.models.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;


@Entity
@Table(name = "page_type")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PageType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "pageType", cascade = CascadeType.ALL)
    private List<Page> pages;
}
