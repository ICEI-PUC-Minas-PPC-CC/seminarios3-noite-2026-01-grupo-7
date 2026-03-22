# 03 — Plano e Cronograma de Desenvolvimento

> **Grupo:** 7
> **Aplicação:** Kahoot Acessível

---

## 1. Divisão de Tarefas

| Integrante | Responsabilidades principais |
| ----------- | ------------------------------ |
| **Pedro Henrique** | Documentação de Requisitos |
| **Erick Simo** | Prototipação (Figma) |
| **Breno da Silva** | Desenvolvimento Front-end (Integração e Lógica) |
| **Rafael Siqueira** | Desenvolvimento Back-end e Banco de Dados |

## 2. Cronograma de Desenvolvimento

| Semana | Período (dd/MM à dd/MM) | Atividade planejada | Responsável | Status |
| :------: | --------- | -------------------- | -----------: | :------: |
| 1 | 18/02 à 25/02 | Formação do grupo | Todos | concluído |
| 2 | 26/02 à 04/03 | Contato com comunidade e Levantamento de demandas | Todos | concluído |
| 3 | 05/03 à 11/03 | Definição de requisitos | Pedro | concluído |
| 4 | 12/03 à 18/03 | Prototipação / wireframes | Pedro | em andamento |
| 5 | 19/03 à 25/03 | Desenvolvimento — Sprint 1 | Erick/Breno/Rafael | não iniciado |
| 6 | 26/03 à 01/04 | Desenvolvimento — Sprint 1 | Erick/Breno/Rafael | não iniciado |
| 7 | 02/04 à 08/04 | Validação com a comunidade | Todos | não iniciado |
| 8 | 09/04 à 15/04 | Desenvolvimento — Sprint 2 | Erick/Breno/Rafael | não iniciado |
| 9 | 16/04 à 22/04 | Desenvolvimento — Sprint 2 | Erick/Breno/Rafael | não iniciado |
| 10 | 23/04 à 29/04 | Testes e ajustes | Todos | não iniciado |
| 11 | 30/04 à 06/05 | Deploy / hospedagem | Rafael/Breno | não iniciado |
| 12 | 07/05 à 13/05 | Validação final com a comunidade | Todos | não iniciado |
| 13 | 14/05 à 20/05 | **Entrega presencial** | Todos | não iniciado |
| 14 | 21/05 à 27/05 | Preenchimento dos relatórios APC | Todos | não iniciado |

> Ajuste o cronograma conforme o calendário do semestre e os feriados.

## 3. Marcos (Milestones)

| Marco | Data prevista | Critério de conclusão |
| ------- | :------------: | ---------------------- |
| Demandas levantadas | 04/03 | Registro de contato com a comunidade |
| Requisitos definidos | 21/03 | Documento `02-documento-requisitos.md` preenchido |
| Protótipo aprovado | 25/03 | Wireframes validados com a comunidade |
| MVP funcional | 22/04 | Funcionalidades mínimas operacionais |
| Deploy realizado | 06/05 | Aplicação acessível pela Internet |
| Entrega presencial | 15/05 | Software apresentado à comunidade |
| Relatórios APC | 25/05 | Relatório e autoavaliação preenchidos |

## 4. Estratégia de Desenvolvimento

### Ambiente de desenvolvimento

Utilizaremos o VS Code como editor de código principal. O versionamento será feito via Git/GitHub. Trabalharemos com a branch `main` para código estável (produção) e a branch `dev` para integração do desenvolvimento. Cada funcionalidade será feita em uma branch separada antes de abrir um Pull Request para a `dev`.

### Estratégia de testes

Os testes serão manuais. A equipe fará rodadas de testes locais navegando pela aplicação web tanto pelo computador quanto pelo celular (para garantir a responsividade). Antes da entrega, faremos um teste simulando uma sala cheia com todos os membros do grupo respondendo ao mesmo tempo.

### Estratégia de deploy

O Front-end será hospedado gratuitamente na Vercel (conectado ao GitHub para deploy automático a cada novo commit na branch main). O Back-end será hospedado no Railway.

## 5. Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
| ------- | :------------: | :-------: | ---------- |
| Atraso no cronograma | Média | Alto | Reuniões semanais de alinhamento e foco exclusivo no MVP antes das funções extras. |
| Dificuldade técnica inesperada | Alta | Médio | Consultar documentação das tecnologias, pedir ajuda aos professores e realizar programação em pares (pair programming). |
| Comunidade indisponível para reuniões | Baixa | Alto | Agendar contatos com a professora Fabiana com bastante antecedência. |
| Problemas de infraestrutura no dia da entrega (ex: sem internet) | Média | Alto | Levar roteador 4G/5G próprio ou celulares com dados móveis para rotear a internet para a sala. |

## 6. Comunicação do Grupo

| Canal | Finalidade |
| ------- | ----------- |
| WhatsApp | Comunicação diária e rápida |
| GitHub (Projects/Issues) | Controle de tarefas e acompanhamento do Kanban |
| Discord / Teams | Reuniões semanais de alinhamento e pair programming |
