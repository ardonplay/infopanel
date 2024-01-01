package io.github.ardonplay.infopanel.server.services.mappers;

import io.github.ardonplay.infopanel.server.models.dtos.PageContentDTO;
import io.github.ardonplay.infopanel.server.models.dtos.PageDTO;
import io.github.ardonplay.infopanel.server.models.dtos.PageFolderDTO;
import io.github.ardonplay.infopanel.server.models.entities.Page;
import io.github.ardonplay.infopanel.server.models.entities.PageContent;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
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
    @Mapping(target = "content", source = "content",  qualifiedByName = "mapContent")
    @Named("mapToPageDTO")
    PageDTO mapToPageDTO(Page source);

    @Mapping(target = "type", source = "pageElementType.name")
    @Named("mapContent")
    PageContentDTO mapContentToDTO(PageContent source);

    @Mapping(target = "pageType.name", source = "type")
    @Named("mapDTOtoPage")
    Page mapDTOtoPage(PageDTO dto);

    void updateTarget(@MappingTarget Page target, PageDTO source);
}


