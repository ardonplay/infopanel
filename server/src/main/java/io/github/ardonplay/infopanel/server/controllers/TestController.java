package io.github.ardonplay.infopanel.server.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.ardonplay.infopanel.server.models.entities.Page;
import io.github.ardonplay.infopanel.server.models.entities.PageContent;
import io.github.ardonplay.infopanel.server.models.entities.PageElementType;
import io.github.ardonplay.infopanel.server.models.entities.PageType;
import io.github.ardonplay.infopanel.server.repositories.PageRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController("/")
@AllArgsConstructor
public class TestController {
    private final PageRepository pageRepository;

    @GetMapping()
    private String test() throws JsonProcessingException {
        Page page = new Page();
        List<PageContent> pageContents = new ArrayList<>();
        PageContent content = new PageContent();

        String jsonString = "{\"k1\":\"v1\",\"k2\":\"v2\"}";

        ObjectMapper mapper = new ObjectMapper();
        JsonNode actualObj = mapper.readTree(jsonString);
        content.setBody(actualObj);
        PageElementType elementType = new PageElementType();
        elementType.setName("test_type");
        content.setPageElementType(elementType);
        pageContents.add(content);

        page.setPageType(PageType.builder().name("DEFAULT").build());
        page.setTitle("test_page");
        page.setPageContents(pageContents);

        return pageRepository.save(page).getTitle();
    }


    @GetMapping("/get")
    private String get() {
        Page page = pageRepository.findAll().get(0);
        return page.getPageContents().get(0).getBody().toString();
    }
}
