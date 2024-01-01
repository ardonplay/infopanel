package io.github.ardonplay.infopanel.server.models.entities;

import jakarta.persistence.*;
import lombok.*;
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

    @Column(name = "\"order\"")
    private Integer order;

    @ManyToOne()
    @JoinColumn(name = "parent_id", referencedColumnName = "id")
    private Page parentPage;

    @OneToMany(mappedBy = "parentPage")
    private List<Page> children;

    @ManyToOne()
    @JoinColumn(name = "type", referencedColumnName = "id")
    private PageType pageType;

    @OneToMany(mappedBy = "page", cascade = {CascadeType.ALL}, orphanRemoval = true)
    private List<PageContent> content;

    @Override
    public String toString(){
        return String.format("{ page: { id: %s, title: %s, pageType:  %s, order: %s } }", id, title, pageType.getName(), order);
    }

}