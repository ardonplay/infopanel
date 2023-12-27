package io.github.ardonplay.infopanel.server.services;

import io.github.ardonplay.infopanel.server.models.entities.Page;
import io.github.ardonplay.infopanel.server.repositories.PageRepository;
import io.github.ardonplay.infopanel.server.services.mappers.PageMapper;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@AllArgsConstructor
public class PageService {
    private final PageRepository repository;

    private final PageMapper mapper;


    public Object getPage(int id) {

        Page page = repository.findById(id).orElseThrow();

        if (page.getPageType().toString().equals("FOLDER")) {
            return mapper.mapToFolder(page);
        } else {
            return mapper.mapToPageDTO(page);
        }
    }

}
