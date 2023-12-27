package io.github.ardonplay.infopanel.server.controllers;

import io.github.ardonplay.infopanel.server.models.dtos.PageDTO;
import io.github.ardonplay.infopanel.server.models.entities.Page;
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
    private ResponseEntity<Object> getPage(@RequestParam int id) {

        return new ResponseEntity<>(service.getPage(id), HttpStatus.OK);
    }
}
