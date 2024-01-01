package io.github.ardonplay.infopanel.server.models.entities;

import com.fasterxml.jackson.databind.JsonNode;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.util.Objects;

@Entity
@Table(name = "page_content")
@NoArgsConstructor
@Builder
@AllArgsConstructor
@Getter
@Setter
public class PageContent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(name = "body", columnDefinition = "jsonb")
    private JsonNode body;

    @Column(name = "\"order\"")
    private Integer order;

    @ManyToOne()
    @JoinColumn(name = "element_type", referencedColumnName = "id")
    private PageElementType pageElementType;

    @ManyToOne()
    @JoinColumn(name = "page_id", referencedColumnName = "id")
    private Page page;

    @Override
    public String toString() {
        return "PageContent{" +
                "id=" + id +
                ", body=" + body +
                ", order=" + order +
                ", pageElementType=" + pageElementType +
                ", page=" + page +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PageContent content = (PageContent) o;
        return Objects.equals(body, content.body) && Objects.equals(order, content.order) && Objects.equals(pageElementType, content.pageElementType) && Objects.equals(page, content.page);
    }

    @Override
    public int hashCode() {
        return Objects.hash(body, order, pageElementType, page);
    }
}
