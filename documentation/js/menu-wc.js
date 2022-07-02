'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-06d6c60e61ddc33cd169fe04fc668ced0b09f28e103cb901b3a9d58345e9605227e4324d2a17138974402c0ad3829922be60dd3eb798f29d271010da4f6d82c5"' : 'data-target="#xs-components-links-module-AppModule-06d6c60e61ddc33cd169fe04fc668ced0b09f28e103cb901b3a9d58345e9605227e4324d2a17138974402c0ad3829922be60dd3eb798f29d271010da4f6d82c5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-06d6c60e61ddc33cd169fe04fc668ced0b09f28e103cb901b3a9d58345e9605227e4324d2a17138974402c0ad3829922be60dd3eb798f29d271010da4f6d82c5"' :
                                            'id="xs-components-links-module-AppModule-06d6c60e61ddc33cd169fe04fc668ced0b09f28e103cb901b3a9d58345e9605227e4324d2a17138974402c0ad3829922be60dd3eb798f29d271010da4f6d82c5"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BuscaEtiquetaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BuscaEtiquetaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BuscaLivroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BuscaLivroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CadEnderecoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CadEnderecoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CadastrarLivroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CadastrarLivroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CarouselInicioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CarouselInicioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CarrinhoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CarrinhoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeletarLivroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeletarLivroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditarLivroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditarLivroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EnderecoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EnderecoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FaleConoscoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FaleConoscoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FuncionarioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FuncionarioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LivroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LivroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MeusPedidosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MeusPedidosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MinhaContaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MinhaContaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagamentoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PagamentoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Cliente.html" data-type="entity-link" >Cliente</a>
                            </li>
                            <li class="link">
                                <a href="classes/ClienteLogin.html" data-type="entity-link" >ClienteLogin</a>
                            </li>
                            <li class="link">
                                <a href="classes/Endereco.html" data-type="entity-link" >Endereco</a>
                            </li>
                            <li class="link">
                                <a href="classes/Etiqueta.html" data-type="entity-link" >Etiqueta</a>
                            </li>
                            <li class="link">
                                <a href="classes/Funcionario.html" data-type="entity-link" >Funcionario</a>
                            </li>
                            <li class="link">
                                <a href="classes/FuncionarioLogin.html" data-type="entity-link" >FuncionarioLogin</a>
                            </li>
                            <li class="link">
                                <a href="classes/Livros.html" data-type="entity-link" >Livros</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pedido.html" data-type="entity-link" >Pedido</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EnderecoService.html" data-type="entity-link" >EnderecoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EtiquetaService.html" data-type="entity-link" >EtiquetaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LivrosService.html" data-type="entity-link" >LivrosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PedidoService.html" data-type="entity-link" >PedidoService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});