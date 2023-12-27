package io.github.ardonplay.infopanel.server.services.mappers;

import io.github.ardonplay.infopanel.server.models.dtos.PageDTO;
import io.github.ardonplay.infopanel.server.models.dtos.PageFolderDTO;
import io.github.ardonplay.infopanel.server.models.entities.Page;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

@Mapper(componentModel = "spring")
public interface PageMapper {

    @Mapping(target = "content", ignore = true)
    @Mapping(target = "type", source = "pageType.name")
    @Named("mapToPageDTOWithoutContent")
    PageDTO mapToPageDTOWithoutContent(Page source);

    @Mapping(target = "content", ignore = true)
    @Mapping(target = "type", source = "pageType.name")
    @Mapping(target = "children", source = "children", qualifiedByName = "mapToPageDTOWithoutContent")
    @Named("mapToFolder")
    PageFolderDTO mapToFolder(Page source);

    @Mapping(target = "type", source = "pageType.name")
    @Named("mapToPageDTO")
    PageDTO mapToPageDTO(Page source);
}


