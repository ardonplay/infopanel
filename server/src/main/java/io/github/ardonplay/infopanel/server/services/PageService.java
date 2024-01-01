package io.github.ardonplay.infopanel.server.services;

import io.github.ardonplay.infopanel.server.models.dtos.PageContentDTO;
import io.github.ardonplay.infopanel.server.models.dtos.PageDTO;
import io.github.ardonplay.infopanel.server.models.dtos.PageFolderDTO;
import io.github.ardonplay.infopanel.server.models.entities.Page;
import io.github.ardonplay.infopanel.server.models.entities.PageContent;
import io.github.ardonplay.infopanel.server.models.entities.PageType;
import io.github.ardonplay.infopanel.server.repositories.PageRepository;
import io.github.ardonplay.infopanel.server.services.mappers.PageMapper;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Slf4j
@Service
@AllArgsConstructor
public class PageService {
    private final PageRepository pageRepository;

    private final PageMapper mapper;

    private final TypeCacheService cacheService;

    public PageDTO getPage(int id) {

        Page page = pageRepository.findById(id).orElseThrow();

        if (page.getPageType().getName().equals("FOLDER")) {
            return mapper.mapToFolder(page);
        } else {
            return mapper.mapToPageDTO(page);
        }
    }

    @Transactional
    public PageDTO updatePage(PageDTO pageDTO) {

        Page page = pageRepository.findById(pageDTO.getId()).orElseThrow();

        PageType pageType = cacheService.getPageTypes().get(pageDTO.getType());

        page.setPageType(pageType);
        page.setTitle(pageDTO.getTitle());

        if (!pageDTO.getContent().isEmpty()) {
            page.getContent().clear(); //TODO: optimize to prevent deleting objects that already exist
            for(PageContentDTO contentDTO: pageDTO.getContent()){
                PageContent.builder().page(page).body(contentDTO.getBody()).pageElementType(cacheService.getPageElementTypes().get(contentDTO.getType())).build();
            }
        }

        if (pageDTO.getType().equals("FOLDER")) {
            PageFolderDTO folder = (PageFolderDTO) pageDTO;
            if (!folder.getChildren().isEmpty()) {
                List<Page> children = pageRepository.findAllById(folder.getChildren().stream().map(PageDTO::getId).toList());
                page.getChildren().retainAll(children);
                page.getChildren().removeAll(children);
                page.getChildren().addAll(children);
            }
        }

        return pageDTO;
    }


    public PageDTO savePage(PageDTO pageDTO) {
        Page page = new Page();
        page.setTitle(pageDTO.getTitle());

        PageType pageType = cacheService.getPageTypes().get(pageDTO.getType());

        page.setPageType(pageType);
        page.setOrder(pageDTO.getOrder());

        if(pageDTO.getParentId() != null){
            page.setParentPage(pageRepository.findById(pageDTO.getParentId()).orElse(null));
        }

        if (pageDTO.getType().equals("FOLDER")) {
            page.setChildren(pageRepository.findAllById(((PageFolderDTO) pageDTO).getChildren().stream().map(PageDTO::getId).toList()));
        } else {
            page.setContent(pageDTO.getContent().stream().map(contentDTO -> PageContent.builder().page(page).order(contentDTO.getOrder()).body(contentDTO.getBody()).pageElementType(cacheService.getPageElementTypes().get(contentDTO.getType())).build()).toList());
        }

        pageRepository.save(page);

        return mapper.mapToPageDTO(page);
    }


    public void deletePage(Integer id){
        pageRepository.delete(pageRepository.findById(id).orElseThrow());
    }

}
