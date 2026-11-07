# Laviky Lavanderia

Redesign da página institucional da Laviky, em Valinhos. A página abre diretamente no navegador e usa arquivos estáticos.

## Arquivos

| Caminho | Responsabilidade |
|---|---|
| `index.html` | Cabeçalho, abertura, serviços, delivery, contato e rodapé |
| `styles.css` | Paleta, tipografia, componentes e comportamento responsivo |
| `site.js` | Filtros de serviço e anúncio do resultado a leitores de tela |
| `assets/` | Logotipos, foto da abertura, duas capas e artes dos serviços |

## Identidade visual

| Cor amostrada | Origem | Uso |
|---|---|---|
| `#153057` | Faixa de serviços em `face-07.png` | Abertura, rodapé e filtro selecionado |
| `#0070B8` | Faixa da arte de passadoria | Botões e links |
| `#0079B6` | Gota no logotipo de menu | Cor presente no logotipo original |
| `#D72252` | Faixa da arte de aluguel de toalhas | Marcadores de destaque |
| `#FFFFFF` | Faixa branca na arte de toalhas | Fundo e texto invertido |

O azul-gelo `#EDF5FB` é um tom de apoio escolhido para o site. Os títulos em caixa alta e peso muito alto das artes lembram fontes geométricas de exibição. A página usa Montserrat 800–900 como aproximação e Inter para leitura. O desenho itálico do logotipo vem dos PNGs fornecidos. Os arquivos de imagem não identificam as fontes originais. Se o navegador estiver sem acesso às fontes externas, o CSS usa fontes de sistema.

## Abrir e levar ao repositório

1. Extraia o ZIP e abra `index.html` no navegador. Mantenha a pasta `assets` no mesmo nível que o HTML.
2. No clone de `laviky-v2`, crie uma branch com `git switch -c redesign/laviky`.
3. Para avaliar em paralelo à home existente, copie `index.html`, `styles.css`, `site.js` e `assets/` para `public/redesign/`. Rode `npm install` e `npm run dev` a partir da raiz do projeto. Abra `http://localhost:3000/redesign/index.html`.
4. Para transformar a proposta na home do Next.js, migre o conteúdo de `main` para `src/app/page.tsx` e divida as seções conforme o quadro abaixo. O cabeçalho e o rodapé da proposta substituem os componentes compartilhados quando você fizer a integração.
5. Antes de publicar, confirme com a lavanderia o WhatsApp, os serviços em oferta e a cobertura do delivery. As artes de tapetes e vestidos mantêm preços antigos impressos nas imagens e estão identificadas na página como campanhas anteriores.

## Estrutura sugerida no Next.js

| Destino | O que migrar |
|---|---|
| `src/app/page.tsx` | Composição de abertura, serviços, delivery e contato |
| `src/app/globals.css` | Tokens de cor, tipografia e regras do layout. Reconciliar estilos globais existentes. |
| `src/components/layout/Navbar.tsx` e `Footer.tsx` | Navegação, logotipos e links compartilhados |
| `src/components/sections/ServiceGrid.tsx` | Grade e estado dos filtros, com `'use client'` |
| `src/data/services.ts` | Categoria, título, imagem, descrição e mensagem de orçamento por serviço |
| `public/laviky/` | Imagens. Atualizar referências para `/laviky/nome-do-arquivo`. |

Ao migrar o HTML para JSX, converta `class` para `className` e leve o filtro para o estado do componente. A versão estática usa links de WhatsApp, telefone, Instagram e Google. Os cliques abrem os canais correspondentes para o visitante.
