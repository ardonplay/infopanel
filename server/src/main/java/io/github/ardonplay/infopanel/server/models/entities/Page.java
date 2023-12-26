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

    @Column(name = "order")
    private Integer order;

    @ManyToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "parent_id", referencedColumnName = "id")
    private Page parentPage;

    @ManyToOne(cascade = {CascadeType.ALL})
    @JoinColumn(name = "type", referencedColumnName = "id")
    private PageType pageType;

    @OneToMany(mappedBy = "page", cascade = CascadeType.ALL)
    private List<PageContent> pageContents;

    @Override
    public String toString(){
        return String.format("{ page: { id: %s, title: %s, pageType:  %s } }", id, title, pageType.getName());
    }

}