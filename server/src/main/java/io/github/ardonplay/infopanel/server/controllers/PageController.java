package io.github.ardonplay.infopanel.server.controllers;

import io.github.ardonplay.infopanel.server.models.dtos.PageDTO;
import io.github.ardonplay.infopanel.server.services.PageService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/page")
@AllArgsConstructor
public class PageController {

    private final PageService service;

    @GetMapping
    private ResponseEntity<PageDTO> getPage(@RequestParam int id) {
        return new ResponseEntity<>(service.getPage(id), HttpStatus.OK);
    }


    @PatchMapping
    private ResponseEntity<PageDTO> updatePage(@RequestBody PageDTO pageDTO) {
        return new ResponseEntity<>(service.updatePage(pageDTO), HttpStatus.OK);
    }

    @PostMapping
    private ResponseEntity<PageDTO> savePage(@RequestBody PageDTO pageDTO) {
        return new ResponseEntity<>(service.savePage(pageDTO), HttpStatus.OK);
    }

    @DeleteMapping
    private ResponseEntity<PageDTO> deletePage(@RequestParam int id) {
        service.deletePage(id);
        return new ResponseEntity<>(PageDTO.builder().id(id).build(), HttpStatus.OK);
    }


}
