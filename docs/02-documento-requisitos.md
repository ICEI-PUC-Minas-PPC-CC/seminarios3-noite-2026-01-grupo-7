02 — Documento de Requisitos do Software
---
Grupo: 7
Aplicação: Kahoot acessível
Comunidade: CMAEE Dr. Tarso de Coimbra

1. Visão Geral
Uma aplicação web interativa, inspirada em plataformas de questionários, adaptada com foco em recursos visuais e baixa complexidade para engajar e facilitar o aprendizado de pessoas com deficiência auditiva.

2. Público-Alvo
| Campo | Informação |
|---|---|
| Perfil dos usuários | Alunos com surdez/deficiência auditiva e educadores da instituição. |
| Faixa etária | Crianças, adolescentes e jovens adultos. |
| Necessidades de acessibilidade | Interface altamente visual, suporte a imagens/Libras, baixa dependência de texto. |
| Nível de familiaridade com tecnologia | Básico a intermediário. |

3. Requisitos Funcionais
| ID | Requisito | Prioridade | Origem da demanda |
|---|---|---|---|
| RF01 | Criação de questionários personalizados pelo professor. | Alta | Reunião com a comunidade |
| RF02 | Inserção de imagens e GIFs (ex: Libras) nas perguntas/respostas. | Alta | Reunião com a comunidade |
| RF03 | Geração de código/link para alunos acessarem a sala. | Alta | Reunião com a comunidade |
| RF04 | Sistema de respostas em tempo real pelos alunos. | Alta | Reunião com a comunidade |
| RF05 | Feedback visual imediato (acerto/erro) e ranking final. | Média | Reunião com a comunidade |

4. Requisitos Não Funcionais
| ID | Requisito | Categoria |
|---|---|---|
| RNF01 | A aplicação deve ser acessível via navegador web. | Acessibilidade |
| RNF02 | A interface deve ser simples e intuitiva (foco visual). | Usabilidade |
| RNF03 | A aplicação deve funcionar em dispositivos móveis. | Compatibilidade |
| RNF04 | O sistema deve processar respostas com baixa latência. | Desempenho |

5. Requisitos de Acessibilidade
(Dica: no GitHub, troque o espaço [ ] por um [x] minúsculo para marcar as caixinhas)
- [x] Interface predominantemente visual (ícones, cores, imagens)
- [x] Textos curtos e objetivos
- [x] Botões grandes e identificáveis
- [x] Contraste adequado de cores
- [x] Compatível com Libras (se aplicável: vídeos, sinais, glossário)
- [x] Sem dependência de áudio para funcionalidades essenciais

6. Tecnologias Escolhidas
| Componente | Tecnologia |
|---|---|
| Front-end | HTML, CSS, JavaScript e React |
| Back-end (se houver) | Node.js |
| Banco de dados (se houver) | Firebase (ideal para tempo real) ou PostgreSQL |
| Hospedagem | Vercel (Front) e Railway (Back) |

7. Protótipo / Wireframes
*(Coloque aqui o link do protótipo finalizado no Figma. Lembre-se também de salvar imagens na pasta `evidencias/prints/` como o professor pediu).*

8. Escopo Mínimo Viável (MVP)
- [x] Criação de um quiz com suporte a imagens.
- [x] Entrada de alunos na sala através de um código.
- [x] Respostas em tempo real e exibição do vencedor.

9. Funcionalidades Desejáveis (se houver tempo)
- Relatório de desempenho dos alunos salvo para o professor.
- Banco de GIFs em Libras pré-integrado na plataforma.
