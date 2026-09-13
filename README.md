# Valeriano Construtora

Proposta de redesign em HTML, CSS e JavaScript. Responsiva, com animações de entrada, menu móvel e formulário que prepara uma mensagem no WhatsApp. Sem dependências ou etapa de compilação.

## Otimizações

- Fotos da página em WebP responsivo; os cinco arquivos maiores somam 226.586 bytes, contra 4.511.319 bytes dos PNGs originais (redução de 95%). Os originais continuam disponíveis ao ampliar as fotos.
- Imagens abaixo da abertura usam carregamento sob demanda e decodificação assíncrona. Dimensões declaradas reservam espaço para evitar saltos.
- Fontes com preconexão, pesos reduzidos e fallback de sistema.
- Animações de entrada, sequência discreta nos cartões e abertura do menu; preferência de movimento reduzido respeitada.
- Abertura móvel em fluxo normal, campos de 16 px, controles de pelo menos 44–48 px e menu rolável em telas baixas.
- Verificados arquivos, imagens responsivas e lógica do menu/formulário. A execução automatizada do Chrome foi bloqueada pelo ambiente (spawn EPERM); não foi possível concluir a inspeção visual em navegador.

## Visualizar

Abra `index.html` no navegador. Todos os recursos essenciais são locais; as fontes do Google têm alternativas de sistema.

## GitHub e Vercel

1. Envie o conteúdo desta pasta para a raiz de um repositório no GitHub.
2. Na Vercel, importe o repositório e selecione o preset **Other**.
3. Use a raiz como diretório do projeto. Deixe o comando de build vazio e use `.` como diretório de saída se necessário.
4. Publique. Nenhuma variável de ambiente é necessária.

## Conteúdo e personalização

- `index.html`: textos, seções, contatos e metadados.
- `styles.css`: cores, layout, responsividade e animações.
- `editorial.css`: nova direção visual baseada nas duas referências enviadas; carregada depois dos estilos básicos.
- `script.js`: menu, seleção de serviço e mensagem de WhatsApp.
- `assets/`: logotipo do site atual e as cinco fotos reais fornecidas pelo solicitante.

O formulário não envia mensagens automaticamente e não guarda informações: abre o WhatsApp com uma mensagem que a pessoa pode revisar. O telefone configurado é +55 61 98375-6803.

A abertura usa a imagem única da casa e a composição escolhida pelo solicitante: marca sobre o céu, arquitetura em destaque e navegação translúcida. A casa é uma imagem gerada por IA, identificada como ilustrativa na página; não representa uma obra da Valeriano. O prompt está em `IMAGE-PROMPT.md`. A seção Nossas obras reúne as cinco fotos reais e permite abrir os arquivos completos em uma nova aba.

As fotografias reais foram copiadas sem alterar seu conteúdo. O enquadramento é feito por CSS. O nome Saint Martin Club Residence, o serviço de manutenção de fachada e a localização no Lago Norte estão na placa da primeira foto. As demais legendas descrevem apenas os ambientes visíveis; não foram atribuídos nomes de clientes, datas, custos ou escopos não informados. As imagens de obras e da seção de confiança são reais; apenas a abertura utiliza a arquitetura ilustrativa.

Correspondência dos arquivos recebidos:

- Screenshot_1.png → `assets/fachada-saint-martin.png`
- Screenshot_2.png → `assets/area-piscina.png`
- Screenshot_3.png → `assets/manutencao-fachada.png`
- Screenshot_4.png → `assets/banheiro.png`
- Screenshot_5.png → `assets/ambiente-interno.png`

## Fontes consultadas em 13/09/2026

- https://valerianoconstrutora.com.br/ — serviços, logotipo, imagens, telefone, endereço, horário e Instagram. Textos reescritos para esta proposta.
- https://share.google/emuQYLbqPORfO8nda — link de avaliações enviado pelo solicitante. Acesso direto não disponível durante a pesquisa.
- https://www.benditoguia.com.br/empresa/valeriano-construtora-asa-sul-brasilia-df — listagem que reproduz nota 5,0 e 13 avaliações no Google, também informadas pelo solicitante.
- https://construcaoaz.com.br/guia-de-construtoras-em-brasilia-df/ — segunda listagem com nota 5,0 e 13 avaliações.

Avaliações não são sincronizadas automaticamente. Conferir número e nota no perfil do Google antes da apresentação/publicação. Horário adotado: o informado no site oficial (8h–18h). O link de localização leva ao complexo Brasil 21; o endereço completo aparece na página.

Esta entrega é uma proposta local, para publicação posterior pelo solicitante na Vercel.
