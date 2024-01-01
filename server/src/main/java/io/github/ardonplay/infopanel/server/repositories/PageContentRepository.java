package io.github.ardonplay.infopanel.server.repositories;

import io.github.ardonplay.infopanel.server.models.entities.Page;
import io.github.ardonplay.infopanel.server.models.entities.PageContent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PageContentRepository extends JpaRepository<PageContent, Integer> {
    void deleteAllByPageId(int id);
}
