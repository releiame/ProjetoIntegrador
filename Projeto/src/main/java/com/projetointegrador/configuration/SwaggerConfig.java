package com.projetointegrador.configuration;

import org.springdoc.core.customizers.OpenApiCustomiser;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.responses.ApiResponse;
import io.swagger.v3.oas.models.responses.ApiResponses;

@Configuration //indica que a classe é uma fonte de configuração e definição de Beans
public class SwaggerConfig {

	@Bean //Indicando que o objeto que pode ser injetado em qualquer ponto da sua aplicação
	public OpenAPI springVendaLivrosOpenAPI()
	{
		//gerando a documentação no Swagger utilizando a especificação OpenAPI
		return new OpenAPI()
				.info(new Info()
					.title("Aplicação do Grupo 6 - Digital House")
					.description("Projeto Desenvolvido pelo grupo 6 da Digital House")
					.version("v.0.1")
				.license(new License()
					.name("Digital House")
					.url("https://digitalhouse.com"))
				.contact(new Contact()
					.name("Treinamento Porto Seguro")
					.email("portoseguro@porto.com")))
				.externalDocs(new ExternalDocumentation()
						.description("GitHub")
						.url("https://github.com/ProjetoIntegrador-DH"));
					
	}
	
	@Bean
	public OpenApiCustomiser customerGlobalHeaderOpenApiCustomiser()
	{
		return openApi -> {
			openApi.getPaths().values().forEach(pathItem -> pathItem.readOperations().forEach(operation ->
			{
				ApiResponses apiResponses = operation.getResponses();
				
				apiResponses.addApiResponse("200",createApiResponse("Sucesso!!!"));
				apiResponses.addApiResponse("201",createApiResponse("Objeto Persistido"));
				apiResponses.addApiResponse("204",createApiResponse("Objeto Excluído"));
				apiResponses.addApiResponse("400",createApiResponse("Erro na requisição"));
				apiResponses.addApiResponse("401",createApiResponse("Acesso não autorizado"));
				apiResponses.addApiResponse("404",createApiResponse("Objeto não encontrado"));
				apiResponses.addApiResponse("500",createApiResponse("Erro na aplicação"));
			}));
		};
	}

	private ApiResponse createApiResponse(String message) {
		
		return new ApiResponse().description(message);
	}
}
