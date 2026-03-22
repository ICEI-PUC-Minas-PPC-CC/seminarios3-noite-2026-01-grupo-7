02 — Documento de Requisitos do Software
---
Grupo: 7 |
Aplicação: Kahoot acessível |
Comunidade: CMAEE Dr. Tarso de Coimbra 

1. Visão Geral
A aplicação consiste em uma plataforma interativa educacional voltada para pessoas com deficiência auditiva, inspirada em sistemas de quiz. O sistema permitirá a criação e participação em atividades educativas de forma visual, dinâmica e acessível.

O principal objetivo é facilitar o aprendizado, promover a inclusão digital e estimular a interação entre os usuários da instituição, atendendo à necessidade de ferramentas digitais adaptadas para o público surdo.

2. Público-Alvo

| Campo | Informação |
|---|---|
| Perfil dos usuários | Alunos com surdez/deficiência auditiva e educadores da instituição. |
| Faixa etária | Crianças, adolescentes e jovens adultos. |
| Necessidades de acessibilidade | Interface altamente visual, suporte a imagens/Libras, baixa dependência de texto. |
| Nível de familiaridade com tecnologia | Baixo a intermediário. |

3. Requisitos Funcionais

| ID | Requisito | Prioridade | Origem da demanda |
|---|---|---|---|
| RF01 | Criação de questionários personalizados pelo professor. | Alta | Reunião com a comunidade |
| RF02 | Inserção de imagens e GIFs (ex: Libras) nas perguntas/respostas. | Alta | Reunião com a comunidade |
| RF03 | Geração de código/link para alunos acessarem a sala. | Alta | Reunião com a comunidade |
| RF04 | Feedback visual imediato (acerto/erro). | Alta | Reunião com a comunidade |

4. Requisitos Não Funcionais

| ID | Requisito | Categoria |
|---|---|---|
| RNF01 | A aplicação deve ser acessível via navegador web. | Acessibilidade |
| RNF02 | A interface deve ser simples e intuitiva (foco visual). | Usabilidade |
| RNF03 | A aplicação deve ser uma one page application. | Desempenho |
| RNF04 | O sistema deve processar respostas com baixa latência. | Desempenho |

5. Requisitos de Acessibilidade
(Dica: no GitHub, troque o espaço [ ] por um [x] minúsculo para marcar as caixinhas)
- [x] Interface predominantemente visual (ícones, cores, imagens)
- [x] Textos curtos e objetivos
- [x] Botões grandes e identificáveis
- [x] Contraste adequado de cores
- [x] Feedback visual (cores, animações e símbolos para acertos e erros)
- [x] Compatível com Libras (se aplicável: vídeos, sinais, glossário)
- [x] Sem dependência de áudio para funcionalidades essenciais

6. Tecnologias Escolhidas

| Componente | Tecnologia |
|---|---|
| Front-end | HTML, CSS, JavaScript e React |
| Back-end  | (Não definido – possível uso de Node.js) |
| Banco de dados | Não definido |
| Hospedagem | Github Pages |

7. Protótipo / Wireframes
* https://carrot-bolt-90784721.figma.site *

8. Escopo Mínimo Viável (MVP)
- [x] Criação de um quiz com suporte a imagens.
- [x] Entrada de alunos na aplicação através de link simples.
- [x] Exibir a pontuação do usuário ao fim.
- [x] Quiz funcionando de forma mais simples. 

9. Funcionalidades Desejáveis (se houver tempo)
- Relatório de desempenho dos alunos salvo para o professor.
- Banco de GIFs em Libras pré-integrado na plataforma.
