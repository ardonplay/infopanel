package io.github.ardonplay.infopanel.server.models.entities;

import com.fasterxml.jackson.databind.JsonNode;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.util.List;

@Entity(name = "pages")
@Data
@NoArgsConstructor
public class Page {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "title")
    private String title;

    @ManyToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "type", referencedColumnName = "id")
    private PageType pageType;

    @OneToMany(mappedBy = "page", cascade = CascadeType.ALL)
    private List<PageContent> pageContents;
}