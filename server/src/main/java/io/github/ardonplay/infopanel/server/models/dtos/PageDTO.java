package io.github.ardonplay.infopanel.server.models.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PageDTO {
    Integer id;

    String title;

    String type;

    Integer order;

    Integer parentId;

    List<PageContentDTO> content;
}
