package io.github.ardonplay.infopanel.server.models.entities;

import com.fasterxml.jackson.databind.JsonNode;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

@Entity
@Table(name = "page_content")
@NoArgsConstructor
@Getter
@Setter
public class PageContent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;


    @ManyToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "element_type", referencedColumnName = "id")
    private PageElementType pageElementType;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(name = "body", columnDefinition = "jsonb")
    private JsonNode body;

    @ManyToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "page_id", referencedColumnName = "id")
    private Page page;
}
